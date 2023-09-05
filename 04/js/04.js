document.addEventListener("DOMContentLoaded", () => {// DOM 완성 후 함수 호출

    // 버튼 가져오기
    // const bts = document.querySelectorAll("button");

    // bts.forEach((item) => {// forEach() 반복문으로 각 버튼에 이벤트 달기
    //     item.addEventListener("click", () => {// 클릭하면 작동하는 익명함수
    //         console.log(item.textContent);// 해당 태그 내용 호출
    //         dice2(parseInt(item.textContent));// parseInt는 숫자로 타입캐스팅
    //     });
    // });

    // 확인 버튼 가져오기
    const bt = document.querySelector("button");
    const radios = document.querySelectorAll("input[type=radio]");
    bt.addEventListener("click", () => {
        for(let item of radios) {// forEach()는 브레이크가 안됨
            if(item.checked) {
                dice2(parseInt(item.value));
                break;
            }
        }
    });
});

const dice = () => {
    const adiv = document.querySelector("#adiv");
    
    let n = Math.floor(Math.random() * 6 + 1);// Math.floor() -> 소숫점 제거, Math.random() * x -> 0 ~ x미만 난수생성
    console.log(n);

    adiv.innerHTML = `<img src='./img/${n}.png'/>`;// 백틱으로 문자열을 만들면 Python의 f포매팅과 비슷한 효과를 냄, 변수사용 시 ${변수명}으로 사용

    // if(n === 1) adiv.innerHTML = "<img src='./img/1.png'/>";// === -> 타입까지 체크, == -> 값만 체크
    // else if(n === 2) adiv.innerHTML = "<img src='./img/2.png'/>";
    // else if(n === 3) adiv.innerHTML = "<img src='./img/3.png'/>";
    // else if(n === 4) adiv.innerHTML = "<img src='./img/4.png'/>";
    // else if(n === 5) adiv.innerHTML = "<img src='./img/5.png'/>";
    // else if(n === 6) adiv.innerHTML = "<img src='./img/6.png'/>";

}

const dice2 = (seln) => {// 변수 선언 후 익명 함수 할당(화살표 함수 이용), fuction() 함수 대체, 버튼 클릭 시 주사위 보기(주사위 눈 맞추기 게임)
    // 주사위 숫자는 1~6
    let n = Math.floor(Math.random() * 6) + 1;

    // 주사위 이미지를 넣을 위치
    // const adiv = document.getElementById("adiv");
    const adiv = document.querySelector("#adiv");// css와 동일 문법으로 셀렉트
    adiv.innerHTML = `<img src='./img/${n}.png'>`;// 백틱 문자열은 파이썬 f스트링과 유사한 기능

    // 결과 출력을 위한 위치
    const h2 = document.querySelector("hgroup > h2");// hgroup 태그 바로 및 자식 태그 h2 셀렉트
    if (n === seln) {// = 할당, == 같다(문자열과 정수의 비교에서도), === 타입까지 같은지 확인
        h2.textContent = "맞음(승)";
        h2.style.color = "blue";
    }
    else {
        h2.textContent = "틀림(패)";
        h2.style.color = "red";
    }
}