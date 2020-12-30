import React from 'react';
import { Segment } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

import { styles } from './styles';

const Reel = () => (
  <Segment textAlign="center" style={styles.segment} vertical>
    <ReactPlayer
      controls
      loop
      width="100%"
      url="https://www.youtube.com/watch?v=1H2HivF4HRE&t=2s"
      playing
    />
  </Segment>
);

export default Reel;
