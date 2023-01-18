const fs = require('fs');

// Run this five times... Notice any difference?
fs.readFile('./female-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => loadNames('fNames', JSON.parse(data)));
fs.readFile('./male-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => loadNames('mNames', JSON.parse(data)));
fs.readFile('./1000-most-common-surnames.txt', { encoding: 'utf8' }, (err, data) => loadNames('surnames', data.split(',\n')));


const namesMap = {
  mNames: undefined,
  fNames: undefined,
  surnames: undefined,
};

function loadNames(key, data) {
  namesMap[key] = data;
  console.log(key);
  if (Object.values(namesMap).includes(undefined)) return;
  console.log(generateName());
  console.log(generateName());
  console.log(generateName());
  console.log(generateName());
  console.log(generateName());
}

function generateName() {
  const mName = getRandomItem(namesMap.mNames)
  const fName = getRandomItem(namesMap.fNames)
  const surname = getRandomItem(namesMap.surnames)
  return `${mName} & ${fName} ${surname}`;
}

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}
