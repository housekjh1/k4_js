// 전역 변수 선언
// 하트와 폭탄의 위치를 결정하는 배열
// 하트는 0, 폭탄은 1
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];

// 폭탄섞기 확인용 플래그
let flag = true;

// 눌러진 박스 수
let cnt = 0;

// 초기화, 순수 자바스크립트로 작성된 것을 '바닐라 자바스크립트'라고 한다.
const init = (boxs) => {
    // 변수 초기화
    flag = true;
    cnt = 0;
    // 박스 숫자 초기화
    boxs.forEach(element => {// 자바의 for (element : boxs) 와 유사
        // console.log(element.getAttribute("id").slice(-1));// 개별 박스 출력, Attribute(속성값)을 가져오기, slice(-1) 문자열에서 마지막 것을 가져오기
        let n = element.getAttribute("id").slice(-1);
        console.log(n);
        element.textContent = n;
    });
};

document.addEventListener("DOMContentLoaded", () => {
    // 컴포넌트 가져오기
    const boxs = document.querySelectorAll(".row > div");// 박스들을 모두 선택
    const bt = document.querySelector("button");
    const h2 = document.querySelector("h2");

    // 박스 초기화
    init(boxs);

    // 폭탄섞기 버튼처리
    bt.addEventListener("click", () => {
        // 플래그 확인
        if (flag) {
            // 배열을 셔플
            arr.sort(() => Math.random() - 0.5);
            console.log(arr);

            // 초기화
            init(boxs);

            h2.textContent = "폭탄을 피해 선택해 주세요.";
            h2.style.color = "red";
            flag = false;// 폭탄섞기 후 동작 안하기
        }
    });

    // 박스 클릭 처리
    boxs.forEach(element => {
        // 폭탄섞기가 되지 않았을 경우
        element.addEventListener("click", () => {
            if (flag) {
                h2.textContent = "폭탄을 섞어주세요.";
                h2.style.color = "blue";
                return;
            }

            let idx = parseInt(element.textContent);
            
            // 이미지가 이미 있는 경우는 처리 안함
            if (isNaN(idx)) return;// 숫자가 아닐경우 true

            // 해당 위치에 숫자가 0인지 1인지 확인
            if (arr[idx - 1] === 0) {// 셀의 값은 1~9, 배열 인덱스와 동기화를 위해 -1을 빼서 0~8로 맞춤
                // 하트
                element.innerHTML = '<img src="./img/hart.png">';
                //하트 선택 개수
                cnt++;
                // 성공 처리
                if (cnt === 8) {
                    h2.textContent = '성공!!';
                    h2.style.color = "green";

                    // 폭탄을 피해 모든 하트를 찾았을 경우 남은 셀에 하트를 추가하는 코드
                    
                    // 방법 1
                    // arr.forEach((value, index) => {
                    //     if (value === 1) boxs[index].innerHTML = '<img src="./img/hart.png">';
                    // });
                    
                    // 방법 2
                    // const bombIndex = arr.findIndex(value => value === 1);
                    // if (bombIndex !== -1) {
                    //     boxs[bombIndex].innerHTML = '<img src="./img/hart.png">';
                    // }

                    // 방법 3
                    idx = arr.indexOf(1);// 1의 값을 가진 인덱스를 저장
                    // document.getElementById("box"+(idx+1)).innerHTML = '<img src="./img/hart.png">';
                    document.querySelector("#box"+(idx+1)).innerHTML = '<img src="./img/hart.png">';
                    
                    flag = true;
                }
            } else {
                // 폭탄
                element.innerHTML = '<img src="./img/boom.png" width="90%">';
                h2.textContent = '실패!! 폭탄을 섞어주세요.';
                h2.style.color = "blue";
                flag = true;
            }
            console.log(element.textContent);
        });
    });

});