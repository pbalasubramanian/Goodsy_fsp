import { RECEIVE_ALL_PRODUCTS, REMOVE_PRODUCT, RECEIVE_PRODUCT } from '../actions/product_actions';
import { RECEIVE_USER } from "../actions/user_actions";

const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            nextState[action.product.id] = action.product;
            return nextState;
        case REMOVE_PRODUCT:
            delete nextState[action.productId];
            return nextState;
        // case RECEIVE_USER:
        //     return action.payload.products;
        default:
            return state;
    }
};

export default productsReducer;