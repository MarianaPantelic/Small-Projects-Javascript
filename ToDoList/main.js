function addTask() {
  let write = document.getElementById("write").value;
  let tasks = document.getElementById("tasks");
  let line = document.createElement("div");
  let task = document.createElement("div");
  let x = document.createElement("div");
  tasks.appendChild(line);
  line.appendChild(task);
  line.appendChild(x);
  task.innerHTML = write;
  document.getElementById("write").value = "";
  x.innerHTML = "X";
  task.classList.add("task");
  line.classList.add("line");
  x.classList.add("close");
  x.addEventListener("click", function () {
    line.remove();
  });
}
