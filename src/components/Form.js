import React from 'react';
import './Form.css';



// value: 인풋내용
// onChange: 인풋내용이 변경될 때 실행되는 함수
// onCreate: 버튼 클릭시 실행될 함수
// onKeyPress: 인풋에서 키를 입력할 때마다 실행되는 함수...
const Form = ({value, onChange, onCreate, onKeyPress, color}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}}/>
            <div className="create-button" onClick={onCreate}>추가</div>
        </div>
    )
}

export default Form;