// The Setup: countTimesRan * 100
{
  let count = 0;
  function countTimesRan(label='countTimesRan') {
    console.log(`${label} has run ${++count} times!`);
  }

  function maybeRun(probability, func) {
    if (Math.random() < probability) {
      return func();
    };
  }

  for (let i = 0; i < 100; i++) {
    maybeRun(0.9, countTimesRan);
  }
}


// Passing arguments to countTimesRan
{
  let count = 0;
  function countTimesRan(label='countTimesRan') {
    console.log(`${label} has run ${++count} times!`);
  }

  function maybeRun(probability, func, args) {
    if (Math.random() < probability) {
      return func(...args);
    };
  }

  for (let i = 0; i < 100; i++) {
    maybeRun(0.9, () => countTimesRan('maybeRun arrow'));
    maybeRun(0.9, function() { countTimesRan('maybeRun function keyword') });
    maybeRun(0.9, countTimesRan, ['maybeRun with array args']);
  }
}


const myObj = {
  favoriteFunction: countTimesRan
}


myObj.favoriteFunction('obj version');
