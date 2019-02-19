window.onload = function () {
  if(localStorage.getItem('loginEntry') !== null){
    document.getElementById("formEntry").style.display = "none";
    document.getElementById("formExit").style.display = "block";
    var spanText = document.getElementById("textSpan");
    spanText.innerText = localStorage.getItem('loginEntry');
  }if(localStorage.getItem('loginEntry') === null){
    document.getElementById("formEntry").style.display = "block";
    document.getElementById("formExit").style.display = "none";
  }if(sessionStorage.getItem('display') !== null){
    var display = sessionStorage.getItem('display');
    document.getElementById("modalWin").style.display = display;
  }if(localStorage.getItem("adminEntry") === 'admin') {
    document.getElementById("profilMenuContainer2").style.display = 'none';
  }if(localStorage.getItem("adminEntry") !== 'admin') {
    document.getElementById("profilMenuContainer3").style.display = 'none';
  }
}

function registrClick() {
  document.getElementById("modalWin").style.display = "block";
  sessionStorage.setItem('display', 'block');
}

function closeClick() {
  document.getElementById('modalWin').style.display = 'none';
  sessionStorage.setItem('display', 'none');
}

window.onclick = function(event) {
  var modal = document.getElementById('modalWin');
  if (event.target == modal) {
    document.getElementById('modalWin').style.display = 'none';
    sessionStorage.setItem('display', 'none');
  }
  var profilMenu = document.getElementById('profilMenu');
  if(event.target == profilMenu) {
    document.getElementById('profilMenu').style.display = 'none';
  }
}

function testLogin(login){
  if(/^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/.test(login) === false) {
    alert('Вы неверно ввели логин. Пример: kairat'); 
    return false;
  }
  return true;
}

function testPassword(password){
  if(/^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/.test(password) === false) {
    alert('Вы неверно ввели пороль. Пример: aqazwsx12'); 
    return false;
  }
  return true;
}

function testEmail(email) {
  for(var i = 0; i < email.length; i++) {
    if(email[i] == '@'){
      return true;
    }
  }
  alert('Email должен содержать символ - @');
  return false;
}

function registrModalClick() {
  var loginWin = document.getElementById("loginWin").value;
  var resultLogin = testLogin(loginWin);
  var passwordWin = document.getElementById("passwordWin").value;
  var resultPassword = testPassword(passwordWin);
  var emailWin = document.getElementById("emailWin").value;
  var resultEmail = testEmail(emailWin);
  if(resultLogin == true && resultPassword == true && resultEmail == true) {
    localStorage.setItem('login', loginWin);
    localStorage.setItem('password', passwordWin);
    closeClick();
    localStorage.setItem('loginEntry', loginWin);
  } 
}

function websiteEntry() {
  var login = document.getElementById("login").value;
  var password = document.getElementById("password").value;
  if(login === localStorage.getItem('login') && password === localStorage.getItem('password') || login === 'admin' && password === 'qwe123') {
    localStorage.setItem('loginEntry', login);
    if(login === 'admin') {
      localStorage.setItem('adminEntry', 'admin');
      document.getElementById("profilMenuContainer2").style.display = 'none';
    }else { 
      document.getElementById("profilMenuContainer3").style.display = 'none';
    }
  }else(
    alert("Неверный логин или пороль!!!")
  )
}

function exitClick() {
  localStorage.removeItem('loginEntry');
  localStorage.removeItem('adminEntry');
  document.getElementById("formEntry").style.display = "block";
  document.getElementById("formExit").style.display = "none";
  document.getElementById('profilMenu').style.display = 'none';
}

function profilMenuContainer() {
  document.getElementById("profilMenu").style.display = "block";
}


function addImage() {
  
  reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById("result").src = e.target.result;
    
  }
  document.getElementById("addImg").addEventListener('change', loadFileImg);

  function loadFileImg() {
    var file = document.querySelector("#addImg").files[0];
    reader.readAsDataURL(file);
  }
}