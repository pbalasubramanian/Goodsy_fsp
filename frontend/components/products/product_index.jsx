import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {

    componentDidMount() {
        if (this.props.location.search === "") {
            this.props.fetchProducts();
        } else {
            this.props.search(this.props.location.search.slice(7));
        }
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
