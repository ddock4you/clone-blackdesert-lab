document.querySelector("[name=join_form]").addEventListener("submit", (e) => {
    e.preventDefault();
    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const {
        email,
        password,
        password2,
        name,
        birth_year,
        birth_month,
        birth_day,
    } = e.target;

    // 회원가입 유효성 검사
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

    axios
        .post("/user/join", {
            email: email.value,
            password: password.value,
            birth: `${birth_year.value}-${birth_month.value}-${birth_day.value}`,
            name: name.value,
        })
        .then((res) => {
            alert("회원가입이 완료되었습니다.");
            location.href = "/";
        })
        .catch((err) => {
            console.log(err);
        });
});