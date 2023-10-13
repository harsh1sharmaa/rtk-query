import { ADD_TO_CART } from "./constant";
const initial_state = {
  cart_data: [],
};
export const cartReducer = (state = initial_state, action) => {
  console.log("state,action");
  console.log(state, action);
  //   return "helllo";

  switch (action.type) {
    case ADD_TO_CART:
      return "rereere";

    default:
      return "rererere";
  }
};
