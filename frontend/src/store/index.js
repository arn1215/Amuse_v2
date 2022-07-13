import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import  thunk  from 'redux-thunk'
import { commentReducer } from './comment';
import { likeReducer } from './like';
import sessionReducer from './session'
import {songReducer} from './song'


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}


const rootReducer = combineReducers({
  session: sessionReducer,
  songs: songReducer,
  comments: commentReducer,
  likes: likeReducer
})

//will be used by index.js to attach the redux store to the react application
const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer)
}


export default configureStore;