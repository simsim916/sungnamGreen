/* 
    구조분해할당 변수에 디폴트 파라미터 지정 가능.
    또는 해당 컴포넌트의 defaultProps 필드에 객체 형식의
    디폴트 프로퍼티를 할당함으로써 동일한 효과.
    단, defaultProps 필드에 할당하는 방식이 디폴트 파라미터
    지정 방식보다 할당 우선순위가 높아 defaultProps 지정으로
    덮어 쓰는 것을 확인 가능.
    ( defaultProps 의 지정 위치는 관계 없음 )
*/
function Hello({ students, color = 'red' }) {
    return <div style={{ color }}>안녕하세요 {students}</div>;
}

// Hello.defaultProps = {
//     students:'바보들아',
//     color: 'gold'
// };

export default Hello;