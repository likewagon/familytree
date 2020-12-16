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

import nodes from 'relatives-tree/samples/average-tree.json';
import { IFamilyNode, IFamilyExtNode } from 'relatives-tree/lib/types';
import PinchZoomPan from '../../components/PinchZoomPan';
import FamilyNode from '../../components/FamilyNode';
import styles from './index.css';

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
      // rootId: 'kuVISwh7w'
      rootId: 'HkqEDLvxE'
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
            <PinchZoomPan
              min={0.5}
              max={2.5}
              captureWheel
              className={styles.wrapper}
            >
              <ReactFamilyTree
                nodes={nodes}
                rootId={this.state.rootId}
                width={WIDTH}
                height={HEIGHT}
                renderNode={(node) => (
                  <FamilyNode
                    key={node.id}
                    node={node}
                    style={{
                      width: WIDTH,
                      height: HEIGHT,
                      transform: `translate(${node.left * (WIDTH / 2)}px, ${node.top * (HEIGHT / 2)}px)`,
                    }}
                  />
                )}
              />
            </PinchZoomPan>
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

