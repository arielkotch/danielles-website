import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Segment,Header,Image} from 'semantic-ui-react'

class Dance extends Component {

  render() {
    let segmentStyle={
      minHeight: 700,
      backgroundColor:'#000000'
    };
    let headerStyle={
      fontSize:'4em',
      color:'#FFFFFF',
      fontWeight: 'normal',
      marginBottom: 0,
      paddingTop:  '4em',
    };
    return (
      <React.Fragment>
        <Segment
          textAlign='center'
          style={segmentStyle}
          vertical
          >
          <Header
            as='h1'
            content='Dance Page'
            style={headerStyle}>
          </Header>
        </Segment>
      </React.Fragment>
    );
  }
}
export default Dance;
