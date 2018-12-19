import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Segment,Header,Image} from 'semantic-ui-react'
import MenuList from '../../components/MenuItems/index';
import Typist from '../../components/Typist/index'
class Home extends Component {
  constructor(props){
    super(props);
    this.state={
        sentences:['Actor.','Dancer.','Singer.']
    };
  }
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
    let typist={
      color:'#FFFFFF',
      fontSize:'28px'
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
            content='Danielle Kotch'
            style={headerStyle}>
          </Header>
          <Typist
            sentences={this.state.sentences}
            backSpeed={40}
            typeSpeed={50}
            style={typist}
            />
        </Segment>
      </React.Fragment>
    );
  }
}

export default Home;
