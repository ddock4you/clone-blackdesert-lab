"use strict";

document.querySelector("[name=loginForm]").addEventListener("submit", function (e) {
  e.preventDefault();
  var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var _e$target = e.target,
      email = _e$target.email,
      password = _e$target.password;

  if (!email.value) {
    alert("이메일을 입력해주세요.");
    email.focus();
    return;
  }

  if (!emailRegex.test(email.value)) {
    alert("올바른 이메일을 입력해주세요.");
    email.focus();
    return;
  }

  if (!password.value) {
    alert("비밀번호를 입력해주세요.");
    password.focus();
    return;
  }

  axios.post("/user/login", {
    email: email.value,
    password: password.value
  }).then(function (res) {
    console.log(res);
  })["catch"](function (err) {
    alert(err.response.data.msg);
  });
});