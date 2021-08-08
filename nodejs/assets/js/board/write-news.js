const form = document.querySelector("[name=news-write]");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { title, subtitle, category, thumnail, content } = e.target;

    if (!title.value) {
        alert("제목을 입력해주세요.");
        title.focus();
        return;
    }
    if (!subtitle.value) {
        alert("설명을 입력해주세요.");
        subtitle.focus();
        return;
    }

    if (!category.value) {
        alert("카테고리를 선택해주세요.");
        category.focus();
        return;
    }
    if (!content.value) {
        alert("내용을 입력해주세요.");
        content.focus();
        return;
    }

    const formData = new FormData(form);

    for (var pair of formData.entries()) {
        console.log(pair[1]);
    }

    axios
        .post("/board/news-write", formData)
        .then((res) => {
            console.log(res.msg);
        })
        .catch((err) => {
            console.error(err);
        });
});
