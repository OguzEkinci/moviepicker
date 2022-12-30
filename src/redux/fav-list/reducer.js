import {FAV_LIST} from './type';
export default function favListReducer(state = '', action) {
  switch (action.type) {
    case FAV_LIST:
      return action.payload;
    default:
      return state;
  }
}
