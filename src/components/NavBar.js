import React, { Component } from 'react';

export default class NavBar extends Component {
  render(){
    return(
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary">
        <a className="navbar-brand">Play Whaaaat?</a>
        <img src="/logo.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
      </nav>
    )
  }
}
