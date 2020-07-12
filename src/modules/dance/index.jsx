import React, { Component } from 'react'
import { Segment, Container, Grid, Header } from 'semantic-ui-react'
import { styles } from './styles.js'
import Gallery from 'react-grid-gallery'
import Quote from '../../components/Quote/index'

import ReactPlayer from 'react-player'
const IMAGES = [
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6204.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6204.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6193.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6193.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6191.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6191.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6189.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6189.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6155.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6155.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6149.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6149.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6144.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6144.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6050.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6050.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6014.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6014.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6009.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6009.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6001.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q6001.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5998.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5998.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5983.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5983.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5976.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5976.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5973.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5973.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5968.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5968.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5960.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5960.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5935.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5935.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5933.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5933.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
        src: 'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5968.jpg',
        thumbnail:
            'http://daniellekotch.com/wp-content/uploads/2016/05/DD6Q5968.jpg',

        caption: 'After Rain (Jeshu John - designerspics.com)',
    },
]

class Dance extends Component {
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
                    <div class="ui huge header center aligned">
                        PERFORMANCES
                    </div>
                    <Quote
                        quote="Practice like you have never won before, Perform like you’ve never lost before."
                        source="Bernard F. Asuncion"
                    />
                    <Container>
                        <Header
                            style={{
                                'text-decoration': 'underline',
                            }}
                        >
                            Preformances
                        </Header>
                        <Grid columns={3}>
                            {Array.from({ length: 6 }).map(() => (
                                <Grid.Column>
                                    <Segment>
                                        <ReactPlayer
                                            playsinline
                                            centered
                                            styles={styles.reactDancePlayer}
                                            url="https://www.youtube.com/watch?v=rFMO7pUU6uE"
                                            width={'100%'}
                                            height={'100%'}
                                        />
                                    </Segment>
                                </Grid.Column>
                            ))}
                        </Grid>
                    </Container>
                    <Gallery images={IMAGES} />,
                </Segment>
            </React.Fragment>
        )
    }
}
export default Dance
