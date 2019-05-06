import React from 'react';


class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: null,
            // shopping_cart_id: null,
            product_id: null
        };
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }

    addToCart(e) {
        e.preventDefault()

        if (!this.props.currentUser) {
            this.props.openModal("login");
        } else {
            if (this.state.quantity) {
                // this.state.shopping_cart_id = this.props.cartId
                this.props.createCartItem(this.state)
                window.alert(`${this.state.quantity} ${this.props.product.title}'s added to your cart!`)
            } else {
                window.alert("Please select a quantity")
            }
        }
    }

    clearErrors() {
        if (!this.props.errors) return null
        this.props.removeErrors()
    }


    render() {
        if (this.props.product) {
            return (
                <div className="product_show">
                    <div className="product_show_top_div">
                        <div className="product_photo">
                            <img className='product_photo' src={this.props.product.photoUrl} />
                        </div>
                        <div className="product_details">
                            <div className="product_title">
                                {this.props.product.title}
                            </div>
                            <div className="product_price">
                                ${this.props.product.price}
                            </div>
                            <h4 className="product_quantity_h2">Quantity
                                <input type="text" className="product_quantity"
                                    onChange={(e) => this.setState({ quantity: parseInt(e.target.value), product_id: this.props.product.id })}>
                                </input>
                            </h4>
                            <div className="product_show_cart_div">
                                <button className="product_add_cart"
                                    onClick={e => this.addToCart(e)}>Add to Cart
                                </button>
                            </div>
                            <div className="shipping">
                                <li>Shipping & returns</li>
                                <li>Get it fast! Ready to ship in 1–3 business days.</li>
                                <li>Returns and exchanged accepted</li>
                            </div>
                        </div>
                    </div>

                    <div className="product_description">
                        <h2 className="description_h2">Description:</h2>
                        {this.props.product.description}
                    </div>

                </div>
            )
        } else {
            return (<></>)
        }
    }
}

export default ProductShow;