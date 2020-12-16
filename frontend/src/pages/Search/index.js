import React, { Component } from 'react';
import { Col, Row, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, Modal, Container, Button } from "reactstrap";
import { TabContent, TabPane, Collapse, NavLink, NavItem, Nav } from "reactstrap";

import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

// import { getData, setData } from '../../store/actions';

import defaultUserImg from "../../assets/images/defaultUserImg.png";
import { Icons } from '../../constants';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {
    
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container>

          </Container>
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
  
})(withRouter(Search));

