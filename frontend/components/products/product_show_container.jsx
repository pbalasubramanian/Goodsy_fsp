import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import ProductShow from './product_show';
import { openModal } from '../../actions/modal_actions';
import { createCartItem, fetchCartItems } from '../../actions/cart_item_actions';

const mapStateToProps = (state, ownProps) => {
    let product = state.entities.products[ownProps.match.params.productId];

    let currentUser = state.entities.users[state.session.id]

    return {
        product: product,
        currentUser: currentUser
        //cartId: state.entities.cart.id
        // cartId: currentUser.cart.id
    };
};

const mapDispatchToProps = dispatch => ({
    fetchProduct: id => dispatch(fetchProduct(id)),
    openModal: modal => dispatch(openModal(modal)),
    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    // fetchCartItems: (cartId) => dispatch(fetchCartItems(cartId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)

