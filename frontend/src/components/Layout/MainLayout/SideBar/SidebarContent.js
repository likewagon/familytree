import React, { Component } from "react";
import {
  Col, Row, Card, CardBody, CardTitle, CardSubtitle, Container
} from 'reactstrap';

import MetisMenu from "metismenujs";

import { Link, Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";

import { Icons } from '../../../../constants';

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideMenuCollapsed: false,
    };
  }

  componentDidMount() {
    this.initMenu();
    this.checkSideMenu();
  }

  initMenu() {
    new MetisMenu("#side-menu");

    var matchingMenuItem = null;
    var ul = document.getElementById("side-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname.includes(items[i].pathname)) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      const parent = matchingMenuItem.parentElement;

      if (parent) {
        parent.classList.add("mm-active");
        const parent2 = parent.parentElement;

        if (parent2) {
          parent2.classList.add("mm-show");

          const parent3 = parent2.parentElement;

          if (parent3) {
            parent3.classList.add("mm-active"); // li
            parent3.childNodes[0].classList.add("mm-active"); //a
            const parent4 = parent3.parentElement;
            if (parent4) {
              parent4.classList.add("mm-active");
            }
          }
        }
      }
    }
  }

  checkSideMenu() {
    var isSideMenuCollapsed = document.body.classList.contains("sidebar-enable", "vertical-collpsed");
    this.setState({
      isSideMenuCollapsed: isSideMenuCollapsed
    });
  }

  render() {
    return (
      <React.Fragment>
        <div id="sidebar-menu" className="p-0">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link to="/view" className="waves-effect">
                <i className={`${Icons.view} font-size-14`}></i>
                <span>View</span>
              </Link>
            </li>
            <hr className="my-1" />
            <li>
              <Link to="/new" className="waves-effect">
                <i className={`${Icons.tree} font-size-14`}></i>
                <span>New</span>
              </Link>
            </li>
            <hr className="my-1" />
            <li>
              <Link to="/search" className="waves-effect">
                <i className={`${Icons.search} font-size-14`}></i>
                <span>Search</span>
              </Link>
            </li>
            <hr className="my-1" />
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  return {
    ...state
  };
};

export default connect(mapStatetoProps, {

})(withRouter(SidebarContent));
