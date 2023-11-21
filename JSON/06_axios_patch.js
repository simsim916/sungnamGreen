'use strict';

async function putClientData() {
    try {
        const getResponse = await axios.get('http://localhost:3000/clientData');
        const findClient = getResponse.data.find(client => client.clientNumber === 12);

        /* 
            delete 메서드는 성공한 경우, 삭제된 값이 아닌 빈 객체{} 를 반환.
        */
        const deleteResponse = await axios.delete(`http://localhost:3000/clientData/${findClient.id}`);

        console.log(deleteResponse.data);
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}

putClientData();