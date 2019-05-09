import { connect } from 'react-redux';
import React from 'react'

import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { searchProducts, fetchProducts } from '../../actions/product_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    searchProducts: title => dispatch(searchProducts(title)),
    fetchProducts: () => dispatch(fetchProducts()),
    demoLogin: () =>
        dispatch(
            login( { username: "demouser", email: "demo@gmail.com", password: "password" } )
        )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);