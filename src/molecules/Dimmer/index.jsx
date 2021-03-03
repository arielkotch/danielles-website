/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Dimmer,Segment } from 'semantic-ui-react';

export default class Blur extends React.Component {
  render() {
    const { active } = this.props;

  
    return (
      <div>
        <Dimmer.Dimmable as={Segment} blurring dimmed={active}>
          <Dimmer active={active} inverted />
          {this.props.children}
        </Dimmer.Dimmable>
      </div>
    )
  }
}
  
