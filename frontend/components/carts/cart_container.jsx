import Cart from './cart.jsx';
import { connect } from 'react-redux';
import { fetchCartItems, deleteCartItem } from '../../actions/cart_item_actions';
import { fetchProducts } from '../../actions/product_actions';

const mapStateToProps = (state) => ({
    cartItems: state.entities.cart.cartItems,
    cartProducts: state.entities.products,
    // cartId: state.entities.cart.id
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCartItems: (cartId) => dispatch(fetchCartItems(cartId)),
    deleteCartItem: (cartId) => dispatch(deleteCartItem(cartId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);