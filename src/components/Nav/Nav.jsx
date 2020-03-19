import React from "react";
import '../../main.scss'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <>
        <h1 className="nav">Nav!</h1>
      </>
    )
  }
}

export default Nav;