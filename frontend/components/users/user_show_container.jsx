import { connect } from "react-redux";
import UserShow from "./user_show";
import { fetchUser } from "../../actions/user_actions";
import { fetchProducts, deleteProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {

    let products = Object.values(state.entities.products);
    let userId = state.session.id;
    let user = state.entities.users[userId];
    let userProducts = [];
    products.forEach(prod => {
        if (prod.user_id === userId) {
            userProducts.push(prod);
        }
    });

    return {
        user,
        userProducts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        fetchUser: id => dispatch(fetchUser(id)),
        deleteProduct: id => dispatch(deleteProduct(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserShow);