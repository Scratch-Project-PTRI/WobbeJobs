const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });

  const page = await browser.newPage();
  await page.goto(
    "https://www.ziprecruiter.com/jobs-search?search=software+engineer&location=remote"
  );

  try {
    const jobs  = await page.evaluate(() => {
      let careers = [];

      const jobNodes = document.querySelectorAll(
        ".group.flex.w-full.flex-col.text-black"
      );

      jobNodes.forEach((node) => {
        careers.push(node.textContent.trim());;
        
      });
      console.log('jobs', careers)
      return careers;
      
    }); 
  } catch (error) {
    console.error("Error:", error);
  }

  //console.log({jobs, salaries, urls})
  // const prices = await page.evaluate(() => {
  //   const priceNodes = document.querySelectorAll(".mr-8");
  //   const priceTitles = [];
  //   priceNodes.forEach((node) => {
  //     priceTitles.push(node.textContent.trim());
  //   });
  //   return priceTitles;
  // });

  // console.log(prices);

  // const quickApplys = await page.evaluate(() => {
  //   const quickApplyNodes = document.getElementsByTagName("a");
  //   console.log(quickApplyNodes)
  //   const quickApplyLinks = [];
  //   for (let i = 0; i < quickApplyNodes.length; i++) {
  //       const href = quickApplyNodes[i].getAttribute("href");
  //       if (href && href.startsWith("https://www.ziprecruiter.com/") && !href.startsWith("https://www.ziprecruiter.com/jobs-search?")) {
  //           quickApplyLinks.push(href);
  //       }
  //   }

  //   return quickApplyLinks;
  // });

  // console.log(quickApplys);

  await browser.close();
})();
