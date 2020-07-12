import React, { Component } from 'react'
import { Grid, Card, Container } from 'semantic-ui-react'
import { getMovies } from '../data/index'
import CardView from '../../components/CardView/index'
import Quote from '../../components/Quote/index'
import ReactPlayer from 'react-player'
import { styles } from './styles.js'

class Acting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            sentences: [
                'I love acting, it’s where dreams can be realized.',
                'Fantasy comes to life.',
                'There are no limitations on what’s possible.',
            ],
        }
    }
    componentDidMount() {
        this.setState({
            movies: getMovies(),
        })
    }
    render() {
        return (
            <React.Fragment>
                <Container fluid style={styles.movie}>
                    <ReactPlayer
                        playsinline
                        playing
                        url="http://daniellekotch.com/videos/acting.mp4"
                        width={'100%'}
                        height={'40em'}
                    />
                </Container>

                <Container fluid style={styles.header}>
                    <div class="ui huge header center aligned">Acting</div>

                    <Quote
                        quote="“I love acting because it’s this space where dreams can be realized, fantasy comes to life, and there are no limitations on what’s possible.”"
                        source="Jessica Alba"
                    />
                </Container>
                <Container styles={styles.cardGroup} className="container">
                    <Card.Group centered itemsPerRow="3">
                        {this.state.movies.map(function (
                            {
                                title,
                                meta,
                                description,
                                label,
                                image,
                                movieUrl,
                            },
                            index
                        ) {
                            return (
                                <React.Fragment>
                                    <Grid.Column>
                                        <CardView
                                            image={image}
                                            title={title}
                                            meta={meta}
                                            movieUrl={movieUrl}
                                            description={description}
                                            label={label}
                                        />
                                        <div style={{ padding: '10px' }} />
                                    </Grid.Column>
                                    <div style={{ padding: '10px' }} />
                                </React.Fragment>
                            )
                        })}
                    </Card.Group>
                </Container>
            </React.Fragment>
        )
    }
}

//                <ReactPlayer playsinline  url={item.movieUrl} width={'320px'} height={'220px'} />

/*
<Container style={containerStyle}>
  {
    this.state.movies.map(function(item,index){
      return (
        <Movie
          key={index}
          header={item.title}
          subHeader={item.meta}
          movieDescription={item.description}
          label={item.label}
          image={item.image}
          />
      );
    })
  }
</Container>
*/

export default Acting
