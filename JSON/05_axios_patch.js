'use strict';

async function putClientData() {
    try {
        const getResponse = await axios.get('http://localhost:3000/clientData');
        const findClient = getResponse.data.find(client => client.clientNumber === 2);

        const patchData = {
            name: 'hong'
        }

        /* 
            patch 메서드를 활용함으로써 전체 데이터가 아닌, 데이터의 일부분만 수정 가능.
            patch 메서드의 두 번째 인자에는 전체 데이터가 아닌, 부분 수정할 필드 정보를
            가지고 있는 객체 형태로 참조를 전달. 이때 해당 객체 필드를 수정하기 위해서는
            필드명이 동일해야하며 전달하는 객체의 필드명이 다르면 새로운 필드가 추가되어
            수정됨에 주의.
            pacth 메서드 호출의 결과는 수정된 객체의 참조를 반환.
        */
        const patchResponse = await axios.patch(`http://localhost:3000/clientData/${findClient.id}`, patchData);

        console.log(patchResponse.data);
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}

putClientData();