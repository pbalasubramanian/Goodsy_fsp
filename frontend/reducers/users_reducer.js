import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
// import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT } from "../actions/product_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.payload.id]: action.payload });
        // case RECEIVE_ALL_PRODUCTS:
        //     return Object.assign({}, state, action.products.users)
        // case RECEIVE_PRODUCT:
        //     return Object.assign({}, state, action.product.user);
        default:
            return state;
    }
};

export default usersReducer;
