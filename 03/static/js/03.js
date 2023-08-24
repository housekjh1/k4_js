document.addEventListener("DOMContentLoaded", () => {
    const bt1 = document.querySelector("footer > div");// const는 상수 선언으로 내용이 바뀌면 오류
    // const bt1 = document.getElementById("bt1");
    console.log(bt1);

    // const bt = document.querySelectorAll("footer > div > button");
    const bt = document.querySelectorAll("footer button");
    // const bt = document.querySelectorAll("button");
    console.log(bt);

    // 변수 선언
    // 1. 기존 선언 방법
    console.log(x);// 변수 호이스팅으로 "undefined" 출력
    var x = 10;
    console.log(x);

    // 2. 최근 선언 방법
    // console.log(esx);
    let esx = 10;// 호이스팅은 되나 let은 값이 할당되지 않으면 일시적 사각지대에 빠져서 못씀, var와 달리 동일한 변수명으로 한 번 밖에 선언 못함
    console.log(esx);

    // nodeList 순회
    // 1. 전통적인 for 문장 사용
    console.log("1. 전통적인 for");
    for (let i = 0; i < bt.length; i++) {// 반복문 이후 i는 사라짐
        console.log(bt[i]);
    }

    // 2. for .. in : 키순회
    console.log("2. 키순회 for");
    for (let i in bt) {
        console.log(i, bt[i]);
    }

    // 3. arry 순회
    console.log("3. arry 순회");
    bt.forEach((i) => console.log(i));
    bt.forEach((i, idx) => console.log(idx, i));

    // 4. for .. of 순회
    console.log("4. for .. of 순회");
    for (let i of bt) {
        console.log(i);
    }
    for (let [idx, i] of bt.entries()) {
        console.log(idx, i);
    }
    console.log("버튼의 캡션 값 가져오기");
    let s = "<ul>";
    s = s + "버튼 캡션 : ";
    for (let i of bt) {
        s = s + "<li>" + i.getAttribute("id") + " : " + i.textContent + "</li>";
    }
    console.log(s);
    document.querySelector("#adiv").innerHTML = s + "</ul>";

});