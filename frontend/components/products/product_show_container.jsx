import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import ProductShow from './product_show';
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    let product = state.entities.products[ownProps.match.params.productId];

    let currentUser = state.entities.users[state.session.id]

    return {
        product: product,
        currentUser: currentUser
    };
};

const mapDispatchToProps = dispatch => ({
    fetchProduct: id => dispatch(fetchProduct(id)),
    openModal: modal => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)

