import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        let products = this.props.products.map(product => {
            return (
                <ProductIndexItem
                    key={`product-${product.id}`}
                    product={product}
                    deleteProduct={this.props.deleteProduct} />
            );
        });
        return (
            <div className="products">
                <p>All Products</p>
                <ul className="product-listings">
                    {products}
                </ul>
            </div>
        );
    }
}

export default ProductIndex;
