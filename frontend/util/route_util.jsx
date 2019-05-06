import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';

const Test = ({ redirectToModal }) => {
    redirectToModal();
    return <div />;
}

const Protected = ({ component: Component, path, loggedIn, exact, redirectToModal }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? ( <Component {...props} /> ) : 
            ( <Test redirectToModal={redirectToModal} /> )
    )} />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};
const mapDispatchToProps = dispatch => ({
    redirectToModal: () => dispatch(openModal("login"))
});

export const ProtectedRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(Protected));