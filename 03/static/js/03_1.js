// DOM 생성
const domCreate = () => {// 변수에 익명함수 할당
    console.log("dom 생성");// 개발자도구 콘솔에 메시지 출력
    const myh2 = document.createElement("h2");// h2태그 생성 명령을 myh2 변수에 저장
    const myh2Txt = document.createTextNode("자바스크립트 생성");// 텍스트를 생성하여 myh2Txt 변수에 저장

    myh2.appendChild(myh2Txt);// h2태그에 텍스트 내용 붙이기
    document.getElementById("adiv").append(myh2);// adiv에 h2태그 붙이기
}

// DOM 읽기
const domRead = () => {
    const myh2 = document.querySelector("h2");// h2태그를 찾는 명령을 myh2 변수에 저장
    console.log("innerHTML => ", myh2.innerHTML);
    console.log("innerText => ", myh2.innerText);
    console.log("textContent => ", myh2.textContent);
}

// DOM 수정
const domUpdate = () => {
    const myh2 = document.querySelector("h2");// h2태그를 찾는 명령을 myh2 변수에 저장
    if (myh2) {
        myh2.innerHTML = "<h3>자바스크립트 수정</h3>";// h3를 태그로 인식
        // myh2.textContent = "<h3>자바스크립트 수정</h3>";// h3를 텍스트로 인식
    }
}

// DOM 삭제
const domDelete = () => {
    const myh2 = document.querySelector("h2");// h2태그를 찾는 명령을 myh2 변수에 저장

    if (myh2) {// h2태그가 있을 시 true
        console.log("myh2", myh2);// 콘솔 로그 생성
        myh2.remove();// h2태그부 삭제
    } else {
        alert("삭제할 요소가 없습니다.")
    }
}
