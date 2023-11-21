'use strict';

let clientData;

async function getClientData() {
    try {
                /* 
            json 객체의 id 고유식별자를 이용한 URL 매핑이 가능하며,
            이와같은 경로 지정을 통해 json 데이터를 식별.
        */
        const response = await axios.get('http://localhost:3000/clientData/2');

        /* 
            axios 를 통한 JSON 데이터를 가져오면 JSON.parse() 메서드를 통한
            별도의 js 객체 변환이 필요치 않음.
        */
        clientData = response.data;

        console.log(clientData);

        /* 
            json 객체의 엔드포인트를 제외한 json 객체 내의 특정 배열 요소나
            프로퍼티를 URL 경로를 통한 직접 조회는 불가.
            따라서 아래와같이 조회한 json 객체를 별도로 js 내에서 가공하여
            특정 데이터를 추출.
            단, JSON 서버에서 생성된 id 값을 URL 에 매핑하는 방법은 가능.
        */
        console.log(clientData[1]);

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}

getClientData();