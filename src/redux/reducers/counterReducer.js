import {INCREMENT} from '../actions/actions';
import {incrementCounter, decrementCounter} from '../actions/counterAction';
const initialState = {
  count: 0,
};
export const counterReducer = ({state = initialState, type}) => {
  switch (type) {
    case INCREMENT:
      return (state = {...state, count: state.count + 1});
      break;

    default:
      return state;
      break;
  }
};
