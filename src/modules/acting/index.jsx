/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Card, Container,Button
} from 'semantic-ui-react';
import ReactPlayer from 'react-player';
import { isEmpty } from 'lodash';
import Movies from '../../molecules/Movies/index';
// import Quote from '../../atoms/Quote/index';
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
      media: this.props.getMovies || [],
    });
  }

  componentWillReceiveProps(nextProps) {
    if (
      !isEmpty(nextProps.getMovies) 
    && !isEmpty(nextProps.getTVShows)) {
      this.setState({
        media: [...nextProps.getMovies, ...nextProps.getTVShows,],
      });
    }

    if (nextProps.getMovies !== this.props.getMovies) {
      // Perform some operation
      this.setState({ movies: nextProps.getMovies });
    }
    if (nextProps.getActor !== this.props.getActor) {
      // Perform some operation
      this.setState({ actor: nextProps.getActor });
    }
  }

  resizeMediaOverview = (media) => {
    if (!isEmpty(media)) {
      return media.map((media) => {      
        if (media.overview.length > 200) {
          return { ...media,overview: [...media.overview.substring(0, 200),'...'] }
        }
        return media;
      })
    }
    return []
  }

  onHandleAllMovies =() => {
    const { getMovies, getTVShows } = this.props;

    this.setState(
      { media: [...getMovies, ...getTVShows,] }
    )
  }

  onHandleFilterMovies =() => {
    const { getMovies } = this.props;
    this.setState(
      { media: [...getMovies] }
    )
  }

   onHandleFilterShows =() => {
     const { getTVShows } = this.props;
     this.setState(
       { media: [...getTVShows] }
     )
   }

   render() {
     const { media } = this.state;
  
    
  
     return (
       <>
         <Container fluid style={styles.movie}>
           <ReactPlayer
             playsinline
             playing
             muted
             url="https://vimeo.com/482477619"
             width="100%"
             height="41em"
           />
         </Container>

         {/* <Container fluid style={styles.container}>
          <div style={styles.header} className="ui huge header center aligned">Acting</div>

          <Quote
            quote="Danielle Kotch is an actress, known
             for Person of Interest (2011), Sinister (2012) and Lullaby (2014)."
            source="IMDB"
          />
        </Container> */}
       
         <Container className="container">
           <Container style={styles.buttonGroup}>
             <Button onClick={this.onHandleAllMovies}>
               All
             </Button>
             <Button onClick={this.onHandleFilterMovies}>
               Movies
             </Button>
             <Button onClick={this.onHandleFilterShows}>
               Shows
             </Button>
           </Container>
         
           <Card.Group style={styles.cardGroup} centered itemsPerRow="four">
             {!isEmpty(media) && this.resizeMediaOverview(media).map((movie) => (
               <Movies movie={movie} />
             ))}
           </Card.Group>
         </Container>
       </>
     );
   }
}

export default Acting;
