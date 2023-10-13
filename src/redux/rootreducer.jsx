// import {cartReducer} './reducer'
// import {addToCart} './action'
// import {combineReducers} from 'redux'
import {cartReducer} from './reducer'
// import { addToCart} from './action';
import {combineReducers} from 'redux'

export const rootreducer= combineReducers({cartReducer});
// export rootreducer;