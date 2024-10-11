import puppeteerCore from "puppeteer-core";
import puppeteer from "puppeteer";
const chromium = require("@sparticuz/chromium");

async function generatePdfFromHtml(html: string) {
  try {
    let browser;
    if (process.env.NODE_ENV === "development") {
      console.log("Development browser: ");
      browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        headless: true,
      });
    }
    if (process.env.NODE_ENV === "production") {
      console.log("Production browser: ");
      browser = await puppeteerCore.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    }

    if (!browser) {
      throw new Error("Could not init browser");
    }

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
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default generatePdfFromHtml;
