import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import ReactPlayer from 'react-player'

import { styles } from './styles.js'

class Reel extends Component {
    render() {
        return (
            <React.Fragment>
                <Segment textAlign="center" style={styles.segment} vertical>
                    <ReactPlayer
                        controls
                        loop
                        width="100%"
                        height="100%"
                        url="http://daniellekotch.com/videos/acting_resize.mp4"
                        playing
                    />
                </Segment>
            </React.Fragment>
        )
    }
}

export default Reel
