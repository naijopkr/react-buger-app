import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'
import Checkout from './components/Checkout/Checkout'
import Orders from './components/Orders/Orders'
import Auth from './components/Auth/Auth'

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/checkout' component={Checkout} />
            <Route path='/orders' component={Orders} />
            <Route path='/auth' component={Auth} />
            <Route path='/' component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
