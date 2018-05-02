require('./assets/json/data.json');
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

import appLogo from "./assets/img/hycabp.png";

// Using CSS Modules mechanism
import styles from "./assets/css/style.css";

class MyComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello! Retrieving your IP Address..." };
  }
  componentDidMount() {
    this.loadIPAddress()
  }
  loadIPAddress() {
    let self = this;
    fetch("http://ip.jsontest.com/")
      .then(response => {
        if(response.status >= 200 && response.status < 300) {
          return response.json();
        }
        else {
          Promise.reject(new Error(response.statusText || response.status));
        }
      })
      .then(json => { self.setState({ message: "Hello! Your IP Address is " + json.ip}); });
  }
  render() {
    return <h1>{this.state.message}</h1>;
  }
}

class Hello extends React.Component {
  render() {
    return <div>
              <MyComp></MyComp>
              <p>Test me in Internet Explorer to ensure <code>fetch()</code> is working.</p>
            </div>;
  }
}

ReactDOM.render(<Hello/>, document.getElementById('react-div'));
