import React, { Component } from 'react';
import Header from './Header';
import MainContent from './Main'
class Layout extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <Header />
        <MainContent/>
      </div>
    );
  }
}

export default Layout;