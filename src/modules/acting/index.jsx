/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Grid, Card, Container } from 'semantic-ui-react';
import ReactPlayer from 'react-player';
import { isEmpty, sortBy } from 'lodash';
import Movies from '../../molecules/Movies/index';
import Quote from '../../atoms/Quote/index';
import { styles } from './styles';

class Acting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imdb: [],
      actor: {},
    };
  }

  componentDidMount() {
    this.setState({
      movies: [],
      tvShows: [],
      imdb: this.props.getMovies || [],
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.getMovies) 
    && !isEmpty(nextProps.getTVShows) 
    && !isEmpty(nextProps.getVideo)) {
      this.setState({
        imdb: [...nextProps.getMovies, ...nextProps.getTVShows,],
      });
    }

    if (nextProps.getMovies !== this.props.getMovies) {
      // Perform some operation
      this.setState({ imdb: nextProps.getMovies });
    }
    if (nextProps.getActor !== this.props.getActor) {
      // Perform some operation
      this.setState({ actor: nextProps.getActor });
    }
  }

  render() {
    const { imdb } = this.state;
    console.log(this.props)
    return (
      <>
        <Container fluid style={styles.movie}>
          <ReactPlayer
            playsinline
            url="https://www.youtube.com/watch?v=fYrh71MXalk"
            width="100%"
            height="40em"
          />
        </Container>

        <Container fluid style={styles.container}>
          <div style={styles.header} className="ui huge header center aligned">Acting</div>

          <Quote
            quote="Danielle Kotch is an actress, known for Person of Interest (2011), Sinister (2012) and Lullaby (2014)."
            source="IMDB"
          />
        </Container>
        <Container styles={styles.cardGroup} className="container">
          <Card.Group centered itemsPerRow="3">
            {imdb.length !== 0
                            && sortBy(imdb, ['popularity']).map((movie) => (
                              <>
                                <Grid.Column>
                                  <Movies movie={movie} />
                                  <div style={{ padding: '10px' }} />
                                </Grid.Column>
                                <div style={{ padding: '10px' }} />
                              </>
                            ))}
          </Card.Group>
        </Container>
      </>
    );
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

export default Acting;
