import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import Splash from './splash/splash';
import ProductsIndexContainer from './products/product_index_container';
import ProductShowContainer from './products/product_show_container';
import CreateProductContainer from './products/create_product_container';
import UserShowContainer from './users/user_show_container';
import EditProductContainer from './products/edit_product_container';
import { ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="overall">
        {/* <h1>Goodsy</h1> */}
        <Modal />
        <GreetingContainer />

        <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/users/:userId" component={UserShowContainer} />
            <ProtectedRoute exact path="/products/new" component={CreateProductContainer} />
            <Route exact path="/products/:productId" component={ProductShowContainer} /> 
            <Route exact path="/products/" component={ProductsIndexContainer} />
            <Route path="/products/:productId/edit" component={EditProductContainer} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;