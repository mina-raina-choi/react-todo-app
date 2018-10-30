// store의 상태와 액션생성 함수들을 연결!!
import React, { Component } from 'react';
import TodoItemList from '../components/TodoItemList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todosActions from '../modules/todos';

class TodoListContainer extends Component {

    handleToggle = (id) => {
        const { todosActions } = this.props;
        console.log("handleToggle", this.props, id, todosActions )

        todosActions.toggle(id);
        // const { todos } = this.state;
    
        // const index = todos.findIndex(todo => todo.id === id);
        // const selected = todos[index];
    
        // const nextTodos = [...todos];
    
        // // 기존값들 복사, checked값 덮어쓰기
        // nextTodos[index] = {
        //   ...selected,
        //   checked: !selected.checked
        // }
    
        // this.setState({
        //   todos:nextTodos
        // })
      }
    
    
      handleRemove = (id) => {
        console.log("handleRemove", this.props)

          const { todosActions } = this.props;
          todosActions.remove(id);
        // const {todos} = this.state;
        // this.setState({
        //   todos: todos.filter(todo => todo.id !== id)
        // });
      }
    

    render() {
        const { todos } = this.props;
        const { handleRemove, handleToggle } = this;

        return (
            <TodoItemList
                todos={todos}
                onToggle={handleToggle}
                onRemove= {handleRemove}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const matDispatchToProps = (dispatch) => ({
    todosActions: bindActionCreators(todosActions, dispatch)
})

export default connect(mapStateToProps, matDispatchToProps)(TodoListContainer);