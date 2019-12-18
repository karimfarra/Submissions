const password = document.getElementById("password");
const confirm = document.getElementById("confirmation");
const check = (pass, conf) => {
  return pass == conf;
};

const test = () => {
  if (check(password.value, confirm.value)) {
    password.style.border = "1px solid green";
    confirm.style.border = "1px solid green";
  } else {
    password.style.border = "1px solid red";
    confirm.style.border = "1px solid red";
  }
};

document.querySelector('button[type="button"]').addEventListener("click", test);
