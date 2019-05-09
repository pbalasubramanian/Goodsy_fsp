import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";


const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    };
};

const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    };
};

const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    };
};

const receiveReviewErrors = (errors) => {
    return {
        type: RECEIVE_REVIEW_ERRORS,
        errors
    };
};


export const fetchReviews = (productId) => {
    return dispatch => {
        return ReviewApiUtil.fetchReviews(productId).then(
            reviews => dispatch(receiveReviews(reviews)),
            // errors => dispatch(receiveReviewErrors(errors.responseJSON))
        );
    };
};

export const fetchReview = (reviewId) => {
    return dispatch => {
        return ReviewApiUtil.fetchReview(reviewId).then(
            review => dispatch(receiveReview(review)),
            // errors => dispatch(receiveReviewErrors(errors.responseJSON))
        );
    };
};

export const createReview = (review) => {
    return dispatch => {
        return ReviewApiUtil.createReview(review).then(
            review => dispatch(receiveReview(review)),
            // errors => dispatch(receiveReviewErrors(errors.responseJSON))
        );
    };
};

export const deleteReview = (reviewId) => {
    return dispatch => {
        return ReviewApiUtil.deleteReview(reviewId).then(
            review => dispatch(removeReview(review.id)),
            // errors => dispatch(receiveReviewErrors(errors.responseJSON))
        );
    };
};

export const updateReview = (review) => {
    return dispatch => {
        return ReviewApiUtil.updateReview(review).then(
            review => dispatch(receiveReview(review)),
            // errors => dispatch(receiveReviewErrors(errors.responseJSON))
        );
    };
};
