import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'
import Checkout from './components/Checkout/Checkout'
import Orders from './components/Orders/Orders'
import Auth from './components/Auth/Auth'
import Logout from './components/Auth/Logout/Logout'

class App extends Component {

  render() {

    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/auth' component={Auth} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/orders' component={Orders} />
            <Route path='/logout' component={Logout} />
            <Route path='/' exact component={BurgerBuilder} />
            <Redirect to='/' />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App
