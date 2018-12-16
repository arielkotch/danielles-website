import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Container,Menu,Header} from 'semantic-ui-react'
import { Link } from "react-router-dom";
class MenuList extends Component {
  constructor(){
    super();
    this.state={
      menuItems:[
        {name:'Home',active:true},
        {name:'Acting',active:false},
        {name:'Dance',active:false},
        {name:'Reel',active:false},
        {name:'Contact',active:false}
      ]
    }
  }
  handleClick=(menuItem)=>{
    const menuItems=[...this.state.menuItems];
    menuItems.forEach(function(item){
        if(item===menuItem){
          item.active=true;
        }else{
          item.active=false;
        }
    });
    this.setState({
      menuItems
    })
  }
  render() {
    let taglineStyle={
      color:'#FFFFFF'
    }
    return (
      <React.Fragment>
            <Menu
              fixed='top'
              inverted={true}
              pointing={true}
              secondary={true}
              size='large'
            >
            <Menu.Item style={taglineStyle}>danielle</Menu.Item>
              <Container>
                {
                  this.state.menuItems.map((menuItem)=>{
                    return (
                      <Link to={"/"+menuItem.name}>
                      <Menu.Item active={menuItem.active} onClick={()=>this.handleClick(menuItem)}>{menuItem.name}</Menu.Item>
                     </Link>
                  );
                  })
                }
              </Container>
            </Menu>
      </React.Fragment>
    );
  }
}

export default MenuList;
