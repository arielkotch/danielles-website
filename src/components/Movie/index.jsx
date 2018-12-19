import React, { Component } from 'react';
import {Segment,Header,Image,Grid,Card,Item,Button,paragraph,Label,Icon} from 'semantic-ui-react'

function Movie (props) {

    let movieStyle={
      textAlign:'left'
    };
    let movieTitleStyle={
      fontSize:'21px'
    };
    let metaStyle={
      fontSize:'15px',
    };
    let descriptionStyle={
      fontSize:'16px',
      lineHeight:'1.5em'
    };
    let labelStyle={
      fontSize:'13px'
    };
    return (
      <Item.Group divided>
        <Item style={movieStyle}>
          <Item.Image src={props.image} />
          <Item.Content>
            <Item.Header as='a' style={movieTitleStyle}>
              {props.header}
            </Item.Header>
            <Item.Meta>
              <span className='cinema' style={metaStyle}>
                {props.subHeader}
              </span>
            </Item.Meta>
            <Item.Description style={descriptionStyle}>
              {props.movieDescription}
            </Item.Description>
            <Item.Extra>
              <Label style={labelStyle}  as="a">{props.label}</Label>
              <Label style={labelStyle} as="a"
                icon='globe'
                content='Additional Languages' />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  

}

export default Movie;
