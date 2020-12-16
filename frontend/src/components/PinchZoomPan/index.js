import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { create } from 'pinch-zoom-pan';

import css from './index.css';
import { max, min } from 'moment';

class PinchZoomPan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: this.props.min,
      max: this.props.max,
      captureWheel: this.props.captureWheel
    }
    this.root = ''
  }

  componentDidUpdate(prevProps, prevState){
    const element = '';
    const {captureWheel} = this.state;

    if(prevState.min != this.state.min || prevState.max != this.state.max || prevState.captureWheel != this.state.captureWheel){
      create({
        element,
        minZoom: this.state.min,
        maxZoom: this.state.max,
        captureWheel
      })
    }
  }

  render() {
    return (
      <div ref={this.root} className={classNames(this.props.className, css.root)} style={this.props.style}>
        <div className={css.point}>
          <div className={css.canvas}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default PinchZoomPan;
