/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ResponsiveGallery from 'react-responsive-gallery';
import {
  Segment, Container, Grid, Header, Divider,
} from 'semantic-ui-react';
import ReactPlayer from 'react-player';
import { styles } from './styles';
import VIDEOS from './videos';

class Dance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    this.setState({
      pictures: this.props.getDancePictures || [],
    });
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    if (nextProps.getDancePictures !== this.props.getDancePictures) {
      // Perform some operation
      this.setState({ pictures: nextProps.getDancePictures });
    }
  }

  render() {
    console.log(this.state.pictures)
    return (
      <Segment textAlign="center" style={styles.segment} vertical>
        <Container fluid style={styles.movie}>
         
          {' '}
          <ReactPlayer
            playsinline
            onReady={() => console.log('onReady')}
            playing
            muted
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
            url="htt00%"
            height="40em"
          />
        </Container>
        <Divider />
        <Container>
          <Header textAlign="left">PREFORMANCES</Header>
          <Grid columns={3}>
            {VIDEOS.map(({ src }) => (
              <Grid.Column>
                <ReactPlayer
                  playsinline
                  centered
                  url={src}
                  width="100%"
                  height="100%"
                />
              </Grid.Column>
            ))}
          </Grid>

          <Header textAlign="left">PHOTOS</Header>
         
          <ResponsiveGallery images={this.state.pictures.map(({ path }) => ({
            src: '/Users/arielkotch/Desktop/danielles-website/assets/dance/photos/thumbnail_IMG_1045.jpg',
          
          }))}
          />
          

         
        </Container>
      </Segment>
    );
  }
}
export default Dance;
