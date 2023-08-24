document.addEventListener("DOMContentLoaded", () => {

});

const dice = () => {
    const adiv = document.querySelector("#adiv");
    
    let n = Math.floor(Math.random() * 6 + 1);// Math.floor() -> 소숫점 제거, Math.random() * x -> 0 ~ x-1 난수생성
    console.log(n);

    adiv.innerHTML = `<img src='./img/${n}.png'/>`;// 백틱으로 문자열을 만들면 Python의 f포매팅과 비슷한 효과를 냄, 변수사용 시 ${변수명}으로 사용

    // if(n === 1) adiv.innerHTML = "<img src='./img/1.png'/>";// === -> 타입까지 체크, == -> 값만 체크
    // else if(n === 2) adiv.innerHTML = "<img src='./img/2.png'/>";
    // else if(n === 3) adiv.innerHTML = "<img src='./img/3.png'/>";
    // else if(n === 4) adiv.innerHTML = "<img src='./img/4.png'/>";
    // else if(n === 5) adiv.innerHTML = "<img src='./img/5.png'/>";
    // else if(n === 6) adiv.innerHTML = "<img src='./img/6.png'/>";

}
