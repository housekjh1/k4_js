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

    // 버튼 클릭
    const bts = document.querySelectorAll("input[type=button]");
    const txt1 = document.querySelector("#txt1");
    bts.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.value === "회문 확인") palindrome(txt1.value);
            else numSum(txt1.value);
        });
    });
});