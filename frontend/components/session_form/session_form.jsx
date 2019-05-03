import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then((e) => this.props.closeModal());
    }

    handleErrors() {
        if (this.props.errors.length > 0) {
            const ul = (<ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="errors-li">{error}</li>
                ))}</ul>)
            return ul;
        } else {
            return null;
        }
    }

    render() {
        if (this.props.formType === "signup") {
            return (
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <h1 id="modal-h1">Create your account</h1>
                        <p id="registration">Registration is easy.</p>
                        <label id="modal-input" htmlFor="email">Email address</label>
                        <input autoFocus id={this.handleErrors() ? "error-red-email" : "modal-text-email"} type="text" value={this.state.email} onChange={this.update("email")} />
            
                        <label id="modal-input" htmlFor="first_name">First name</label>
                        <input id={this.handleErrors() ? "error-red-username" : "modal-text-username"} type="text" value={this.state.username} onChange={this.update("username")} />
            
                        <label id="modal-input" htmlFor="password">Password</label>
                        <input id={this.handleErrors() ? "error-red" : "modal-text"} type="password" value={this.state.password} onChange={this.update("password")} />
            
                        <button id="modal-button" type="submit" value={this.props.formType}>Register</button>
                        <p className="conditions">By clicking {this.props.formType}, you agree to Goodsy's <span className="terms">Terms of Use</span> and <span className="terms">Privacy Policy</span>. Goodsy may send you communications; you may change your preferences in your account settings. We'll never post without your permission.</p>
                        {this.handleErrors()}
                    </form>
                </div>    
            );
        } else {
            return (
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <h1 id="modal-h1">Sign in to continue</h1>
                        <label id="modal-input" htmlFor="email">Email address</label>
                        <input autoFocus id={this.handleErrors() ? "error-red-email" : "modal-text-email"} type="text" value={this.state.email} onChange={this.update("email")} />
                        
                        <label id="modal-input" htmlFor="password">Password</label>
                        <input id={this.handleErrors() ? "error-red" : "modal-text"} type="password" value={this.state.password} onChange={this.update("password")} />

                        <button id="modal-button" type="submit" value={this.props.formType}>Sign in</button>
                        <p className="conditions">By clicking {this.props.formType}, you agree to Goodsy's <span className="terms">Terms of Use</span> and <span className="terms">Privacy Policy</span>. Goodsy may send you communications; you may change your preferences in your account settings. We'll never post without your permission.</p>
                        {this.handleErrors()}
                    </form>
                </div>
            );
        }
    }
}

export default withRouter(SessionForm);