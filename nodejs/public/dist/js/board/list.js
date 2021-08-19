"use strict";

const getBoardListTotal = async () => {
  return await axios.get("/board/get-boardlist-total").then(res => {
    console.log(res);
    return res.data.total;
  }).catch(err => {
    console.log(err);
  });
};

const drawBoardList = async () => {
  const total = await getBoardListTotal();
  console.log(total);
};

window.addEventListener("DOMContentLoaded", e => {
  drawBoardList();
});