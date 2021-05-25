function DataTable(config, data) {
  const tableBody = document.createElement("tbody");
  const tableHead = document.createElement("thead");
  const parent = document.querySelector(`${config.parent}`);
  const result = config.columns.map((col) => col.title);
  const [titleName, titleSurname, titleAge] = result;
  const table = document.createElement("table");
  table.setAttribute("id", "table");
  tableHead.innerHTML = `  <tr>
    <th>№</th>
    <th>${titleName}</th>
    <th>${titleSurname}</th>
    <th>${titleAge}</th>
  </tr>`;

  tableBody.innerHTML = data
    .map((user, idx) => {
      const { name, surname, age } = user;
      return `
      <tr>
  <td>${idx + 1}</td>
  <td>${name}</td>
  <td>${surname}</td>
  <td>${age}</td>
  </tr>
`;
    })
    .join("");
  table.appendChild(tableHead);
  table.appendChild(tableBody);
  parent.appendChild(table);
}

const config1 = {
  parent: "#usersTable",
  columns: [
    { title: "Имя", value: "name" },
    { title: "Фамилия", value: "surname" },
    { title: "Возраст", value: "age" },
  ],
};

const users = [
  { id: 30050, name: "Вася", surname: "Петров", age: 12 },
  { id: 30051, name: "Вася", surname: "Васечкин", age: 15 },
  { id: 30051, name: "Петя", surname: "Пупкин", age: 15 },
  { id: 30050, name: "Вася", surname: "Петров", age: 12 },
  { id: 30051, name: "Вася", surname: "Васечкин", age: 15 },
  { id: 30051, name: "Петя", surname: "Пупкин", age: 13 },
  { id: 30050, name: "Вася", surname: "Петров", age: 14 },
  { id: 30051, name: "Вася", surname: "Васечкин", age: 11 },
  { id: 30051, name: "Петя", surname: "Пупкин", age: 17 },
];
DataTable(config1, users);
