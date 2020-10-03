import * as actions from './ActionTypes'

// actions
export const getUser = (user) => {
  console.log('action', user);
  return { type: actions.AUTH, user: user }
};

export const logout = () => {
  return { type: actions.LOGOUT, user: null }
}
