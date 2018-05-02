import React from 'react';
import ReactDOM from 'react-dom';

import appLogo from "./assets/img/hycabp.png";

// Using CSS Modules mechanism
import styles from "./assets/css/style.css";

class MyComp extends React.Component {

  render() {
    return <h1>Hello World??</h1>;
  }
}

class Hello extends React.Component {
  render() {
    return <div>
              <MyComp></MyComp>
            </div>;
  }
}

ReactDOM.render(<Hello/>, document.getElementById('react-div'));
