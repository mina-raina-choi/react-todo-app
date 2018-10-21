import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        // text: todo 내용
        // checked: 체크여부
        // id: todo id
        // onToggle: 체크박스 온오프 함수
        // onRemove: todo 삭제 함수
        const { text, checked, id, onToggle, onRemove, color } = this.props;
        
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) =>{
                    e.stopPropagation(); // 부모태그로 이벤트 전달안되도록
                    onRemove(id);
                }}>&times;
                </div>
                <div className={`todo-text ${ checked ? ' checked' : '' }`} style={{color: color}}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        )
    }
}

export default TodoItem;