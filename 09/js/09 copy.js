let juso;       // 전체 주소
let si;         // 시
let gu;         // 구
let dong;       // 동
// 시설유형
let equptype = {
    "노인시설":"001",
    "복지회관":"002",
    "마을회관":"003", 
    "보건소":"004",
    "주민센터":"005",
    "면동사모소":"006",
    "종교시설":"007",
    "금융기관":"008", 
    "정자":"009", 
    "공원":"010", 
    "정자 파고라":"011",
    "공원":"012", 
    "교량하부":"013", 
    "나무그늘":"014", 
    "하천둔치":"015", 
    "기타":"099"
}
console.log("--Object--");
console.log(equptype);
console.log(equptype["노인시설"]);// 배열 키의 값 접근
console.log(equptype.노인시설);// .점 연산자 키의 값 접근

for(let k in equptype) {// 객체 순회
    console.log(k, equptype[k]);// 키, 데이터가 나옴
}

for(let [k, v] of Object.entries(equptype)) {// 배열 순회, Object.entries()는 구조분해 후 배열로 받음, of 연산자 사용해야함, Object = 딕셔너리, 맵
    console.log(k, "=>", v);
}

// 주소데이터 가져오기
fetch("./json/juso2023.json")// 비동기 방식으로 작동하여 fetch() 밖에서는 data를 읽어올 수 없음, 함수 작동 전에 먼저 로그를 찍음
.then(resp => resp.json())// resp으로 들어온 것을 json으로 변환
.then(data => {// data로 받아온 것을 변수 juso에 대입
    juso = data;// 배열
    console.log(juso);
    si = {};
    // juso 배열
    juso.forEach(element => {
        let {시도명칭, 시도코드} = element;// Object의 키의 값 가져오기
        if (!si[시도명칭]) {
            si[시도명칭] = 시도코드;
        }
    });
    console.log(si);
})
.catch(err => console.log(err));// 예외사항을 err로 받아 콘솔 로그 찍기

document.addEventListener("DOMContentLoaded", () => {

});