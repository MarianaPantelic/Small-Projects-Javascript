const data = document.getElementById("data");
const url = "https://jsonplaceholder.typicode.com/users";
const toDoTable = document.getElementById("toDoTable");
const toDoTableBody = document.getElementById("toDoTableBody");

fetch(url, {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(),
}).then((response) => {
  //console.log(response);
  if (response.status === 200) {
    response.json().then((results) => {
      console.log(results);
      for (let i = 0; i < results.length; i++) {
        let htmlUser = `
          <tr>
              <th scope="row">${results[i].id}</th>
              <td>${results[i].name}</td>
              <td>${results[i].username}</td>
              <td>${results[i].email}</td>
              <td>${results[i].address.city}</td>
              <td>${results[i].phone}</td>
              <td>${results[i].website}</td>
              <td>${results[i].company.name}</td>
              <td><button onclick="showAgenda(${results[i].id})" class="btn btn-success" data-toggle="modal" data-target="#toDoModal">ToDos</td>
          </tr>
          `;
        data.innerHTML += htmlUser;
      }
    });
  }
});

// displaying the data in a table in a pop-up bootstrap modal

function showAgenda(userId) {
  const urlToDo = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;
  console.log(urlToDo);
  fetch(urlToDo).then((response) => {
    if (response.status === 200) {
      response.json().then((results) => {
        console.log(results);
        toDoTableBody.innerHTML = "";
        for (let i = 0; i < results.length; i++) {
          let htmlToDo = `
          <tr>
              <td>${results[i].title}</td>
              <td>${results[i].completed ? "Completed" : "Uncompleted"}</td>
          </tr>`;
          toDoTableBody.innerHTML += htmlToDo;
        }
      });
    }
  });
}

// displaying the data in a table on the page

/* function showAgenda(i) {
  toDoTable.innerHTML = "";
  let urlToDo = `https://jsonplaceholder.typicode.com/users/${i}/todos`;
  fetch(urlToDo, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(),
  }).then((response) => {
    console.log(response);
    if (response.status === 200) {
      response.json().then((results) => {
        console.log(results);

        let htmlToDo = `
          <table class="table table-dark">
              <thead>
                  <tr>
                  <th scope="col">User ID</th>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Status</th>
                  </tr>
              </thead>`;

        for (let i = 0; i < results.length; i++) {
          let newHtmlToDo = `
          <tr>
              <th scope="row">${results[i].userId}</th>
              <td>${results[i].id}</td>
              <td>${results[i].title}</td>
              <td>${results[i].completed ? "Completed" : "Uncompleted"}</td>
          </tr>`;
          htmlToDo += newHtmlToDo;
        }
        toDoTable.innerHTML += htmlToDo;
      });
    }
  });
 } */
