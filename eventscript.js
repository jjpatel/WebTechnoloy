//alert("CONNECTED")

var myTable = document.getElementById("myTable")


function myFunction() {
  
  var form = document.getElementById("formid");

  function handleForm(event){
  event.preventDefault();
  }
  form.addEventListener('submit',handleForm); 

  var fName = document.getElementById("fName").value;
  var mName = document.getElementById("mName").value;
  var lName = document.getElementById("lName").value;
  var email = document.getElementById("email").value;
  var mobNo = document.getElementById("mobNo").value;

// Date
var dt = new Date();
var date = dt.toUTCString();
//console.log(date);

var info = [];                    // Array to store Form Data
info.push(date, fName, mName, lName, email, mobNo);  

  
 if ((document.forms['frm'].fName.value !== "") && (document.forms['frm'].email.value !== "")){
  var rowCount = myTable.rows.length;
  var row = myTable.insertRow(rowCount);

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);

cell1.innerHTML = info[0];
cell2.innerHTML = info[1];
cell3.innerHTML = info[2];
cell4.innerHTML = info[3];
cell5.innerHTML = info[4];
cell6.innerHTML = info[5];

  }
}

/*Data is added into the ROW when button is clicked;*/

var btn = document.getElementById('cbtn');
btn.addEventListener("click",myFunction);

/*On Loading the Page, only Home is visible*/
window.addEventListener('load', function() {
    console.log('All assets are loaded')
    homeClass.style.display = 'block';
    regClass.style.display = 'none';
    showClass.style.display = 'none';

})


var homeBtn = document.getElementById("homeid");
var regBtn = document.getElementById("regformid");
var showBtn = document.getElementById("showid");

var homeClass =document.querySelector(".home");
var regClass =document.querySelector(".regForm");
var showClass =document.querySelector(".showDetails");

var classes = [];
classes.push(homeClass,regClass,showClass);


function changeHome(){

  classes[0].style.display = 'block';
  classes[1].style.display = 'none';
  classes[2].style.display = 'none';
  
}

function changeReg(){

  classes[0].style.display = 'none';
  classes[1].style.display = 'block';
  classes[2].style.display = 'none';
  
}
function changeShow(){

  classes[0].style.display = 'none';
  classes[1].style.display = 'none';
  classes[2].style.display = 'block';
  
}


homeBtn.addEventListener("click",changeHome)
regBtn.addEventListener("click",changeReg);
showBtn.addEventListener("click",changeShow);




