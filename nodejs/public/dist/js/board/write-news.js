"use strict";

document.querySelector("[name=news-write]").addEventListener("submit", function (e) {
  e.preventDefault();
  var _e$target = e.target,
      title = _e$target.title,
      subtitle = _e$target.subtitle,
      category = _e$target.category,
      thumnail = _e$target.thumnail,
      content = _e$target.content;

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

  console.dir(thumnail);
  axios.post("/board/news-write", {
    title: title.value,
    subtitle: subtitle.value,
    thumnail: thumnail.value
  });
});