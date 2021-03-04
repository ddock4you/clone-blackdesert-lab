console.log('join');

document.querySelector('[name=join_form]').addEventListener('submit', (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(e.target.email.value)) {
        alert("올바른 이메일을 입력해주세요.")
        e.target.email.focus();
        return;
    }

    if (e.target.name.value === "") {
        alert("이름을 입력해주세요.");
        e.target.name.focus();
        return;
    }
});