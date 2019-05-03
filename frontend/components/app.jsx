import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import Splash from './splash/splash'
// import LoginFormContainer from './session_form/login_form_container';
// import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
    <div>
        {/* <h1>Goodsy</h1> */}
        <Modal />
        <GreetingContainer />

        <Switch>
            <Route exact path="/" component={Splash} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;