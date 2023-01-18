function maybeRun(probability, func, args) {
  if (Math.random() < probability) {
    return func(...args);
  };
}

function threeWayAdd(a, b, c) {
  return a + b + c;
}

threeWayAdd(20, 40, 60);

// In maybeRun, the arguments to the callback (threeWayAdd) are passed in as an array.
// Inside of maybeRun, that array is "unpacked" with the spread operator,
// so that threeWayAdd receives three arguments (three separate numbers),
// instead of one (a single big array)
maybeRun(0.9, threeWayAdd, [20, 40, 60]);

const scores = [
  [8, 9, 9],
  [7, 10, 9, 9],
  [8, 8, 11],
];

// Here, each score is _stored_ as an array of three items,
// but _spread_ into threeWayAdd as three separate arguments.
scores.map((score) => {
  return threeWayAdd(...score);
})





const faveFruits = ['apple', 'banana', 'cherry'];
const faveVeg = ['broccoli', 'asparagus', 'carrot'];
// Without the spread operator here, `faveFruits` and `faveVeg` would
// become nested arrays, instead of one flat array
const faveFoods = ['steak', ...faveFruits, 'cheese', ...faveVeg];
