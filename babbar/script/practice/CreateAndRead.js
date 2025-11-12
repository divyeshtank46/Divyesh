// Add Records
let tasks = JSON.parse(localStorage.getItem('tasks'))?JSON.parse(localStorage.getItem('tasks')):[];
function addRecord() {
  let task = document.getElementById("task").value;
  let taskObj = {
    userId: Math.floor(Math.random() * 1000),
    U_task: task,
  };
  tasks.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("success");
  viewRecord();
  document.getElementById("task").value = "";
}

// View Records

function viewRecord() {
  let allRecord = JSON.parse(localStorage.getItem("tasks"));
  let table = "";
  allRecord.map((val, index) => {
    table += `<tr>
        <td>${val.userId}</td> 
        <td>${val.U_task}</td>
        <td><input type="button" class ="btn btn-outline-danger" value="Delete"> <input type="button" class ="btn btn-outline-success" value="Update"</td>
    </tr>`;
  });
  document.getElementById("ViewRecords").innerHTML = table;
}
viewRecord();
