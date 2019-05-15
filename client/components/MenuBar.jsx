import React, { Fragment } from "react";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div id="menuSlider" className="wrapper">
          <div key="navbar" className="tabs">
            <div className="selector" />
            <a href="#">
              <i className="fas fa-home" />&nbsp;&nbsp;Home
            </a>
            <a href="#/pcparts/">
              <i className="fas fa-desktop" />&nbsp;&nbsp;PC Parts
            </a>
            <a href="#/tips">
              <i className="fas fa-edit" />&nbsp;&nbsp;Tips
            </a>
            <a href="#/tutorials">
              <i className="fas fa-video" />&nbsp;&nbsp;Tutorials
            </a>
            <a href="#/articles">
              <i className="far fa-newspaper" />&nbsp;&nbsp;Articles
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MenuBar;
