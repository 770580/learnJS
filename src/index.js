import './styles.css';

const body = document.body;
const table = document.createElement('table');

const size = 6;

let counter = 1;

body.appendChild(table);
for (let i = 0; i < size; i += 1) {
  const row = document.createElement('tr');
  table.appendChild(row);
  for (let j = 0; j < size; j += 1) {
    const column = document.createElement('td');
    column.innerHTML = `${counter}`;
    row.appendChild(column);
    counter += 1;
  }
}

module.hot.accept();
