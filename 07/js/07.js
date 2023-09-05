document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.row > div');
    const bombButton = document.querySelector('.bt');

    let bombLocation = null;

    // 폭탄 배치 및 초기화 함수
    function placeBombs() {
        const totalCells = cells.length;
        const bombCount = 8;

        // 모든 셀을 0으로 초기화
        cells.forEach(cell => {
            cell.innerHTML = '';
            cell.dataset.value = '0'; // data-value 속성을 사용하여 값을 저장
        });

        // 무작위로 8개의 셀에 1을 배치 (폭탄)
        for (let i = 0; i < bombCount; i++) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * totalCells);
            } while (cells[randomIndex].dataset.value === '1'); // 이미 1인 경우 다시 시도
            cells[randomIndex].dataset.value = '1';
        }
    }

    // 셀 클릭 이벤트 핸들러
    function cellClickHandler() {
        const value = this.dataset.value;
        if (value === '0') {
            // 클릭한 셀이 0인 경우 하트 이미지 추가
            const image = document.createElement('img');
            image.src = './img/hart.png';
            image.alt = '하트 이미지';
            this.innerHTML = '';
            this.appendChild(image);
        }
    }

    // 폭탄섞기 버튼 클릭 이벤트 핸들러
    bombButton.addEventListener('click', function () {
        placeBombs();
    });

    // 각 셀에 클릭 이벤트 리스너 추가
    cells.forEach(cell => {
        cell.addEventListener('click', cellClickHandler);
    });
});
