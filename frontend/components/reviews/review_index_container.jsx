import { fetchReview, fetchReviews, deleteReview, createReview } from '../../actions/review_actions';
import { connect } from 'react-redux';
import ReviewIndex from './review_index';


const msp = (state, ownProps) => { 
    const reviews = Object.keys(state.entities.reviews).map((id) => state.entities.reviews[id]);
    return {
        user: ownProps.user_id,
        productId: ownProps.product.id,
        reviews: reviews
    };

};

const mdp = (dispatch) => {
    return {
        fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
        fetchReviews: (productId) => dispatch(fetchReviews(productId)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        createReview: (review) => dispatch(createReview(review))
    };
};

export default connect(msp, mdp)(ReviewIndex);