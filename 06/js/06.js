const palindrome = (x) => {// 회문 처리
    // 문자열 처리
    console.log("문자열 길이", x.length);

    if (x.length === 0) return;// 문자열이 없을 경우 함수 밖으로 리턴

    // 문자열 한글자씩 가져오기
    // for (let i = 0; i < x.length; i++) console.log(x[i]);
    // for (let c of x) console.log(c);

    //회문 확인
    const txt2 = document.querySelector("#txt2");
    // s="";
    // for(let i = x.length-1; i >= 0; i--) s = s + x[i];// 입력받은 문자열을 뒤집어서 s에 대입

    //회문 확인 case 2
    s = x.split("");
    console.log("s=", s);
    s = x.split("").reverse().join("");
    console.log("sr2=", s);

    if (x === s) txt2.value = "회문입니다.";
    else txt2.value = "회문이 아닙니다.";
}

const numSum = (x) => {// 숫자 합계
    let sum = 0;

    for (let i of x) {
        if (!isNaN(i)) sum = sum + parseInt(i);
    }
    txt2.value = sum;

}

document.addEventListener("DOMContentLoaded", () => {
    
    // 배열 확인
    let arr = [];

    // 버튼 확인
    const bts = document.querySelectorAll("input[type=button]");
    const txt1 = document.querySelector("#txt1");
    const rbt = document.querySelector("input[type=reset]");
    rbt.addEventListener('click', () => {
        // 배열 지우기, JS만 지원하는 속성값 초기화
        arr.length = 0;
    });

    bts.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.value === "회문 확인") palindrome(txt1.value);
            else numSum(txt1.value);
        });
    });

    const bt1s = document.querySelectorAll(".bt1");
    bt1s.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(item.textContent);
            switch (item.textContent) {
                case '사과': arr.push('🍎'); break;// 푸시는 대입과 비슷
                case '바나나': arr.push('🍌'); break;
                case '당근': arr.push('🥕'); break;
                case '수박': arr.push('🍉'); break;
            }
            console.log(arr);
            txt1.value = arr.join(',');
        });
    });

    const bt2s = document.querySelectorAll(".bt2");
    bt2s.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            switch (item.textContent) {
                case '사과 삭제':
                    arr = arr.filter((item) => item != '🍎');// 사과가 아닌 것들의 배열을 arr에 대입
                    break;
                case '바나나 삭제':
                    arr = arr.filter((item) => item != '🍌');
                    break;
                case '당근 삭제':
                    arr = arr.filter((item) => item != '🥕');
                    break;
                case '수박 삭제':
                    arr = arr.filter((item) => item != '🍉');
                    break;
            }
            console.log(arr);
            txt1.value = arr.join(',');
        });
    });

    const bt3s = document.querySelectorAll(".bt3");
    bt3s.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            switch (item.textContent.slice(0, 2)) {
                case '사과':
                    arr = arr.map((item) => item === '🍎' ? '🥒' : item);// 삼항연산자 사용, 사과일 경우 오이로 변환 아니면 item 그대로
                    break;
                case '바나':
                    arr = arr.map((item) => item === '🍌' ? '🥦' : item);// 맵은 배열 갯수에 맞게 나옴, 대체하는 느낌
                    break;
                case '당근':
                    arr = arr.map((item) => item === '🥕' ? '🍊' : item);
                    break;
                case '수박':
                    arr = arr.map((item) => item === '🍉' ? '🍇' : item);
                    break;
            }
            console.log();
            txt1.value = arr.join(',');
        });
    });
});