import React from "react";
import '../../main.scss'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <>
        <h1 className="header">Header!</h1>
      </>
    )
  }
}

export default Header;