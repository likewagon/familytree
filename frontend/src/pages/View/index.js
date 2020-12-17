import React, { Component } from 'react';
import { Col, Row, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, Modal, Container, Button } from "reactstrap";
import { TabContent, TabPane, Collapse, NavLink, NavItem, Nav } from "reactstrap";

import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

import ReactFamilyTree from 'react-family-tree';

import {
  // getTree
} from '../../store/actions';

import defaultUserImg from "../../assets/images/defaultUserImg.png";
import { Icons } from '../../constants';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tree: [
        {
          id: '0123',
          left: 30,
          top: 50,
          parents: [],
          child: {},
          spouses: []
        }
      ],

    }
  }

  componentDidMount() {
    // this.props.getTree({person_id: 3});
    console.log('nodes', this.nodes)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.Data.tree != this.props.Data.tree) {
      console.log(this.props.Data.tree);
    }
  }

  onResetClick = () => {

  }

  render() {
    const WIDTH = 70;
    const HEIGHT = 80;
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
  // getTree
})(withRouter(View));

