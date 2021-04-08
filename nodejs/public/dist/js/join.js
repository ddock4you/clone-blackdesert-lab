"use strict";

console.log("join");
document.querySelector("[name=join_form]").addEventListener("submit", function (e) {
  e.preventDefault();
  var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // 회원가입 유효성 검사

  if (!emailRegex.test(e.target.email.value)) {
    alert("올바른 이메일을 입력해주세요.");
    e.target.email.focus();
    return;
  }

  if (!e.target.password.value) {
    alert("비밀번호를 입력해주세요.");
    e.target.password.focus();
    return;
  }

  if (!e.target.password2.value) {
    alert("비밀번호 확인 부분을 입력해주세요.");
    e.target.password2.focus();
    return;
  }

  if (e.target.password.value !== e.target.password2.value) {
    alert("패스워드가 일치하지 않습니다. 패스워드를 확인해주세요.");
    e.target.password2.focus();
    return;
  }

  if (e.target.name.value === "") {
    alert("이름을 입력해주세요.");
    e.target.name.focus();
    return;
  }

  axios.post("/user/join", {
    email: e.target.email.value,
    password: e.target.password.value,
    birth: "".concat(e.target.birth_year.value, "-").concat(e.target.birth_month.value, "-").concat(e.target.birth_day.value),
    name: e.target.name.value
  }).then(function (response) {
    console.log(response);
  })["catch"](function (error) {
    console.log(error);
  });
});