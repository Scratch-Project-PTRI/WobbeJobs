//const puppeteer = require("puppeteer");

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

////-----------ZIP ->>> Winning code BELOW <<<-----------\\\\\\\\\\
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });

  const page = await browser.newPage();
  await page.goto(
    'https://www.ziprecruiter.com/jobs-search?search=software+engineer&location=remote'
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
        const companyNameElement = parentElement.querySelector('[data-testid="job-card-company"]');
        const companyName = companyNameElement
        ? companyNameElement.textContent.trim() 
        : 'company name';

      results.push({ jobTitle, priceTitle, quickApplyLink, companyName });
      //console.log(results)
    });
    
    return results;
  });

  console.log('Resuts DATA --->', data);

  await browser.close();
})();

// -----> INDEED Winning Code Below <----------\\
// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     defaultViewport: false,
//   });

//   const page = await browser.newPage();
//   await page.goto('https://www.indeed.com/jobs?q=software+engineer&l=remote');

//   const data = await page.evaluate(() => {
//     const jobElements = document.querySelectorAll('.job_seen_beacon');
//     const results = [];

//     jobElements.forEach((jobElement) => {
//       const title = jobElement.querySelector('.jobTitle').textContent.trim();
//       console.log(title);

//       const priceTitleElement = jobElement.querySelector(
//         '.css-1cvo3fd.eu4oa1w0'
//       );
//       const priceTitle = priceTitleElement
//         ? priceTitleElement.textContent.trim()
//         : 'Salary not found';
//       // https://www.indeed.com/rc
//       const quickApplyLinkElement = jobElement.querySelector(
//         'a.jcs-JobTitle.css-jspxzf.eu4oa1w0'
//       );

//       const quickApplyLink = quickApplyLinkElement
//         ? quickApplyLinkElement.href
//         : 'quick apply condition';

      const companyNameElement = jobElement.querySelector(
        '.css-92r8pb.eu4oa1w0'
      );
      const companyName = companyNameElement
        ? companyNameElement.textContent.trim()
        : 'Company not found';

      results.push({ title, priceTitle, quickApplyLink, companyName });
    

//     return results;
//   });

//   console.log('Results DATA --->', data);

  await browser.close();
})();

//company element for indeed
// <span data-testid="company-name" class="css-92r8pb eu4oa1w0">V Shred</span>

// <div class="company_location css-17fky0v e37uo190"><div elementtiming="significant-render" data-testid="timing-attribute"><span data-testid="company-name" class="css-92r8pb eu4oa1w0">V Shred</span><span aria-hidden="true" class="css-1q5aiuj eu4oa1w0"><span aria-label="3.8 out of five stars rating" role="img" data-testid="holistic-rating" class="css-1h3qsl9 eu4oa1w0"><span aria-hidden="true">3.8</span><span class="css-1nc1e2q eu4oa1w0"><svg width="12" height="12" role="presentation" aria-hidden="true" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.8709L12.4542 15.5593C12.7807 15.7563 13.1835 15.4636 13.0968 15.0922L11.9148 10.0254L15.8505 6.61581C16.1388 6.36608 15.9847 5.89257 15.6047 5.86033L10.423 5.42072L8.39696 0.640342C8.24839 0.289808 7.7516 0.289808 7.60303 0.640341L5.57696 5.42072L0.395297 5.86033C0.015274 5.89257 -0.13882 6.36608 0.149443 6.61581L4.0852 10.0254L2.90318 15.0922C2.81653 15.4636 3.21932 15.7563 3.54584 15.5593L8 12.8709Z" fill="#767676"></path></svg></span></span></span><div data-testid="text-location" class="css-1p0sjhy eu4oa1w0"><span>Remote</span></div></div></div>

//here is the element to scrape
//  <a id="sj_414ec77a8d791e31" data-mobtk="1hrkqa2n3ia30863" data-jk="414ec77a8d791e31" data-ci="427972110" data-empn="6902492918904880" data-hiring-event="false" data-hide-spinner="true" role="button" aria-label="full details of Software Engineer" class="jcs-JobTitle css-jspxzf eu4oa1w0" href="https://www.indeed.com/pagead/clk?mo=r&amp;ad=-6NYlbfkN0AuOYgYKKgFz-UHFdX2QsanEhtfJOyi5uX9CjtgXnV2WXXZt5e3yxkDJUlvspRLCM04HzPh47REpZvK17jx5QhV92EbanELcTx3R7zd-VQyrXypaFQ4LyqCwdV71DmBQgDYNiUEP9aPF-gO1oUiSliYKY7bBjMQEGNDMGzi6dHjKV_Mk6yXTNr865xr-vKXn6EfHM_wWNCdALRI4GbUtgNkOVJupRJctHQlzSWOSsyLUuGbp5MA32fFPCPSL_hVw6i-doY8V3Hri6ss0Hhuxh5IACnstI4--onYxciCazUUVgD-vvMKue5Dt2c0DrHzKiwb5RladXwqmwhipjJw6aaY4lNvP1z3uJsMEkC0FTNMGyE_5X8crKCYuLQ4NMuaEna21nBIgCezAc-sAdKKMgYO4-7qBEknQzJoRvxEB75MXOg_xly6BiMwBjNL1tS0oRtCX5MlRGokaV8d2lBuuRUbddkib6T4AD9Ie72jSh2xHLEhaM9ZmltShCHi1UpfG9Qn6tOhmBJbDlZBYzYvY5zW4NVLHSL2sDaC535iVaf4q5EYqz56PLYsTH3uF00PFeUdQacemR13VuyftD7DKkSScFyr2kMYqYviSA3C2hFMEg==&amp;xkcb=SoDN6_M3C08nh-wxhh0KbzkdCdPP&amp;camk=4HOcmqOLYrDd1DYCHSND-g==&amp;p=1&amp;fvj=1&amp;vjs=3&amp;tk=1hrkqa2n3ia30863&amp;jsa=1377&amp;oc=1&amp;sal=1"><span title="Software Engineer" id="jobTitle-414ec77a8d791e31">Software Engineer</span></a>
