import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'
import Checkout from './components/Checkout/Checkout'

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/checkout' component={Checkout} />
            <Route path='/' component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
