"use strict";

window.addEventListener("DOMContentLoaded", function (e) {
  axios.get("/board/get-newsList").then(function (res) {
    console.log(res.data);
  })["catch"](function (err) {
    console.log(err);
  });
});