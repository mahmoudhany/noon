import * as actions from '../Actions/ActionTypes'

const initialState = {
  user: null
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case actions.AUTH:
      return { ...state, user: action.user }
    case actions.LOGOUT:
      return { ...state, user: action.user }
    default:
      break;
  }
  return state;
};

export default authReducer;
