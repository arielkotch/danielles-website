import React, { Component } from 'react';
import {Segment,Header,Image} from 'semantic-ui-react'
import ReactPlayer from 'react-player'

import {styles} from './styles.js'

class Reel extends Component {

  render() {

    return (
      <React.Fragment>
        <Segment
          textAlign='center'
          style={styles.segment}
          vertical
          >
          <ReactPlayer 
            width="100%"
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
            playing 
          />
        </Segment>
      </React.Fragment>
    );
  }
}

export default Reel;
