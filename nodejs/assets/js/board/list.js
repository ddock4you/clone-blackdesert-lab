window.addEventListener("DOMContentLoaded", (e) => {
    axios
        .get("/board/get-newsList")
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
});
