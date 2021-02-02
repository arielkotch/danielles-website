/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import {
  Segment, Container, Grid, Header, Divider,Image,Loader
} from 'semantic-ui-react';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ResponsiveGallery from 'react-responsive-gallery';

import ReactPlayer from 'react-player';
import { styles } from './styles';

class Dance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      videos: [],
      ready: false
    };
  }

  componentDidMount() {
    this.setState({
      pictures: this.props.getDancePictures || [],
      videos: this.props.getDanceVideos || [],

    });
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    if (nextProps.getDancePictures !== this.props.getDancePictures) {
      // Perform some operation
      this.setState({ pictures: nextProps.getDancePictures });
      if (!isEmpty(nextProps.getDancePictures)) {
        this.setState({ ready: true })
      }
    }
    if (nextProps.getDanceVideos !== this.props.getDanceVideos) {
      // Perform some operation
      this.setState({ videos: nextProps.getDanceVideos });
    }
  }

  render() {
    return (
      <Segment textAlign="center" style={styles.segment} vertical>
        <Container fluid style={styles.movie}>
          <ReactPlayer
            playsinline
            playing
            muted
            width="100%"
            url="https://daniellekotch.s3.us-east-2.amazonaws.com/daniellekotch/dance/videos/dance_main.mp4"
            height="40em"
          />
        </Container>
        <Divider />
        <Container>
          <Header style={{ fontSize: '3em', marginTop: '1em', marginBottom: '1em' }} textAlign="left">Performances.</Header>
          <Grid columns={3}>
            {this.state.videos.map(({ url }) => (
              <Grid.Column>
                <ReactPlayer
                  playsinline
                  controls
                  centered
                  url={url}
                  width="100%"
                  height="100%"
                />
              </Grid.Column>
            ))}
          </Grid>

                      

          <Header style={{ fontSize: '3em', marginTop: '1em', marginBottom: '1em' }} textAlign="left">Gallery.</Header>

          <ResponsiveGallery 
            useLightBox 
            images={this.state.pictures.map(({ url }) => ({ src: url }))}
          />

           

         
        </Container>
      </Segment>
    );
  }
}
export default Dance;
