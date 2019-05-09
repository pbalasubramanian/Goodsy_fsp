import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchForm from '../search';


class Greeting extends React.Component {

    constructor(props) {
        super(props)
        this.personalGreeting = this.personalGreeting.bind(this);
        this.sessionLinks = this.sessionLinks.bind(this);
        this.welcome = this.welcome.bind(this);
    }

    sessionLinks() {
        return (
            <nav className="header-right">
                <Link className="sell" to={"/products/new"}>
                    Sell on Goodsy
                </Link>

                <button onClick={() => this.props.openModal('signup')} className="register">Register</button>
                <button onClick={() => this.props.openModal('login')} className="login">Sign in</button>
                <button onClick={() => this.props.demoLogin()} className="login">Demo User</button>
            </nav>
        )
    }
    
    personalGreeting() {
        return (
            <div className="navbar-right-user">
                <Link className="sell" to={"/products/new"}>
                    Sell on Goodsy
                </Link>

                
                    {/* <h2 className="username"> */}
                        {/* <i className="fa fa-user-circle"><span>you</span></i> */}
                <i className="fa fa-user-circle"></i>&nbsp;
                <Link className="username" to={`/users/${this.props.currentUser.id}`}>
                    {this.props.currentUser.username}&nbsp; 
                </Link>

                <button className="login" onClick={this.props.logout}>Log out</button>
            </div>
        );
    }

    welcome() {
        return this.props.currentUser ? this.personalGreeting() : this.sessionLinks()
    }

    render() {
        return (
            <div className="header">
                <nav className="navbar">
                    <div className="navbar-left">
                        <Link to="/" className="header-link">
                            <h1 className="logo">Goodsy</h1>
                        </Link>
                        {/* <SearchForm search={this.props.searchProducts} /> */}
                    </div>
                    

                    <div className="navbar-right">
                        {this.welcome()}
                        {/* <i className="fa fa-shopping-cart" />Cart */}
                        {/* <button id="cart-button">
                            <i className="fa fa-shopping-cart"></i>
                            <p className="cart-label">Cart</p>
                        </button> */}
                        <Link to="/cart" className="cart-div">
                            <span id="itemCount"></span>
                            <i className="fa fa-shopping-cart" />
                            <p className="cart-label">Cart</p>
                        </Link>
                    </div>
                </nav>
                <div className="category-div">
                    <nav className="nav-category">
                        {/* <button>All Products</button> */}
                        <Link className="category-products" to={"/products/"} onClick={() => this.props.fetchProducts()}>
                            All Products
                        </Link>
                    </nav>
                </div>
            </div>
        );
    }
};

export default withRouter(Greeting);