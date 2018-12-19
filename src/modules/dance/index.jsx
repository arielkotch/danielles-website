import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Segment,Header,Image} from 'semantic-ui-react'
import {styles} from './styles.js'
class Dance extends Component {

  render() {

    return (
      <React.Fragment>
        <Segment
          textAlign='center'
          style={styles.segment}
          vertical
          >
          <Header
            as='h1'
            content='Dance Page'
            style={styles.header}>
          </Header>
        </Segment>
      </React.Fragment>
    );
  }
}
export default Dance;
