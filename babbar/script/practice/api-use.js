async function getdata() {
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    const data = await response.json();
    // let showdata=document.getElementById("showdata");
    let tbl = "";
    data.map((value) => {
      tbl += `<tr>
                <td>${value.id}</td>
                <td>${value.name.firstname} ${value.name.lastname}</td>
                <td>${value.email}</td>
                <td>${value.password}</td>
                <td>${value.phone}</td>
            </tr>`;
      console.log(data);
    });
    document.getElementById("showdata").innerHTML = tbl;
  } catch (error) {
    console.log("Error :", error);
  }
}

function hidedata() {
  let data = document.getElementById("showdata").innerHTML="";
  
  
}
