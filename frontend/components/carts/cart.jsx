import React from 'react';
import CartItem from './cart_item';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.cartList = this.cartList.bind(this);
        this.calcTotal = this.calcTotal.bind(this);
        this.totalItems = this.totalItems.bind(this);
        this.state = {
            fetchComplete: false
        }
    }

    componentDidMount() {
        // alert("in here");
        // alert("currUser==" + this.props.currentUser);
        
        if ( this.props.currentUser ) {
            this.props.fetchProducts()
                .then( (prod) => this.props.fetchCartItems(this.props.currentUser.cart.id)
                        .then( () => this.setState( {fetchComplete: true} )) );
        } 
        // else {
        //     this.props.fetchProducts()
        //         .then(this.props.history.push("/cart/"))
        //         .then(() => this.setState({ fetchComplete: true }));
        // }
    }

    componentDidUpdate() {
        // alert("fetchComplete==" + this.state.fetchComplete);
        // alert("currentUser==" + this.props.currentUser);

        if(!this.props.currentUser) {
            if(this.state.fetchComplete) this.setState({ fetchComplete: false });
        } else {
            if (!this.state.fetchComplete) {
                this.props.fetchProducts()
                    .then((prod) => this.props.fetchCartItems(this.props.currentUser.cart.id)
                        .then(() => this.setState({ fetchComplete: true })));
            }
        }
    }

    cartList(cartItems, products, deleteCartItem) {
        if (!this.props.cartItems) {
            return <div className="empty-cart">
                <p>Your cart is looking empty.</p>
                <Link className="link-to-index" to="/products">
                    Click here to fill it up!
                </Link>
            </div>;
        }

        let itemsArray = Object.values(cartItems).reverse();
        // alert(itemsArray.length);
        if (itemsArray.length === 0) {
            return <div className="empty-cart">
                <p>Your cart is looking empty.</p>
                <Link className="link-to-index" to="/products">
                    Click here to fill it up!
                </Link>
            </div>;
        }
        return (
            itemsArray.map((item) => (
                <CartItem key={item.updated_at} item={item} product={products[item.product_id]} deleteCartItem={deleteCartItem} />
            ))
        );
    }

    calcTotal(cartItems, products) {
        let total = 0

        if( cartItems && products ) {
            Object.values(cartItems).forEach((item) => {
                total += (item.quantity * products[item.product_id].price)
            })
        }
        return total.toLocaleString();
    }

    totalItems(cartItems) {
        let counter = 0

        if( cartItems ) {
            Object.values(cartItems).forEach(item => {
                counter += item.quantity
            });
        }

        // alert($('#itemCount').html);
        // if( counter === 0 ) {
        //     $('#itemCount').html('').css('display', 'none');
        // } else {
        //     $('#itemCount').html(counter).css('display', 'block');
        // }

        return counter;
    }

    checkout(cartItems) {
        let itemsArray = Object.values(cartItems);
        if (itemsArray.length === 0) {
            return window.alert("There is nothing in your cart!")
        }
        this.props.deleteCartItem(this.props.cartId);
        return window.alert("Your products will be shipped to you, enjoy!");
    }

    render() {
        if( !this.state.fetchComplete || !this.props.cartItems ) {
            return <div className="empty-cart">
                 <p>Your cart is looking empty.</p>
                 <Link className="link-to-index" to="/products">
                     Click here to fill it up!
                 </Link>
             </div>;
        }
        
        // alert(this.props.cartItems.length);
        // if(this.props.cartItems.length !== undefined || this.props.cartItems.length !== 0) {
        return <div className="cart-main">
            {/* <h1>Shopping Cart</h1> */}
            <div className="cart-container">
                <div className="cart-items">
                    <div className="cart-item-list">
                        {this.cartList(
                            this.props.cartItems,
                            this.props.cartProducts,
                            this.props.deleteCartItem
                        )}
                    </div>
                </div>
                {/* <div className="cart-total"> */}
                    <div className="cart-total-container">
                        <div className="cart-total-information">
                            <ul className="cart-total-left">
                                <li>{`Subtotal:`}</li>
                                {/* <li className="total-cart-items">{`Total Items:`}</li> */}
                                {/* <li className="tax">{`Tax:`}</li> */}
                                <li className="shiping">{`Shipping:`}</li>
                                <li className="estimated-total">{`Total:`}</li>
                            </ul>
                            <ul className="cart-total-right">
                                <li>{`$${this.calcTotal(this.props.cartItems, this.props.cartProducts)}`}</li>
                                {/* <li className="total-cart-items">{`${this.totalItems(this.props.cartItems)}`}</li> */}
                                {/* <li className="tax">{`--`}</li> */}
                                <li className="shiping">{`free`}</li>
                                <li className="estimated-total">{`$${this.calcTotal(this.props.cartItems, this.props.cartProducts)}`}</li>
                            </ul>
                        </div>
                        {/* <div className="estimated-total">
                            <li>{`Total:`}</li>
                            <li>{`$${this.calcTotal(this.props.cartItems, this.props.cartProducts)}`}</li>
                        </div> */}
                        <div className="checkout-button">
                            <button onClick={(e) => this.checkout(this.props.cartItems)}>Proceed to checkout</button>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>;
        // }
    }
}

export default Cart;