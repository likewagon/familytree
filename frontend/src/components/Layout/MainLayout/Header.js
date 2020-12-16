import React, { Component } from "react";

import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Col, Row, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, Modal, Container, Button, Alert } from "reactstrap";

import { Icons } from '../../../constants';
import defaultUserImg from '../../../assets/images/defaultUserImg.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: '',
      params: '',
      user: '',
      users: [],
      newMessage: '',
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.isMount = false;
  }

  componentDidMount() {
    const { match: { path } } = this.props;
    const { match: { params } } = this.props;
    this.setState({
      path: path,
      params: params
    });

    let user = this.props.Auth.user;
    if (!user) {
      user = JSON.parse(localStorage.getItem("familytreeuser"))
    }
    this.setState({ user: user });
  }

  toggleMenu() {
    this.props.toggleMenuCallback();
  }

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box">
                <div className="d-flex align-items-center ml-3">
                  <button type="button" onClick={this.toggleMenu} className="btn btn-sm font-size-16 header-item waves-effect" id="vertical-menu-btn">
                    <i className={`${Icons.menu}`}></i>
                  </button>
                  <CardImg src={this.state.user.img ? this.state.user.img : defaultUserImg} alt="No Image" className="profileImg ml-2 rounded-circle avatar-sm border border-white" style={{ width: 40, height: 40 }} />
                  <div className="ml-2 profileLabel">
                    <span className="text-white">Welcome, {this.state.user.name ? this.state.user.name.split(" ")[0] + '!' : this.state.user.role + '!'}</span>
                    <br />
                    <span className="font-size-14 text-secondary">version 1.00</span>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center ml-4">
                {
                  this.state.path === '/view' &&
                  <div className="d-flex align-items-center">
                    <i className={`${Icons.view} color-yellow font-size-16`} style={{ color: '#f7d907' }}></i>
                    <span className="font-size-20 text-white ml-3">View Family</span>
                  </div>
                }                
                {
                  this.state.path === '/new' &&
                  <div className="d-flex align-items-center">
                    <i className={`${Icons.tree} color-yellow font-size-16`} style={{ color: '#f7d907' }}></i>
                    <span className="font-size-20 text-white ml-3">Add New Family</span>
                  </div>
                }                
                {
                  this.state.path === '/search' &&
                  <div className="d-flex align-items-center">
                    <i className={`${Icons.search} color-yellow font-size-16`} style={{ color: '#f7d907' }}></i>
                    <span className="font-size-20 text-white ml-3">Search Family</span>
                  </div>
                }
              </div>
            </div>

          </div>
        </header>

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
  
})(withRouter(Header));
