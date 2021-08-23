"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

document.querySelector("[name=join_form]").addEventListener("submit", function (e) {
  var _context, _context2;

  e.preventDefault();
  var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var _e$target = e.target,
      email = _e$target.email,
      password = _e$target.password,
      password2 = _e$target.password2,
      name = _e$target.name,
      birth_year = _e$target.birth_year,
      birth_month = _e$target.birth_month,
      birth_day = _e$target.birth_day; // 회원가입 유효성 검사

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

  if (!password2.value) {
    alert("비밀번호 확인 부분을 입력해주세요.");
    password2.focus();
    return;
  }

  if (password.value !== password2.value) {
    alert("패스워드가 일치하지 않습니다. 패스워드를 확인해주세요.");
    password2.focus();
    return;
  }

  if (name.value === "") {
    alert("이름을 입력해주세요.");
    name.focus();
    return;
  }

  axios.post("/user/join", {
    email: email.value,
    password: password.value,
    birth: (0, _concat.default)(_context = (0, _concat.default)(_context2 = "".concat(birth_year.value, "-")).call(_context2, birth_month.value, "-")).call(_context, birth_day.value),
    name: name.value
  }).then(function (res) {
    alert("회원가입이 완료되었습니다.");
    location.href = "/";
  }).catch(function (err) {
    console.log(err);
  });
});