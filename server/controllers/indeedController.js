const puppeteer = require('puppeteer');

const indeedController = {};

// -----> Winning Code Below <----------\\
indeedController.searchIndeed = async (req, res, next) => {
  console.log(
    'Inside searchIndeed CONTROLLER --->',
    req.body,
    req.body.jobLocation,
    req.body.jobTitle
  );

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });

  const page = await browser.newPage();
  await page.goto(
    `https://www.indeed.com/jobs?q=${req.body.jobTitle}&l=${req.body.jobLocation}&radius=${req.body.jobRadius}`
  );

  const data = await page.evaluate(() => {
    const jobElements = document.querySelectorAll('.job_seen_beacon');
    const results = [];

    jobElements.forEach((jobElement) => {
      const jobTitle = jobElement.querySelector('.jobTitle').textContent.trim();
      console.log(jobTitle);

      const priceTitleElement = jobElement.querySelector(
        '.metadata.salary-snippet-container'
      );
      let priceTitle;

      if (priceTitleElement !== null) {
        const childPriceElement = priceTitleElement.querySelector(
          '.css-1cvo3fd.eu4oa1w0'
        );

        priceTitle = childPriceElement.textContent.trim();
      } else {
        priceTitle = 'Salary not found';
      }

      const quickApplyLinkElement = jobElement.querySelector(
        'a.jcs-JobTitle.css-jspxzf.eu4oa1w0'
      );

      const quickApplyLink = quickApplyLinkElement
        ? quickApplyLinkElement.href
        : 'quick apply condition';

      const companyNameElement = jobElement.querySelector(
        '.css-92r8pb.eu4oa1w0'
      );
      const companyName = companyNameElement
        ? companyNameElement.textContent.trim()
        : 'Company not found';

      results.push({
        jobTitle,
        priceTitle,
        quickApplyLink,
        companyName,
        src: 'indeed',
      });
    });

    return results;
  });

  console.log('Results from indeedController DATA --->', data[0]);
  res.locals.indeedResults = data;
  await browser.close();
  next();
};

module.exports = indeedController;

{
  /* <div class="metadata salary-snippet-container css-5zy3wz eu4oa1w0"><div data-testid="attribute_snippet_testid" class="css-1cvo3fd eu4oa1w0">$75,000 - $78,000 a year</div></div> */
}

// const priceTitleElement = jobElement.querySelector(
//   '.css-1cvo3fd.eu4oa1w0'
// );

//here is the element to scrape
//  <a id="sj_414ec77a8d791e31" data-mobtk="1hrkqa2n3ia30863" data-jk="414ec77a8d791e31" data-ci="427972110" data-empn="6902492918904880" data-hiring-event="false" data-hide-spinner="true" role="button" aria-label="full details of Software Engineer" class="jcs-JobTitle css-jspxzf eu4oa1w0" href="https://www.indeed.com/pagead/clk?mo=r&amp;ad=-6NYlbfkN0AuOYgYKKgFz-UHFdX2QsanEhtfJOyi5uX9CjtgXnV2WXXZt5e3yxkDJUlvspRLCM04HzPh47REpZvK17jx5QhV92EbanELcTx3R7zd-VQyrXypaFQ4LyqCwdV71DmBQgDYNiUEP9aPF-gO1oUiSliYKY7bBjMQEGNDMGzi6dHjKV_Mk6yXTNr865xr-vKXn6EfHM_wWNCdALRI4GbUtgNkOVJupRJctHQlzSWOSsyLUuGbp5MA32fFPCPSL_hVw6i-doY8V3Hri6ss0Hhuxh5IACnstI4--onYxciCazUUVgD-vvMKue5Dt2c0DrHzKiwb5RladXwqmwhipjJw6aaY4lNvP1z3uJsMEkC0FTNMGyE_5X8crKCYuLQ4NMuaEna21nBIgCezAc-sAdKKMgYO4-7qBEknQzJoRvxEB75MXOg_xly6BiMwBjNL1tS0oRtCX5MlRGokaV8d2lBuuRUbddkib6T4AD9Ie72jSh2xHLEhaM9ZmltShCHi1UpfG9Qn6tOhmBJbDlZBYzYvY5zW4NVLHSL2sDaC535iVaf4q5EYqz56PLYsTH3uF00PFeUdQacemR13VuyftD7DKkSScFyr2kMYqYviSA3C2hFMEg==&amp;xkcb=SoDN6_M3C08nh-wxhh0KbzkdCdPP&amp;camk=4HOcmqOLYrDd1DYCHSND-g==&amp;p=1&amp;fvj=1&amp;vjs=3&amp;tk=1hrkqa2n3ia30863&amp;jsa=1377&amp;oc=1&amp;sal=1"><span title="Software Engineer" id="jobTitle-414ec77a8d791e31">Software Engineer</span></a>
