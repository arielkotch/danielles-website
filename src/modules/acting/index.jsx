import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Segment,Header,Image,Grid,Card,Item,Button,paragraph,Label,Icon} from 'semantic-ui-react'
import Movie from '../../components/Movie/index'

class Acting extends Component {

  render() {
    let description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur tempus mi, sed lacinia est volutpat vitae. Quisque nec tempus lacus. Sed ante diam, lacinia sit amet sem sit amet, vestibulum aliquam quam. Morbi tincidunt volutpat interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut tempus arcu sed risus interdum, ut pharetra augue facilisis. Suspendisse tempor velit quis velit pretium, a dignissim quam placerat. Cras tincidunt molestie magna, a facilisis metus finibus a. Nulla convallis vulputate ultrices. Donec at orci quam.";
    let segmentStyle={
      minHeight: 700,
      backgroundColor:'#DDDDDD',
      paddingTop:'5em'
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
          <Movie
            header='12 Years a Slave'
            subHeader='18 Union Square'
            movieDescription={description}
            label="IMAX"
            image="https://react.semantic-ui.com/images/wireframe/image.png"
            />
            <Movie
              header='The Amazing Spider Man'
              subHeader='A great experiance to cast in this movie'
              movieDescription={description}
              label="PIXAR"
              image="https://react.semantic-ui.com/images/wireframe/image.png"
              />

        </Segment>
      </React.Fragment>
    );
  }
}

export default Acting;
