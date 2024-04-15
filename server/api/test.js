//renders all three items as separate arrays , but into one object. Some jobs do not have a price, and I cannot fill in this data with "null", and may have too many quickapply links, not sure. 

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });

  const page = await browser.newPage();
  await page.goto(
    "https://www.ziprecruiter.com/jobs-search?search=software+engineer&location"
  );

  // Wait for the job title elements to appear on the page
  await page.waitForSelector('.font-bold.text-black');

  //grabs full job title and pushes into an array
  const jobs = await page.evaluate(() => {
    const jobNodes = document.querySelectorAll("div > h2 > a");
    const jobTitles = [];
    jobNodes.forEach((node) => {
      jobTitles.push(node.textContent.trim());
    });
    return jobTitles;
  });

  //grabs salaries and pushes into an array, SKIPS over missing values currently
  const salaries = await page.evaluate(() => {
    const priceNodes = document.querySelectorAll("div > div > p");
    const priceTitles = [];
      priceNodes.forEach((node) => {
        if(node.textContent.startsWith('$') && node.textContent.endsWith("yr"))
        {priceTitles.push(node.textContent.trim());}
        else if(node.textContent.endsWith("yr")){
          priceTitles.push("null")
        }
      });
    return priceTitles;
  });

  //grabs quickapply links and pushes into an array
  const quickApply = await page.evaluate(() => {
    const quickApplyNodes = document.getElementsByTagName("a");
    console.log(quickApplyNodes);
    const quickApplyLinks = [];
    for (let i = 0; i < quickApplyNodes.length; i++) {
      const href = quickApplyNodes[i].getAttribute("href");
      if (
        href &&
        href.startsWith("https://www.ziprecruiter.com/") &&
        !href.startsWith("https://www.ziprecruiter.com/jobs-search?")
      ) {
        quickApplyLinks.push(href);
      }
    }

    return quickApplyLinks;
  });

  //logs all separate arrays in one object
  console.log( {jobs, salaries, quickApply} )

  await browser.close();
})();
