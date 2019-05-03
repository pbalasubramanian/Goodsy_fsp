import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = ({ product }) => {
    if (!product.photoUrl) {
        return <div />
    }
    return (
        // <div className="product-item">
        <div>
            <li><Link to={`/products/${product.id}`}><img className='product_index_photo' src={product.photoUrl} /></Link></li>
            <li className='product_index_name'><Link to={`/products/${product.id}`}>{product.title}</Link></li>
            <li className='product_index_cost'>${(product.price)}</li>
        </div>
        // </div>
        );
};

export default ProductIndexItem;
