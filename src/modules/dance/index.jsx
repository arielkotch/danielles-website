/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Gallery from 'molecules/Gallery/index';
import {
  Segment, Container, Grid, Header, Divider,
} from 'semantic-ui-react';
import ReactPlayer from 'react-player';
import { styles } from './styles';
import VIDEOS from './videos';
import PHOTOS from './images';

class Dance extends Component {
  render() {
    return (
      <Segment textAlign="center" style={styles.segment} vertical>
        <Container fluid style={styles.movie}>
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
            url="http://daniellekotch.com/videos/dance.mov"
            width="100%"
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
          <Gallery photos={PHOTOS} />
        </Container>
      </Segment>
    );
  }
}
export default Dance;
