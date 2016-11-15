import './styles.css';

function shuffle(tableArray) {
  const array = tableArray;
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    const index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter -= 1;

    // And swap the last element with it
    const temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

const body = document.body;
const container = document.createElement('div');
container.classList.add('container');

const size = 4;
let gridItems = [];

for (let i = 1; i < size ** 2; i += 1) {
  gridItems.push(i);
}

gridItems = shuffle(gridItems);
gridItems.push('');

body.appendChild(container);

gridItems.forEach((item) => {
  const gridItem = document.createElement('div');
  gridItem.id = item;
  gridItem.classList.add('gridItem');
  gridItem.innerHTML = item;
  container.appendChild(gridItem);
});
/*
for (let i = 0; i < tableArray.length; i += 1) {
  if (i % size === 0) {
    row = document.createElement('tr');
    table.appendChild(row);
  }
  const column = document.createElement('td');
  column.innerHTML = tableArray[i];
  column.id = tableArray[i] === '' ? 'blank' : tableArray[i];
  row.appendChild(column);
}
*/

module.hot.accept();
