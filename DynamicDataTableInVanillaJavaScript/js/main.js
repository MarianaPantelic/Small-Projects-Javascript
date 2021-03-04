fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((results) => {
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
      data: [],
    };
    for (let i = 0; i < results.length; i++) {
      let array = [];
      array.push(results[i].name);
      array.push(results[i].username);
      array.push(results[i].email);
      array.push(results[i].address.city);
      array.push(results[i].phone);
      array.push(results[i].website);
      array.push(results[i].company.name);
      data.data.push(array);
    }
    let myTable = document.getElementById("basic");
    let dataTable = new DataTable(myTable, { data: data });
  });
