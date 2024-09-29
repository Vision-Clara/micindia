const puppeteer = require("puppeteer");

async function generatePdfFromHtml(html: string) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setContent(html, {
    waitUntil: ["load"],
  });

  // Generate PDF for the report
  const pdfBuffer = await page.pdf({
    printBackground: true,
    width: "1440px",
    height: "1018px",
  });
  await browser.close();

  return pdfBuffer;
}

export default generatePdfFromHtml;
