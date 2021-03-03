/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import {
  Segment, Container, Grid, Header
} from 'semantic-ui-react';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ResponsiveGallery from 'react-responsive-gallery';
import ReactPlayer from 'react-player';
import Blur from '../../molecules/Dimmer/index';

import Styles from './styles';

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
    window.addEventListener('scroll', this.listenToScroll)
    this.setState({
      pictures: this.props.getDancePictures || [],
      videos: this.props.getDanceVideos || [],

    });
  }

  // eslint-disable-next-line react/no-deprecated
  // eslint-disable-next-line react/sort-comp
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

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  
    const height = document.documentElement.scrollHeight
      - document.documentElement.clientHeight
  
    const scrolled = winScroll / height
  
    this.setState({
      scrollPos: scrolled,
    })
  }

 

  render() {
    console.log(this.state.pictures.map(({ url }) => ({ src: url })))
    return (
      <Segment textAlign="center" style={Styles.segment} vertical>
        <Container fluid style={Styles.movie}>
          <ReactPlayer
            playsinline
            playing
            muted
            width="100%"
            url="https://daniellekotch.s3.us-east-2.amazonaws.com/daniellekotch/dance/videos/dance_main.mp4"
            height="40em"
          />
        </Container>
        <Segment inverted style={{ marginTop: '0em',padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column floated="left" width={8}>
                <ReactPlayer
                  playsinline
                  controls
                  onPause={() => this.setState({ paused: true })}
                  playing={this.state.scrollPos > 0.15 
                    && this.state.scrollPos < 0.50}
                  centered
                  url="https://daniellekotch.s3.us-east-2.amazonaws.com/daniellekotch/dance/videos/Danielle+Kotch++Im+There+Too_v720P.mp4"
                  width="100%"
                  height="100%"
                />
              </Grid.Column>
              <Grid.Column width={6}>
                <Header as="h3" style={{ color: 'white', fontSize: '2em' }}>
                  1st Place Teen Solo
                </Header>
                <Header as="h3" style={{ color: 'white', fontSize: '1.5em' }}>
                  2015 National Grand Finale
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Im There Too - Danielle Kotch
                </p>
              
              </Grid.Column>
             
            </Grid.Row>
           
          </Grid>
        </Segment>
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
