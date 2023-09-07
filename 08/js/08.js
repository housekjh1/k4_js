document.addEventListener("DOMContentLoaded", () => {
    const dt = document.querySelector("#dt1");
    const divCon = document.querySelector("#divCon");
    const tBody = document.querySelector("tbody");

    // 날짜 변경 시 날짜 가져오기
    dt.addEventListener("change", () => {
        console.log(dt.value);

        // 데이터 가져오기
        let apikey = "f5eef3421c602c6cb7ea224104795888";
        let tDt = dt.value.replaceAll("-", "");
        let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
        url = url + `?key=${apikey}`;
        url = url + `&targetDt=${tDt}`;

        console.log(url);

        fetch(url)// url 던지기
            .then((resp) => resp.json())// 가져온 데이터가 json()으로 response에 들어감
            .then((data) => {
                // console.log(data.boxOfficeResult["boxofficeType"]);
                // console.log(data["boxOfficeResult"]["boxofficeType"]);
                // console.log(data["boxOfficeResult"]["dailyBoxOfficeList"]);

                let dBOL = data.boxOfficeResult["dailyBoxOfficeList"];
                let conTag = '<table role="grid">';
                conTag = conTag + `<thead>
                                        <tr>
                                            <th scope="col">순위</th>
                                            <th scope="col">영화명</th>
                                            <th scope="col">개봉일</th>
                                            <th scope="col">매출액</th>
                                            <th scope="col">매출액증감분</th>
                                            <th scope="col">누적매출액</th>
                                            <th scope="col">관객수</th>
                                            <th scope="col">누적관객수</th>
                                        </tr>
                                    </thead>`;
                conTag = conTag + '<tbody>';
                for (let item of dBOL) {
                    conTag = conTag + '<tr>';
                    conTag = conTag + `<td>${item.rank}</td>`;
                    conTag = conTag + `<td>${item.movieNm}</td>`;
                    conTag = conTag + `<td>${item.openDt}</td>`;
                    conTag = conTag + `<td><span class="numtd">${parseInt(item.salesAmt).toLocaleString('ko-KR')}</span></td>`;
                    conTag = conTag + `<td><span class="numtd">${parseInt(item.salesInten).toLocaleString('ko-KR')}</span></td>`;
                    conTag = conTag + `<td><span class="numtd">${parseInt(item.salesAcc).toLocaleString('ko-KR')}</span></td>`;
                    conTag = conTag + `<td><span class="numtd">${parseInt(item.audiCnt).toLocaleString('ko-KR')}</span></td>`;
                    conTag = conTag + `<td><span class="numtd">${parseInt(item.audiAcc).toLocaleString('ko-KR')}</span></td>`;
                    conTag = conTag + '</tr>';
                }
                conTag = conTag + "</tbody></table>"
                divCon.innerHTML = conTag;

            })
            .catch((err) => console.log(err));

    });
});
