// store의 상태와 액션생성 함수들을 연결!!
import React, { Component } from 'react';
import Form from '../components/Form';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// 액션 생성함수들을 한꺼번에 불러옴..
import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

class TodoInputContainer extends Component {

    id = 1;
    getId = () => {
        return ++this.id;
    }


    // 기존에 setState를 하던 부분을 모두, 리덕스의 액션 생성함수를 호출하는 것으로 변경!!!
    handleChange = (e) => {
        // this.setState({
        //   input: e.target.value 
        // })

        const { value } = e.target;
        const { inputActions } = this.props;
        inputActions.setInput(value);
    }

    handleCreate = () => {
        // const {input, todos } = this.state;
        // this.setState({
        //   input: '',
        //   todos: todos.concat({
        //     id: this.id++,
        //     text: input,
        //     checked:false
        //   })
        // });

        const { inputActions, todosActions, value } = this.props;
        console.log("handlecreate", this.props)
        const todo = {
            id: this.getId()+1,
            text: value,
            done: false
        }
        todosActions.insert(todo);
        inputActions.setInput('');
    }

    render() {
        const { value } = this.props;
        const { handleChange, handleCreate } = this;
        return (
            <Form
                value={value}
                onChange={handleChange}
                onCreate={handleCreate}
                // color={color}
            />
        )
    }
}

// store의 state를 TodoInputContainer의 props로 셋팅해주기 위한 과정!!
const mapStateToProps = (state) => ({
    value: state.input.get('value')
})

const mapDispatchToProps = (dispatch) => ({
    inputActions: bindActionCreators(inputActions, dispatch),
    todosActions: bindActionCreators(todosActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoInputContainer);