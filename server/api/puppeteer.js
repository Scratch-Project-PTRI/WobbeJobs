// // const puppeteer = require('puppeteer');

// // //anonymous async function being created and executed
// // (async () => {
// //     //declaring a constant browser that will await puppeteer launching.....
// //     //headless is default for launch: meaning you don't physically see the browser open and do the code (happens all internallyy)
// //     const browser = await puppeteer.launch({
// //         headless:false
// //     });

// //     const page = await browser.newPage();
// //     await page.goto('https://www.indeed.com/jobs?q=software+engineer&l=remote&from=searchOnDesktopSerp&vjk=ac91ffdab87d636a');

// //     job = await page.evaluate(() => {
// //         return document.querySelectorAll(".jobTitle css-14z7akl eu4oa1w0");
// //     });
// //     console.log(job)
// //     await browser.close();
// // })();

// // //returns empty obj

// const puppeteer = require('puppeteer');

// //anonymous async function being created and executed
// (async () => {
//     //declaring a constant browser that will await puppeteer launching.....
//     //headless is default for launch: meaning you don't physically see the browser open and do the code (happens all internallyy)
//     const browser = await puppeteer.launch({
//         headless:false
//     });

//     const page = await browser.newPage();
//     await page.goto('https://css-baycarehs-prd.inforcloudsuite.com/hcm/Jobs/form/JobPosting%5BJobPostingSet%5D%281,37794,2%29.JobPostingDisplay?pagesize=1&csk.JobBoard=EXTERNAL&csk.HROrganization=1&utm_medium=symphonytalent-jobads&utm_campaign=Nursing%20AND%20Sub-category%20-%20Surgical%20Services&utm_content=RN%20-%20Registered%20Nurse%20-%20Pre%20Op%20-%20Clinical%20Nurse%20System%20Pool%20SRO%20%20-%20MPH&utm_term=37794&utm_source=ZipRecruiter');

//     /*
//      headings = await page.evaluate(() => {
//     headings_elements = document.querySelectorAll("h2 .mw-headline");
//     headings_array = Array.from(headings_elements);
//     return headings_array.map(heading => heading.textContent);
//   });
//     */

//     jobs = await page.evaluate(() => {
//         jobs_elements = document.querySelectorAll('.lm-form-text .hide-white-space .data .lm-font-md .ng-star-inserted');
//         jobs_array = Array.from(jobs_elements);
//         return jobs_array.map(heading => heading.textContent);
//     });
//     console.log(jobs)
//     //await browser.close();
// })();

// //returns empty obj

//scrapes all three and console logs them as separate arrays
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });

  const page = await browser.newPage();
  await page.goto(
    "https://www.ziprecruiter.com/jobs-search?search=software+engineer&location=remote&radius=25"
  );

  // Wait for the job title elements to appear on the page
  // await page.waitForSelector('.font-bold.text-black');

  // Extract job titles
  const jobs = await page.evaluate(() => {
    const jobNodes = document.querySelectorAll(
      ".font-bold.text-black.text-header-sm"
    );
    const jobTitles = [];
    jobNodes.forEach((node) => {
      jobTitles.push(node.textContent.trim());
    });
    return jobTitles;
  });

  console.log(jobs);

  const prices = await page.evaluate(() => {
    const priceNodes = document.querySelectorAll(".mr-8");
    const priceTitles = [];
    priceNodes.forEach((node) => {
      priceTitles.push(node.textContent.trim());
    });
    return priceTitles;
  });

  console.log(prices);

  // const quickApplys = await page.evaluate(() => {
  //     const quickApplyNodes = document.querySelectorAll("a");
  //     const quickApplyLinks = [];
  //     quickApplyNodes.forEach(button => {

  //       quickApplyLinks.push(quickApplyNodes.getElementById("a"));

  //     });
  //     return quickApplyLinks;
  // });

  const quickApplys = await page.evaluate(() => {
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

  console.log(quickApplys);

  await browser.close();
})();
