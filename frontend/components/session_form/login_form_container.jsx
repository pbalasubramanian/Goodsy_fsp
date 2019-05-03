import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions'

import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        user: { email: "", password: "" },
        errors: errors.session,
        formType: 'login',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        // otherForm: (
        //     <button onClick={() => dispatch(openModal("signup"))}>
        //         Signup
        //   </button>
        // ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)