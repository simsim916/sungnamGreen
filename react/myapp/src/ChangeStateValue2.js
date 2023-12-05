import changeStateValue2Style from '../css/ChangeStateValue2.module.css'    // CSS 모듈을 사용자 정의 모듈명으로 임포트.

export default function ChangeStateValue2({ aSyncValue }) {
    return (
        <div className={changeStateValue2Style.value}>
            {aSyncValue}
        </div>
    );
}