// 전역변수 선언
let juso;       // 전체 주소
let si;         // 시
let gu;         // 구
let dong;       // 동
// 시설유형
let equptype = {
    "노인시설": "001",
    "복지회관": "002",
    "마을회관": "003",
    "보건소": "004",
    "주민센터": "005",
    "면동사모소": "006",
    "종교시설": "007",
    "금융기관": "008",
    "정자": "009",
    "공원": "010",
    "정자 파고라": "011",
    "공원": "012",
    "교량하부": "013",
    "나무그늘": "014",
    "하천둔치": "015",
    "기타": "099"
}

const addOption = (d, s) => {// d는 데이터, s는 셀렉트 박스

    for (let [k, v] of Object.entries(d)) {
        const option = document.createElement("option");
        option.value = v;
        option.text = k;
        s.appendChild(option);
    }
}

const removeOption = (s, firstS) => {

    while (s.hasChildNodes()) {
        s.removeChild(s.firstChild);
    }
    const option = document.createElement("option");
    option.value = "";
    option.text = firstS;
    s.appendChild(option);
}

const getJuso = async (sel1) => {// 비동기 방식인 async 사용, await로 동기화 fetch()구문 구현

    const resp = await fetch("./json/juso2023.json");
    // const data = await resp.json();
    // juso = data;

    juso = await resp.json();
    si = {};

    juso.forEach(element => {
        let { 시도명칭, 시도코드 } = element;
        if (!si[시도명칭]) {
            si[시도명칭] = 시도코드;
        }
    });

    addOption(si, sel1);
}

const getGu = (sel2) => {

    gu = {};

    juso.filter(item => item.시도코드 === sel1.value)
        .map(item => {
            let { 시군구명칭, 시군구코드 } = item;
            if (!gu[시군구명칭]) {// 시군구명칭이 없으면
                gu[시군구명칭] = 시군구코드;// 명칭에 코드 대입
            }
        });
    removeOption(sel2, "--구선택--");
    addOption(gu, sel2);
}

const getDong = (sel3) => {

    dong = {};

    juso.filter(item => item["시도코드"] === sel1.value && item["시군구코드"] === sel2.value)
        .map(item => {
            let { 읍면동명칭, 읍면동코드 } = item;
            if (!dong[읍면동명칭]) {
                dong[읍면동명칭] = 읍면동코드;
            }
        });
    removeOption(sel3, "--동선택--");
    addOption(dong, sel3);
}

const getEquptype = (sel4, equptype) => {

    removeOption(sel4, "--시설유형--");
    addOption(equptype, sel4);
}

const getData = async (url, h2, viewTb) => {

    const resp = await fetch(url);
    const data = await resp.json();

    if (data["RESULT"]) {
        h2.innerHTML = `<span class="h2Sel1">${data["RESULT"]["resultMsg"]}</span>`;
        viewTb.innerHTML = "";
        return;
    }

    h2.innerHTML = h2.innerHTML + `, <span class="h2Sel1">totalCount : ${data.HeatWaveShelter[0]["head"][0]["totalCount"]}</span>`;

    let info = data.HeatWaveShelter[1].row;
    let infoDetail = `<table role="grid">`;
    infoDetail = infoDetail + `<tr><th><span class="title">쉼터명</span></th>`;
    infoDetail = infoDetail + `<th><span class="title">주소</span></th>`;
    infoDetail = infoDetail + `<th><span class="title">인원수</span></th>`;
    infoDetail = infoDetail + `<th><span class="title">선풍기</span></th>`;
    infoDetail = infoDetail + `<th><span class="title">에어컨</span></th></tr>`;
    for (let item of info) {
        console.log(item);
        infoDetail = infoDetail + `<tr><td><span class="con">${item.restname}</span></td>`;
        infoDetail = infoDetail + `<td><span class="con">${item.restaddr}</span></td>`;
        infoDetail = infoDetail + `<td><span class="con">${item.usePsblNmpr}명</span></td>`;
        infoDetail = infoDetail + `<td><span class="con">${item.colrHoldElefn}대</span></td>`;
        infoDetail = infoDetail + `<td><span class="con">${item.colrHoldArcndtn}대</span></td></tr>`;
    }
    infoDetail = infoDetail + `</table>`;
    viewTb.innerHTML = infoDetail;
}

document.addEventListener("DOMContentLoaded", () => {

    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");
    const sel3 = document.querySelector("#sel3");
    const sel4 = document.querySelector("#sel4");
    const bt = document.querySelector("#bt");
    const h2 = document.querySelector("h2");
    const viewTb = document.querySelector("#viewTb");

    getJuso(sel1);

    sel1.addEventListener("change", () => {
        getGu(sel2);
        removeOption(sel4, "--시설유형--");
    });

    sel2.addEventListener("change", () => {
        getDong(sel3);
        removeOption(sel4, "--시설유형--");
    });

    sel3.addEventListener("change", () => {
        getEquptype(sel4, equptype);
        if (sel3.value === "") removeOption(sel4, "--시설유형--");
    });

    bt.addEventListener("click", (e) => {
        e.preventDefault();

        if (sel1.value == "") {
            h2.innerHTML = `<span class='h2Sel1'>시를 선택 해주세요.</span>`;
            return;
        }

        if (sel2.value == "") {
            h2.innerHTML = `<span class='h2Sel1'>구를 선택 해주세요.</span>`;
            return;
        }

        if (sel3.value == "") {
            h2.innerHTML = `<span class='h2Sel1'>동을 선택 해주세요.</span>`;
            return;
        }

        if (sel4.value == "") {
            h2.innerHTML = `<span class='h2Sel1'>시설유형을 선택 해주세요.</span>`;
            return;
        }

        let areaCd = `${sel1.value}${sel2.value}${sel3.value}00`;
        let equpName = Object.entries(equptype).filter(item => item[1] == sel4.value)[0][0];

        h2.innerHTML = `<span class='h2Sel2'>지역코드(행정동코드) : ${areaCd}, 시설유형 : ${sel4.value}(${equpName})</span>`;

        let url = `https://apis.data.go.kr/1741000/HeatWaveShelter2/getHeatWaveShelterList2?serviceKey=`;
        let apikey = `plzVJFqsOqtUcJRz1vXIKLJNwG41wF%2B3bIFSiNVK2UvAmPWaISX%2B%2BXlzG8ITZ8mzokDaMWoYxL248NM%2BolJUIg%3D%3D`;
        url = url + `${apikey}&pageNo=`;
        let pageNo = 1;
        url = url + `${pageNo}&numOfRows=`;
        let numOfRows = 10;
        url = url + `${numOfRows}&type=json&year=`;
        let year = 2023;
        url = url + `${year}&areaCd=${areaCd}&equptype=${sel4.value}`;

        getData(url, h2, viewTb);
    });
});
