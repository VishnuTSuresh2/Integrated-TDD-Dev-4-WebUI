import * as React from "react";
import INavBarProps from "./INavBarProps";


class Navbar extends React.Component<INavBarProps, {}> {
  showSettings(event:any) {
    event.preventDefault();
  }
  render() {
    return (<div className="viq-navbar">
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
    </div>);
  }
}
export default Navbar;