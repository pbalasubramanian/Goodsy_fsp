import { connect } from 'react-redux';
import ProductIndex from './product_index';

import { fetchProducts, deleteProduct } from '../../actions/product_actions';

const mapStateToProps = state => ({
    products: Object.values(state.entities.products)
})

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    deleteProduct: id => dispatch(deleteProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)

