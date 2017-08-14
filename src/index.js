
import 'react-hot-loader/patch'
import 'styles/index.scss'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from 'store'

import Layout from 'components/Layout';
import Home from 'components/Home';
import App from 'containers/app';
import Page1 from 'containers/page1';


const renderApp = () => (
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Layout>
          <Route path="/app" component={App}/>
          <Route path="/page1" component={Page1} />
      </Layout>
    </BrowserRouter>
  </Provider>
)


const root = document.getElementById('root');
render(renderApp(), root);

if (module.hot) {
  module.hot.accept(renderApp(), () => {
    render(renderApp(), root)
  })
}
