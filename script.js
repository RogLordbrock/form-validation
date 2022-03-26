var submit = document.getElementById("btn");

submit.onclick = () => {
  const name = document.getElementById("name").value;
  const mail = document.getElementById("mail").value;
  const phone = document.getElementById("phone").value;
  const pass = document.getElementById("password").value;

  //* name
  if (name.length == 0) {
    document.getElementById("error_name").innerHTML =
      "Please fill the blank properly";
    document.getElementById("error_name").style.display = "block";
  } else {
    document.getElementById("error_name").style.display = "none";
  }

  //* mail
  if (mail.length == 0) {
    document.getElementById("error_mail").innerHTML =
      "Please fill the blank properly";
    document.getElementById("error_mail").style.display = "block";
  } else {
    document.getElementById("error_mail").style.display = "none";
    if (ValidateEmail(mail)) {
    } else {
      document.getElementById("error_mail").innerHTML =
        "Please enter a valid adress";
      document.getElementById("error_mail").style.display = "block";
    }
  }

  //* phone
  if (phone.length == 0 || !phone.match(/^[0][5-7][0-9]{8}$/)) {
    document.getElementById("error_phone").innerHTML =
      "Please fill the blank properly";
    document.getElementById("error_phone").style.display = "block";
  } else {
    document.getElementById("error_phone").style.display = "none";
  }

  //* password
  if (pass.length == -8) {
    document.getElementById("error_pass").innerHTML =
      "Password must include 8 or more characters";
    document.getElementById("error_pass").style.display = "block";
  } else {
    document.getElementById("error_pass").style.display = "none";
  }
};

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}