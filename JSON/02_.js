'use strict';

const clientData = {
    name: '최문석',
    clinetNumber: 2,
    address: '수원시 팔당구',
}
/*  
    < Axios >

- axios 는 프라미스 기반의 HTTP 클라이언트 객체로써, 서버측 API 와 통신이 가능
  하도록하는 라이브러리이며 프라미스 객체를 반환.
  axios 를 이용하는 경우 JSON.stringify 메서드를 통한 json 형식으로의 변환이
  필요치 않아, 직접 js 객체 형태로 전달하면 자동으로 변환시켜주는 장점.
  JSON.stringify 메서드를 통하여 변환된 객체를 전달하면 오히려 데이터가 이상한
  형태로 변환되어 전달됨에 주의.

=======================================================================================

    < post 메서드 >

- 클라이언트측에서 서버측으로 데이터를 등록하기 위한 메서드로써
  프라미스 객체를 반환.

형식    :    axios.post( URL, js_객체 )
*/
axios.post('http://localhost:3000/clientData', clientData)

    /* 
        post 메서드로 반환된 프라미스 객체에 대한 then 메서드의 콜백 매개변수는
        응답객체를 반환하고, 여기에는 data, status, statusText, headers, config,
        request 필드 정보를 담고 있음.
        따라서 정상적인 등록 요청이 처리되었다면 then 메서드를 통한 응답 객체의
        정보를 확인 가능.

        ※ JSON 서버에 데이터를 등록하면 자동으로 서버 내에서 데이터를 식별하기
           위한 "id" 프로퍼티가 자동으로 생성되는 것을 확인 가능.
           따라서 JSON 서버에서 데이터 수정등의 가공시, 이미 예약되어 있는 "id"
           프로퍼티의 명칭을 임의로 변경하거나 해서는 안됨에 주의.
    */
    .then(response => {
        console.log('응답 데이터:', response.data);       // 서버에서 반환한 데이터
        console.log('상태 코드:', response.status);       // HTTP 상태 코드
        console.log('상태 텍스트:', response.statusText); // HTTP 상태 코드 설명
        console.log('응답 헤더:', response.headers);      // 응답 헤더 정보
    })
    .catch(err => {
        console.log(err);
    });
    
    async function postClientData() {
        try {
    
            /* 
                await 를 이용한 axios 의 반환된 프라미스는 성공 또는 실패에 대한
                결과를 가지는 프라미스로 then 메서드에서와 같이 콜백 매개변수를
                통한 프라미스 결과를 별도로 받을 필요가 없음.
            */
            const response = await axios.post('http://localhost:3000/clientData', clientData);
    
            console.log('응답 데이터:', response.data);       // 서버에서 반환한 데이터
            console.log('상태 코드:', response.status);       // HTTP 상태 코드
            console.log('상태 텍스트:', response.statusText); // HTTP 상태 코드 설명
            console.log('응답 헤더:', response.headers);      // 응답 헤더 정보
        } catch (err) {
            console.log(err);
        }
    }
    
    postClientData();

/* 
    < json 데이터 등록시 주의사항과 엔드포인트 >

- json 형식의 데이터에 접근하기 위해서는 반드시 엔드포인트라는 것이 필요한데,
  JSON 서버에서는 json 파일을 구성하는 객체에 접근 가능한 프로퍼티를 의미하며
  이를 통해 URL 맵핑 경로를 설정.
  아래와 같이 json 파일에 객체가 정의되어 있을 때 "clientData" 프로퍼티를 이용
  하여 URL 매핑 경로에 적용.
  즉, JSON 서버의 기본 URL 경로가 "http://localhost:3000" 이므로 json 파일에
  정의되어 있는 "clientData" 프로퍼티가 엔드포인트가 됨으로써
  "http://localhost:3000/clientData" 이러한 형태로 매핑되어 서버에 접근 가능.

=======================================================================================

    < json 파일 데이터 >

{
    "clientData": []
}

*/