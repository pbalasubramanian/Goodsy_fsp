import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from "./review_form";

const msp = (state, ownProps) => {
    const initial = {
        description: "",
        reviewer_id: state.session.id,
        product_id: ownProps.product.id,
        rating: 0
    };
    const user = state.session.id;
    return {
        product: ownProps.product,
        review: initial,
        formType: "createReview",
        user: user,
    };
};

const mdp = (dispatch) => {
    return {
        action: (review) => dispatch(createReview(review))
    };
};


export default connect(msp, mdp)(ReviewForm);
