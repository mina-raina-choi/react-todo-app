import React , { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {

        // todos: todo객체가 있는 배열
        // onToggle: 체크박스 체크켜고 끄는 함수
        // onRemove: 아이템삭제함수
        const { todos, onToggle, onRemove } = this.props;


        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked= {checked}
                    onToggle={onToggle}
                    onRemove ={onRemove}
                    key={id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList;