document.querySelector("[name=loginForm]").addEventListener("submit", (e) => {
    e.preventDefault();
    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { email, password } = e.target;

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

    axios
        .post("/user/login", {
            email: email.value,
            password: password.value,
        })
        .then((res) => {
            location.href = "/";
        })
        .catch((err) => {
            alert(err.response.data.msg);
        });
});
