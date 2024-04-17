const shuffleController = {};

shuffleController.shuffleResults = (req, res, next) => {
  console.log(
    'inside shuffle controller',
    Math.max(res.locals.zipResults.length || res.locals.indeedResults.length)
  );

  function alternateResults(...arrays) {
    const maxLength = Math.max(...arrays.map((arr) => arr.length));
    const finalResults = [];
    for (let i = 0; i < maxLength; i++) {
      for (const array of arrays) {
        if (array[i] !== undefined) {
          finalResults.push(array[i]);
        }
      }
    }
    console.log('Inside the helper function', finalResults[0]);
    return finalResults;
  }

  res.locals.finalResults = alternateResults(
    res.locals.zipResults,
    res.locals.indeedResults
  );
  console.log(
    'FINAL Results from shuffle --->',
    res.locals.finalResults.length
  );
  next();
};
module.exports = shuffleController;
