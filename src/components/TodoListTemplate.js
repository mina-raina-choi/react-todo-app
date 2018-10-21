import React from 'react';
import './TodoListTemplate.css';

// 함수형 컴포넌트

// 매개변수로 받게되는 것은 props, 이를 비구조화 할당!
// (props) => { ... } 원래는 이렇게. 필요한 props만 골라받도록
const TodoListTemplate = ({ form, palette, children }) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="palette-wrapper">
                {palette}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
}

export default TodoListTemplate;