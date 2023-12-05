import { useRef } from 'react';
export default function InputUserInfo({ setUserList, inputData, errMessage, setErrMessage }) {
    const inputUserName = useRef(),
        inputSubject = useRef(),
        inputContent = useRef(),
        inputDelSerialNum = useRef(),
        serialNum = useRef(3),
        errText = <div style={{ color: 'red' }}>
            데이터가 모두 입력되어야 합니다.
        </div>;
    
    function editData(e) {
        console.log(e.target)
        const userName = inputUserName.current.value,
            subject = inputSubject.current.value,
            content = inputContent.current.value;

        e.preventDefault();

        switch (e.target.name) {
            case 'regidentBtn':
                if (userName && subject && content) {
                    setUserList(userList => [
                        {
                            serialNum: serialNum.current++,
                            userName,
                            subject,
                            content,
                        },
                        ...userList,
                    ]);

                    setErrMessage('');
                } else {
                    setErrMessage(errText);
                }
                break;

            case 'editUserBtn':
                setUserList(userList =>
                    userList.map(user => {
                        if (user.serialNum === inputData.inputSerialNum) {
                            if (subject && content) {
                                inputData.toggleBtnValue = false;
                                setErrMessage('');

                                return {
                                    ...user,
                                    subject,
                                    content,
                                }
                            } else {
                                setErrMessage(errText);
                            }
                        } 

                        return user;
                    })
                );

                break;

            case 'cancelBtn':
                /* 
                    '취소' 버튼을 눌렀을 때에는 입력상자만 비우는 처리만 필요하므로
                    아래의 업데이트 코드가 필요치 않음. 하지만 리렌더링을 하지 않으면
                    입력상자의 값은 비워지지만 toggleBtnValue 에 의한 사용자명 입력
                    상자와 다른 버튼들의 disabled 처리가 되지 않으므로, 리렌더링을
                    위한 어쩔수 없는 상태값 업데이트가 반드시 필요.
                */
                setUserList(userList => [
                    ...userList,
                ]);
                inputData.toggleBtnValue = false;
                setErrMessage('');
                break;

            default:
        }

        inputUserName.current.value =
            inputSubject.current.value =
            inputContent.current.value = '';
    }

    function removeUserList(e) {
        const delSerialNum = inputDelSerialNum.current.value;

        e.preventDefault();

        if (delSerialNum) {
            setUserList(userList =>
                userList.filter(
                    user => user.serialNum !== +delSerialNum
                )
            );
            inputDelSerialNum.current.value = '';
        }
    }

    /* 
        링크 클릭시에만 입력상자에 해당 링크 사용자의 정보가 로드되도록 하기 위한
        inputData 에 대한 동기값 체크.
    */
    if (inputData) {
        inputUserName.current.value = inputData.inputUserName;
        inputSubject.current.value = inputData.inputSubject;
        inputContent.current.value = inputData.inputContent;
    }

    return (
        <>
            <form name='regidentUser' className="regidentUser" onSubmit={editData}>
                <label className="userName">
                    사용자
                    <input
                        type="text"
                        name='inputUserName'
                        ref={inputUserName}
                        placeholder='한글로만 입력해라'
                        disabled={inputData.toggleBtnValue}
                    />
                </label>

                <label className="subject">
                    제목
                    <input
                        type="text"
                        name='inputSubject'
                        ref={inputSubject}
                        placeholder='제목은 파격적으로...'
                    />
                </label>

                {errMessage}

                <label className="content">
                    글쓰기
                    <textarea
                        name='inputContent'
                        ref={inputContent}
                        placeholder='이쁘게 쓰시오...'
                    ></textarea>
                </label>

                {/* 
                    form 에 onSubmit 이 지정되어 있으므로 button 에 대한 onClick 이 별도로 필요치 않지만,
                    개별 button 에 대한 onClick 을 지정하지 않은 경우, form 의 onSubmit 에 대한 e.target
                    지정시 실제 클릭한 버튼이 아닌 form 요소 자체가 반환되어 각 버튼에 대한 식별이 불가.
                    따라서 각 버튼에 대한 식별을 목적으로 onClick 속성 적용.
                */}
                <button name='regidentBtn' onClick={editData} disabled={inputData.toggleBtnValue}>등록</button>
                <button name='editUserBtn' onClick={editData} disabled={!inputData.toggleBtnValue}>수정</button>
                <button name='cancelBtn' onClick={editData} disabled={!inputData.toggleBtnValue}>취소</button>
            </form>

            <form name='delUser' className="delUser" onSubmit={removeUserList}>
                <label className="delSerialNum">
                    삭제 등록번호
                    <input
                        type="text"
                        name='inputDelSerialNum'
                        ref={inputDelSerialNum}
                        placeholder='삭제할 등록번호 입력해봐라...'
                    />
                </label>
                <button disabled={inputData.toggleBtnValue}>삭제</button>
            </form>
        </>
    );
}