'use strict';

async function putClientData() {
   try {
      const getResponse = await axios.get('http://localhost:3000/clientData');
      /* 
         < find 메서드 >

      - 배열이 대상이되는 메서드.
      - 자동으로 순회 배열을 순회.
      - 실인수에 콜백함수를 전달하되, 콜백함수의 매개변수는 자동 순회하면서 배열 요소를
        하나씩 반환.
      - 매개변수를 이용해서 실행블럭에서 불린값을 반환시키면 참이 되는 요소 하나만을 반환.
      */
      const findClient = getResponse.data.find(client => client.clientNumber === 2);

      findClient.name = 'hong';

      const putResponse = await axios.put(`http://localhost:3000/clientData/${findClient.id}`, findClient);

      console.log(putResponse.data);
   } catch (err) {
      console.log('데이터를 가져오는 중 오류 발생');
      console.log(err.message);
   }
}

putClientData();