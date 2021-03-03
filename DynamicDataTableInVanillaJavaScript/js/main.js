let data = {
  headings: [
    "Name",
    "Username",
    "Email",
    "City",
    "Phone",
    "Website",
    "Company",
  ],
  rows: [],
};
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((results) => {
    for (let i = 0; i < results.length; i++) {
      let array = [];
      array.push(results[i].name);
      array.push(results[i].username);
      array.push(results[i].email);
      array.push(results[i].address.city);
      array.push(results[i].phone);
      array.push(results[i].website);
      array.push(results[i].company.name);
      data.rows.push(array);
    }
  });

console.log(data);
let myTable = document.getElementById("basic");
let dataTable = new DataTable(
  myTable,
  {
    perPage: 10,
    perPageSelect: [5, 10, 15, 20, 25],
    nextPrev: true,
    firstLast: false,
    prevText: "&lsaquo;",
    nextText: "&rsaquo;",
    firstText: "&laquo;",
    lastText: "&raquo;",
    sortable: true,
    searchable: true,
    fixedColumns: true,
    fixedHeight: false,
    truncatePager: true,
  },
  { data: data }
);
