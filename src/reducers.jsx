import * as actions from './actions';

const state = (state = {}, action) => {
  switch (action.type) {
    case actions.SHOW_MODAL:
    console.log(action.boolean);
    return state = Object.assign({}, state, { showModal: action.boolean });
    default:
    return state;
  }
}

export default state;
