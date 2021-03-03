/* eslint-disable react/no-deprecated */
import React from 'react';
import {
  Grid, Image, Header
} from 'semantic-ui-react';
import { isEmpty } from 'lodash'
import ReactPlayer from 'react-player'

export const TextCol = ({
  content,inverted, width = 8, styles
}) => (
  <Grid.Column width={width}>
    {
        !isEmpty(content) 
        && content.map(({ header, paragraph }) => (
          <>
            <Header
              as="h3"
              style={{
                ...{ color: inverted ? 'white' : 'black' },
                ...styles.header
              }}
            >
              {header}
            </Header>
            <p style={{
              ...{ color: inverted ? 'white' : 'black' },
              ...styles.paragraph
            }}
            >
              {paragraph}
            </p>
          </>
        ))
      }
  </Grid.Column>
)
  
export const ImageCol = ({
  floated,imageUrl,onLoad, width = 6
}) => (
  <Grid.Column floated={floated} width={width}>
    <Image
      onLoad={onLoad}
      bordered
      rounded
      size="large"
      src={imageUrl}
    />
  </Grid.Column>
)

// this.state.scrollPos > 0.50 && this.state.scrollPos < 0.80
export const VideoCol = ({
  videoUrl,playing,floated,onReady, width = 6 
}) => (
  <Grid.Column floated={floated} width={width}>
    <ReactPlayer
      playsinline
      muted
      onReady={onReady}
      playing={playing}
      controls
      url={videoUrl}
      width="100%"
    />
  </Grid.Column>
) 
