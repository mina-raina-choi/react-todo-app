import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 액션타입
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성함수
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);


// 초기상태정의
const initialState = List([
    Map( { id: 0, text: ' 리액트 소개', done: false }),
    Map( { id: 1, text: ' 리액트 소개2', done: false }),
    Map( { id: 2, text: ' 리액트 소개3', done: false })
])

// 리듀서
export default handleActions({
    [INSERT]: (state, action) => {
        const { id, text, done } = action.payload;

        return state.push(Map({
            id, text, done
        }))
    },
    [TOGGLE]: (state, action) => {
        const { payload: id } = action;
        // const id = action.payload
        const index = state.findIndex(todo => todo.get('id')=== id);
        return state.updateIn([index, 'done'], done => !done);
    },
    [REMOVE]: (state, action) => {
        const { payload: id} = action;
        const index = state.findIndex(todo => todo.get('id')=== id);
        return state.delete(index);
    }
}, initialState);