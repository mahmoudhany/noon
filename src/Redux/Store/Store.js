import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import authReducer from '../Reducers/Auth'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  auth: authReducer
})
export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store;
