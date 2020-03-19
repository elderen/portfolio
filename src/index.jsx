import React from "react";
import ReactDOM from "react-dom";

import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <>
        <Header />
        <Nav />
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));