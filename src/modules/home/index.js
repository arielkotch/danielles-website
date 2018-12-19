import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Segment,Header,Image} from 'semantic-ui-react'
import MenuList from '../../components/MenuItems/index';
import Typist from '../../components/Typist/index'
import {styles} from './styles.js'

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
        sentences:['Actor.','Dancer.','Singer.']
    };
  }
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
            content='Danielle Kotch'
            style={styles.header}>
          </Header>
          <Typist
            sentences={this.state.sentences}
            backSpeed={40}
            typeSpeed={50}
            style={styles.typist}
            />
        </Segment>
      </React.Fragment>
    );
  }
}

export default Home;
