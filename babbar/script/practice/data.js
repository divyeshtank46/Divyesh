let dataRecords = [
  {
    id: 1,
    Name: "Divyesh",
    Age: 19,
    City: "Surat",
  },
  {
    id: 2,
    Name: "Rahul",
    Age: 21,
    City: "Navsari",
  },
  {
    id: 3,
    Name: "Jinish",
    Age: 20,
    City: "Surat",
  },
];
viewRecords();

function viewRecords() {
    let tbl = "";
    dataRecords.forEach(function (val, index) {
    tbl += `<tr>
        <td>${val.id}</td>
        <td>${val.Name}</td>
        <td>${val.Age}</td>
        <td>${val.City}</td>
    </tr>`;
    });
    document.getElementById("records").innerHTML = `${tbl}`;
}


