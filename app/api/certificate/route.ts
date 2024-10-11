import certificateHelpers from "@/utils/certificateHelpers";
import commonHelpers from "@/utils/commonHelpers";
import generatePdfFromHtml from "@/utils/pdfHelpers";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, position, location, fromDate, months, toDate } =
      await request.json();

    const startDate = certificateHelpers.formatDateForCertificate(
      new Date(fromDate)
    );
    const endDate = toDate
      ? certificateHelpers.formatDateForCertificate(new Date(toDate))
      : certificateHelpers.formatDateForCertificate(
          commonHelpers.addMonths(new Date(fromDate), months)
        );

    const certificateHtml = certificateHelpers.getSocialInterCertificate({
      name: commonHelpers.capitalizeFirstLetter(name),
      position: commonHelpers.capitalizeFirstLetter(position),
      location: commonHelpers.capitalizeFirstLetter(location),
      fromDate: startDate,
      toDate: endDate,
    });

    const pdfBuffer = await generatePdfFromHtml(certificateHtml);
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": `${pdfBuffer?.length}`,
      },
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
