/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  Modal,Image,Grid, Segment,Header
} from 'semantic-ui-react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactPlayer from 'react-player'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function MovieModal({
  isOpen, onCloseModal, title, overview ,image
}) {
  return (
    <Modal
      onClose={onCloseModal}
      open={isOpen}
      size="fullscreen"

    >
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign="left">
              <Grid.Row>
                <Grid.Column floated="left" width={4}>
                  <Image size="medium" src={image} wrapped />
                </Grid.Column>
                <Grid.Column width={12}>
                  <Header as="h3" style={{ fontSize: '2em' }}>
                    {title}
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    {overview}
                  </p>
                  <Segment>
                    <Header as="h3" style={{ fontSize: '2em' }}>
                      Videos
                    </Header>
                    <Carousel 
                      responsive={responsive}
                      swipeable
                    >
                      <ReactPlayer
                        style={{ 'padding-left': '1em','padding-right': '1em' }}
                        playsinline
                        url="https://www.youtube.com/watch?v=f5OD9CKrZEw&list=PLGLfVvz_LVvReUrWr94U-ZMgjYTQ538nT"
                        width="100%"
                        height="100%"
                      />
                
                      <ReactPlayer
                        style={{ 'padding-left': '1em','padding-right': '1em' }}
                        playsinline
                        url="https://www.youtube.com/watch?v=f5OD9CKrZEw&list=PLGLfVvz_LVvReUrWr94U-ZMgjYTQ538nT"
                        width="100%"
                        height="100%"
                      />
                      <ReactPlayer
                        style={{ 'padding-left': '1em','padding-right': '1em' }}
                        playsinline
                        url="https://www.youtube.com/watch?v=f5OD9CKrZEw&list=PLGLfVvz_LVvReUrWr94U-ZMgjYTQ538nT"
                        width="100%"
                        height="100%"
                      />
                      <ReactPlayer
                        style={{ 'padding-left': '1em','padding-right': '1em' }}
                        playsinline
                        url="https://www.youtube.com/watch?v=f5OD9CKrZEw&list=PLGLfVvz_LVvReUrWr94U-ZMgjYTQ538nT"
                        width="100%"
                        height="100%"
                      />
                      <ReactPlayer
                        style={{ 'padding-left': '1em','padding-right': '1em' }}
                        playsinline
                        url="https://www.youtube.com/watch?v=f5OD9CKrZEw&list=PLGLfVvz_LVvReUrWr94U-ZMgjYTQ538nT"
                        width="100%"
                        height="100%"
                      />
                      <ReactPlayer
                        style={{ 'padding-left': '1em','padding-right': '1em' }}
                        playsinline
                        url="https://www.youtube.com/watch?v=f5OD9CKrZEw&list=PLGLfVvz_LVvReUrWr94U-ZMgjYTQ538nT"
                        width="100%"
                        height="100%"
                      />
                    
                
                    </Carousel>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
             

            </Grid>
          </Segment>

          
        </Modal.Description>
      </Modal.Content>
     
    </Modal>

  );
}

export default MovieModal;
