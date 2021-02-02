import React from 'react';
import { Segment } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

import { styles } from './styles';

const Reel = () => (
  <Segment textAlign="center" style={styles.segment} vertical>
    <ReactPlayer
      controls
      playing
      height="40em"
      width="100%"
      url="https://daniellekotch.s3.us-east-2.amazonaws.com/daniellekotch/trailors/danielle_reel.mp4"
    />
  </Segment>
);

export default Reel;
