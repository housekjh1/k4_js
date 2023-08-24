// function 키워드로 함수 생성
// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("ah1").innerHTML = "Hello JavaScript!";//함수가 매개변수로 들어갈 수 있음
// });

// function hello() {
//     console.log("Hello JS!");
// }

// 화살표 함수
document.addEventListener("DOMContentLoaded", () => {// 익명 함수
    document.getElementById("ah1").innerHTML = "Hello JavaScript!";
});

const hello = () => {
    console.log("Hello JS!");
}