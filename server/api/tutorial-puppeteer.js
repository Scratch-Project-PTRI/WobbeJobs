// const puppeteer = require("puppeteer");

// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     defaultViewport: false,
//   });

//   const page = await browser.newPage();
//   await page.goto(
//     "https://www.ziprecruiter.com/jobs-search?search=software+engineer&location=remote"
//   );

//   try {
//     const jobs  = await page.evaluate(() => {
//       let careers = [];

//       const jobNodes = document.querySelectorAll(
//         ".group.flex.w-full.flex-col.text-black"
//       );

//       jobNodes.forEach((node) => {
//         careers.push(node.textContent.trim());;

//       });
//       console.log('jobs', careers)
//       return careers;

//     });
//   } catch (error) {
//     console.error("Error:", error);
//   }

//   //console.log({jobs, salaries, urls})
//   // const prices = await page.evaluate(() => {
//   //   const priceNodes = document.querySelectorAll(".mr-8");
//   //   const priceTitles = [];
//   //   priceNodes.forEach((node) => {
//   //     priceTitles.push(node.textContent.trim());
//   //   });
//   //   return priceTitles;
//   // });

//   // console.log(prices);

//   // const quickApplys = await page.evaluate(() => {
//   //   const quickApplyNodes = document.getElementsByTagName("a");
//   //   console.log(quickApplyNodes)
//   //   const quickApplyLinks = [];
//   //   for (let i = 0; i < quickApplyNodes.length; i++) {
//   //       const href = quickApplyNodes[i].getAttribute("href");
//   //       if (href && href.startsWith("https://www.ziprecruiter.com/") && !href.startsWith("https://www.ziprecruiter.com/jobs-search?")) {
//   //           quickApplyLinks.push(href);
//   //       }
//   //   }

//   //   return quickApplyLinks;
//   // });

//   // console.log(quickApplys);

//   await browser.close();
// })();

//

//// THIS WORKS TO create the array of objects line 69-120
// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     defaultViewport: false,
//   });

//   const page = await browser.newPage();
//   await page.goto(
//     'https://www.ziprecruiter.com/jobs-search?search=software+engineer&location=remote&radius=25'
//   );

//   const data = await page.evaluate(() => {
//     const jobNodes = document.querySelectorAll(
//       '.font-bold.text-black.text-header-sm'
//     );
//     const priceNodes = document.querySelectorAll('.mr-8');
//     const quickApplyNodes = document.querySelectorAll(
//       '.job_content a[data-job-link]'
//     ); // Corrected query for quick apply links

//     const results = [];

//     for (
//       let i = 0;
//       i < Math.max(jobNodes.length, priceNodes.length, quickApplyNodes.length);
//       i++
//     ) {
//       const jobTitle = jobNodes[i]
//         ? jobNodes[i].textContent.trim()
//         : 'Job title not found';
//       const priceTitle = priceNodes[i]
//         ? priceNodes[i].textContent.trim()
//         : 'Price title not found';
//       let quickApplyLink = null; // Initialize quick apply link to null

//       // Check if quick apply link is found
//       if (quickApplyNodes[i]) {
//         quickApplyLink = quickApplyNodes[i].href;
//       }

//       results.push({ jobTitle, priceTitle, quickApplyLink });
//     }

//     return results;
//   });

//   console.log(data);

//   await browser.close();
// })();

////--------> WORKING FOR Job and Pay 123-173 ----->
// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     defaultViewport: false,
//   });

//   const page = await browser.newPage();
//   await page.goto(
//     'https://www.ziprecruiter.com/jobs-search?search=software+engineer&location=remote&radius=25'
//   );

//   const data = await page.evaluate(() => {
//     const parentElements = document.querySelectorAll(
//       '.group.flex.w-full.flex-col.text-black'
//     ); // Assuming each job listing is encapsulated within a parent element with class 'group.flex.w-full.flex-col.text-black'
//     const results = [];

//     parentElements.forEach((parentElement) => {
//       const jobTitleElement = parentElement.querySelector(
//         'h2.font-bold.text-black.text-header-sm a'
//       );
//       const jobTitle = jobTitleElement
//         ? jobTitleElement.textContent.trim()
//         : 'Job title not found';

//       const priceTitleElement = parentElement.querySelector(
//         'div.flex.items-center div.mr-8 p'
//       );
//       const priceTitle = priceTitleElement
//         ? priceTitleElement.textContent.trim()
//         : 'Price title not found';

//       const quickApplyLinkElement = parentElement.querySelector(
//         'div.relative.z-2.mt-12.md\\:mt-24 button'
//       );
//       const quickApplyLink = quickApplyLinkElement
//         ? quickApplyLinkElement.parentElement.href
//         : null;

//       results.push({ jobTitle, priceTitle, quickApplyLink });
//     });

//     return results;
//   });

//   console.log(data);

//   await browser.close();
// })();

////------------>>> Winning code BELOW <<<-----------\\\\\\\\\\
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });

  const page = await browser.newPage();
  await page.goto(
    'https://www.ziprecruiter.com/jobs-search?search=carpenter&location=Clearwater%2C+FL&radius=25'
  );

  const data = await page.evaluate(() => {
    const parentElements = document.querySelectorAll(
      '.group.flex.w-full.flex-col.text-black'
    ); // Assuming each job listing is encapsulated within a parent element with class 'group.flex.w-full.flex-col.text-black'
    const results = [];

    parentElements.forEach((parentElement) => {
      const jobTitleElement = parentElement.querySelector(
        'h2.font-bold.text-black.text-header-sm a'
      );
      const jobTitle = jobTitleElement
        ? jobTitleElement.textContent.trim()
        : 'Job title not found';

      const priceTitleElement = parentElement.querySelector(
        'div.flex.items-center div.mr-8 p'
      );
      const priceTitle = priceTitleElement
        ? priceTitleElement.textContent.trim()
        : 'Salary not found';

      // Selecting anchor elements directly by their href attribute
      const quickApplyLinkElement = parentElement.querySelector(
        'a[href^="https://www.ziprecruiter.com/"]'
      );
      const quickApplyLink = quickApplyLinkElement
        ? quickApplyLinkElement.href
        : null;

      results.push({ jobTitle, priceTitle, quickApplyLink });
    });

    return results;
  });

  console.log('Resuts DATA --->', data);

  await browser.close();
})();
