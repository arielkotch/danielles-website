import React, { Component } from 'react'
import Gallery from '/Users/arielkotch/Desktop/danielles-website/src/components/Gallery'
import { Segment, Container, Grid, Header, Divider } from 'semantic-ui-react'
import { styles } from './styles.js'
import VIDEOS from './videos'
import PHOTOS from './images'
import ReactPlayer from 'react-player'

class Dance extends Component {
    state = {
        showPictures: false,
    }

    render() {
        return (
            <React.Fragment>
                <Segment textAlign="center" style={styles.segment} vertical>
                    <Container fluid style={styles.movie}>
                        <ReactPlayer
                            playsinline
                            playing
                            muted
                            url="http://daniellekotch.com/videos/dance.mov"
                            width={'100%'}
                            height={'40em'}
                        />
                    </Container>
                    <Divider />
                    <Container>
                        <Header textAlign="left">PREFORMANCES</Header>
                        <Grid columns={3}>
                            {VIDEOS.map(({ src, description, title }) => (
                                <Grid.Column>
                                    <ReactPlayer
                                        playsinline
                                        centered
                                        url={src}
                                        width={'100%'}
                                        height={'100%'}
                                    />
                                </Grid.Column>
                            ))}
                        </Grid>

                        <Header textAlign="left">PHOTOS</Header>
                        <Gallery photos={PHOTOS} />
                    </Container>
                </Segment>
            </React.Fragment>
        )
    }
}
export default Dance
