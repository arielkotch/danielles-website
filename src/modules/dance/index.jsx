import React, { Component } from 'react';
import {Segment,Header} from 'semantic-ui-react'
import {styles} from './styles.js'
import Gallery from 'react-grid-gallery';

const IMAGES=Array.from({ length: 100 }).map(()=>
(
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
}
))


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
          <Gallery images={IMAGES}/>,

        </Segment>
      </React.Fragment>
    );
  }
}
export default Dance;
