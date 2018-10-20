import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {

  id = 3;

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: true },
      { id: 2, text: ' 리액트 소개', checked: false }
    ]
  }


  // state  업데이트
  handleChange = (e) => {
    this.setState({
      input: e.target.value 
    })
  }

 

  // todos업데이트
  handleCreate = () => {
    const {input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked:false
      })
    });
  }

  // enter 키 누르면 todos업데이트
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    } 
  }


  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    // 기존값들 복사, checked값 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      todos:nextTodos
    })
  }


  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;

    // this.handleChange 이렇게 사용해야하는데, 매번 this 붙이는 작업을 생략
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;


    return (
      <TodoListTemplate form={
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;
