import React, { Component } from 'react';
import {Segment,Header,Image,Grid,Card,Item,Button,paragraph,Label,Icon} from 'semantic-ui-react'

class Movie extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let movieStyle={
      textAlign:'left'
    };
    return (
      <Item.Group divided>
        <Item style={movieStyle}>
          <Item.Image src={this.props.image} />
          <Item.Content>
            <Item.Header as='a'>
              {this.props.header}
            </Item.Header>
            <Item.Meta>
              <span className='cinema'>
                {this.props.subHeader}
              </span>
            </Item.Meta>
            <Item.Description>
              {this.props.movieDescription}
            </Item.Description>
            <Item.Extra>
              <Label>{this.props.label}</Label>
              <Label
                icon='globe'
                content='Additional Languages' />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }

}

export default Movie;
