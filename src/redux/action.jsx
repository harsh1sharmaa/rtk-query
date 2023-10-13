import {ADD_TO_CART} from './constant'
export const addToCart =data => {
  console.log('addToCart called');
  console.log(data);
    return {
    type: ADD_TO_CART,
    payload: data
  };
};
