import React from 'react';
import classNames from 'classnames';
import { IFamilyExtNode } from 'relatives-tree/lib/types';
import styles from './index.css';

class FamilyNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={styles.root} style={this.props.style}>
        <div
          className={classNames(
            styles.inner,
            styles[this.props.node.gender],
            this.props.isRoot && styles.isRoot,
          )}
          style={{border: '2px solid'}}          
        />
        {this.props.node.hasSubTree && (
          <div
            className={classNames(styles.sub, styles[this.props.node.gender])}
            onClick={() => this.props.onSubClick(this.props.node.id)}
          />
        )}
      </div>
    )
  }
}

export default FamilyNode;
