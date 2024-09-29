import certificateHelpers from "@/utils/certificateHelpers";
import generatePdfFromHtml from "@/utils/pdfHelpers";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, position, location, fromDate, toDate } = await request.json();
  const certificateHtml = certificateHelpers.getSocialInterCertificate({
    name,
    position,
    location,
    fromDate,
    toDate,
  });
  const pdfBuffer = await generatePdfFromHtml(certificateHtml);
  return new NextResponse(pdfBuffer, {
    status: 200,
  });
}
