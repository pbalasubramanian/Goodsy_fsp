import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW } from '../actions/review_actions';
import { merge } from 'lodash';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            return merge({}, state, { [action.review.id]: action.review });
        case REMOVE_REVIEW:
            const nextState = merge({}, state);
            delete nextState[action.reviewId];
            return nextState;
        default:
            return state;
    }
};

export default reviewsReducer; 