const puppeteer = require("puppeteer");


// -----
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });

  const page = await browser.newPage();
  await page.goto("https://www.indeed.com/jobs?q=software+engineer&l=remote");

  const data = await page.evaluate(() => {
    const jobElements = document.querySelectorAll(".job_seen_beacon");
    const results = [];

    jobElements.forEach((jobElement) => {
      const title = jobElement.querySelector(".jobTitle").textContent.trim();
      console.log(title);

      const priceTitleElement = jobElement.querySelector(
        ".css-1cvo3fd.eu4oa1w0"
      );
      const priceTitle = priceTitleElement
        ? priceTitleElement.textContent.trim()
        : "Salary not found";
      // https://www.indeed.com/rc
      const quickApplyLinkElement = jobElement.querySelector(
        "a.jcs-JobTitle.css-jspxzf.eu4oa1w0"
      );

      const quickApplyLink = quickApplyLinkElement
        ? quickApplyLinkElement.href
        : "quick apply condition";

      results.push({ title, priceTitle, quickApplyLink });
    });

    return results;
  });

  console.log("Results DATA --->", data);

  await browser.close();
})();

