import React, { Component } from 'react';
import Typed from 'react-typed';

class TypeList extends Component {
  constructor(props){
    super(props);
    this.state={
        sentences:['Actor.','Dancer.','Singer.']
    };
  }
  render() {
    let typist={
      color:'#FFFFFF',
      fontSize:'28px'
    };
    return (
        <Typed
          strings={this.state.sentences}
            typeSpeed={50}
            backSpeed={60}
            loop
            style={typist}
            >
          </Typed>
    );
  }
}
export default TypeList;
