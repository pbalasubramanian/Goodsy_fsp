import React from 'react';
import CreateReviewContainer from '../reviews/create_review_container';
import ReviewIndexContainer from '../reviews/review_index_container';
import Rating from 'react-rating';

class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: null,
            cart_id: null,
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
                this.state.cart_id = this.props.currentUser.cart.id;
                // alert(this.state.cart_id);
                this.props.createCartItem(this.state);
                    // .then( (item) => this.props.fetchCartItems(this.props.currentUser.cart.id)
                    // .then( (cartItems) => {
                    //     let counter = 0
                    //     Object.values(cartItems).forEach(item => {
                    //         alert(item.quantity);
                    //         counter += item.quantity;
                    //     });
                    //     alert(counter);

                    //     if (counter === 0) {
                    //         $('#itemCount').html('').css('display', 'none');
                    //     } else {
                    //         $('#itemCount').html(counter).css('display', 'block');
                    //     }
                    // }));
                window.alert(`${this.state.quantity} ${this.props.product.title}'s added to your cart!`);
            } else {
                window.alert("Please select a quantity");
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
                            <div id="show-reviews">
                                <CreateReviewContainer product={this.props.product} />
                                <ReviewIndexContainer
                                    product={this.props.product}
                                    user_id={this.props.currentUser}
                                />
                            </div>
                        </div>
                        <div className="product_details">
                            <div className="product_description">
                            artbymaggie <Rating
                                className="product-rating"
                                emptySymbol="fa fa-star-o"
                                fullSymbol="fa fa-star"
                                fractions={2}
                                initialRating={5}
                            /> (6551)
                            </div>
                            <div className="product_title">
                                {this.props.product.title}
                            </div>
                            <div className="product_price">
                                ${this.props.product.price}
                            </div>
                            <h4 className="product_quantity_h2">Quantity
                                {/* <input type="text" className="product_quantity"
                                    onChange={(e) => this.setState({ quantity: parseInt(e.target.value), product_id: this.props.product.id })}>
                                </input> */}
                                <select className="product_quantity"
                                    onChange={(e) => this.setState({ quantity: parseInt(e.target.value), product_id: this.props.product.id })}>
                                    <option value="1" selected>1</option>
                                    <option value="2"  >2</option>
                                    <option value="3"  >3</option>
                                    <option value="4"  >4</option>
                                    <option value="5"  >5</option>
                                    <option value="6"  >6</option>
                                    <option value="7"  >7</option>
                                    <option value="8"  >8</option>
                                    <option value="9"  >9</option>
                                    <option value="10"  >10</option>
                                    <option value="11"  >11</option>
                                    <option value="12"  >12</option>
                                    <option value="13"  >13</option>
                                    <option value="14"  >14</option>
                                    <option value="15"  >15</option>
                                    <option value="16"  >16</option>
                                    <option value="17"  >17</option>
                                    <option value="18"  >18</option>
                                    <option value="19"  >19</option>
                                    <option value="20"  >20</option>
                                    <option value="21"  >21</option>
                                    <option value="22"  >22</option>
                                    <option value="23"  >23</option>
                                    <option value="24"  >24</option>
                                    <option value="25"  >25</option>
                                    <option value="26"  >26</option>
                                    <option value="27"  >27</option>
                                    <option value="28"  >28</option>
                                    <option value="29"  >29</option>
                                    <option value="30"  >30</option>
                                    <option value="31"  >31</option>
                                    <option value="32"  >32</option>
                                    <option value="33"  >33</option>
                                    <option value="34"  >34</option>
                                    <option value="35"  >35</option>
                                    <option value="36"  >36</option>
                                    <option value="37"  >37</option>
                                    <option value="38"  >38</option>
                                    <option value="39"  >39</option>
                                    <option value="40"  >40</option>
                                    <option value="41"  >41</option>
                                    <option value="42"  >42</option>
                                    <option value="43"  >43</option>
                                    <option value="44"  >44</option>
                                    <option value="45"  >45</option>
                                    <option value="46"  >46</option>
                                    <option value="47"  >47</option>
                                    <option value="48"  >48</option>
                                    <option value="49"  >49</option>
                                    <option value="50"  >50</option>
                                </select>
                            </h4>
                            <div className="product_show_cart_div">
                                <button className="product_add_cart"
                                    onClick={e => this.addToCart(e)}>Add to Cart
                                </button>
                            </div>
                            <div className="product_description">
                                <h2 className="description_h2">Item details</h2>
                                {this.props.product.description}
                            </div>
                            <div className="shipping">
                                <li>Shipping & returns</li>
                                <li className="s2" >Get it fast! Ready to ship in 1–3 business days.</li>
                                <li className="s3" >Returns and exchanged accepted</li>
                            </div>
                        </div>
                    </div>

                    
                </div>
            )
        } else {
            return (<></>)
        }
    }
}

export default ProductShow;