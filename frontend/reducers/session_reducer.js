import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const NULL_USER = Object.freeze({
    id: null
});

const sessionReducer = (state = NULL_USER, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return NULL_USER;
        default:
            return state;
    }
};

export default sessionReducer;