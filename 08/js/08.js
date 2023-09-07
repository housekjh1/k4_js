const show = (cd) => {
    let url2 = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${cd}`;
    console.log(url2);

    const divDetail = document.querySelector(".detail");

    fetch(url2)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            let movieInfo = data.movieInfoResult.movieInfo;
            let detailTag = "";
            detailTag = detailTag + `<span class='title'>코드</span>`;
            detailTag = detailTag + `<span class='con'>${movieInfo.movieCd}</span>`;
            detailTag = detailTag + `<span class='title'>영화명</span>`;
            detailTag = detailTag + `<span class='con'>${movieInfo.movieNm}</span>`;
            detailTag = detailTag + `<span class='title'>제작상태</span>`;
            detailTag = detailTag + `<span class='con'>${movieInfo.prdtStatNm}</span>`;
            detailTag = detailTag + `<span class='title'>배우</span>`;
            for (let item of movieInfo.actors) {
                detailTag = detailTag + `<span class='con'>${item.peopleNm}</span>`;
            }
            divDetail.innerHTML = detailTag;
        })
        .catch(err => console.log(err));
}


const getData = (dt, divCon, sel1) => {
    console.log(dt.value);

    // 데이터 가져오기
    let apikey = "f5eef3421c602c6cb7ea224104795888";
    let tDt = dt.value.replaceAll("-", "");
    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
    url = url + `?key=${apikey}`;
    url = url + `&targetDt=${tDt}`;

    console.log(url);
    console.log(sel1.value);
    if (sel1.value !== 'T') {
        url = url + `&multiMovieYn=${sel1.value}`;
    }

    fetch(url)// url 던지기
        .then((resp) => resp.json())// 가져온 데이터가 json()으로 response에 들어감
        .then((data) => {
            console.log(data);
            // let dBOL = data.boxOfficeResult["dailyBoxOfficeList"];
            let dBOL = data["boxOfficeResult"]["dailyBoxOfficeList"];
            let conTag = '<table role="grid">';
            conTag = conTag + `<thead>
                                    <tr>
                                        <th scope="col">순위</th>
                                        <th scope="col">영화명</th>
                                        <th scope="col">개봉일</th>
                                        <th scope="col">매출액</th>
                                        <th scope="col">누적매출액</th>
                                        <th scope="col">관객수</th>
                                        <th scope="col">누적관객수</th>
                                    </tr>
                                </thead>`;
            conTag = conTag + '<tbody>';
            for (let item of dBOL) {
                conTag = conTag + '<tr>';
                conTag = conTag + `<td>${item.rank}[    `;
                if (parseInt(item.rankInten) === 0) {
                    conTag = conTag + '<span class="inten0">-';
                } else if (parseInt(item.rankInten) > 0) {
                    conTag = conTag + `<span class="inten1">▲${Math.abs(item.rankInten)}`;
                } else {
                    conTag = conTag + `<span class="inten2">▼${Math.abs(item.rankInten)}`;
                }
                conTag = conTag + '</span>  ]</td>';
                conTag = conTag + `<td><a href="#" onclick="show(${item.movieCd});">${item.movieNm}</a></td>`;
                conTag = conTag + `<td>${item.openDt}</td>`;
                conTag = conTag + `<td><span class="numtd">${parseInt(item.salesAmt).toLocaleString('ko-KR')}</span></td>`;
                conTag = conTag + `<td><span class="numtd">${parseInt(item.salesAcc).toLocaleString('ko-KR')}</span></td>`;
                conTag = conTag + `<td><span class="numtd">${parseInt(item.audiCnt).toLocaleString('ko-KR')}</span></td>`;
                conTag = conTag + `<td><span class="numtd">${parseInt(item.audiAcc).toLocaleString('ko-KR')}</span></td>`;
                conTag = conTag + '</tr>';
            }
            conTag = conTag + "</tbody></table>"
            divCon.innerHTML = conTag;

        })
        .catch((err) => console.log(err));
}

document.addEventListener("DOMContentLoaded", () => {
    const dt = document.querySelector("#dt1");
    const divCon = document.querySelector("#divCon");
    const sel1 = document.querySelector("#sel1");

    // 날짜 변경 시 날짜 가져오기
    dt.addEventListener("change", () => {
        getData(dt, divCon, sel1);
    });

    // 영화 구분
    sel1.addEventListener("change", () => {
        if (dt.value) {
            getData(dt, divCon, sel1);
            console.log(dt.value);
        }
    });
});
