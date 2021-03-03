/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Card, Container,Button,Header
} from 'semantic-ui-react';
import ReactPlayer from 'react-player';
import { isEmpty } from 'lodash';
import ResponsiveGallery from 'react-responsive-gallery';
import VideoBox from '../../molecules/Content/Video/index';

import Movies from '../../molecules/Movies/moviesContainer';
// import Quote from '../../atoms/Quote/index';
import { styles } from './styles';

class Acting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imdb: [],
      actor: {},
      pictures: [],
      ready: false,
      scrollPos: 0,
      playingReel: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
    this.setState({
      movies: [],
      tvShows: [],
      media: this.props.getMovies || [],
      pictures: this.props.getActingPictures || [],
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
    if (nextProps.getActingPictures !== this.props.getActingPictures) {
      // Perform some operation
      this.setState({ pictures: nextProps.getActingPictures });
    }
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  
    const height = document.documentElement.scrollHeight
      - document.documentElement.clientHeight
  
    const scrolled = winScroll / height
  
    this.setState({
      scrollPos: scrolled,
    })
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
         <Container fluid style={{ backgroundColor: 'black', padding: 0, margin: 0 }}>
           
           <ReactPlayer
             playsinline
             playing={this.state.scrollPos < 0.20}
             muted
             url="https://daniellekotch.s3.us-east-2.amazonaws.com/daniellekotch/trailors/goodnight_death_trailer.mp4"
             width="100%"
             height="40em"
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
           <Header style={{ fontSize: '4em', marginTop: '1em',marginBottom: '0em' }} textAlign="left">Movies.</Header>

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
         
           <Card.Group style={styles.cardGroup} itemsPerRow="four">
             {!isEmpty(media) && this.resizeMediaOverview(media).map((movie) => (
               <Movies movie={movie} id={movie.id} title={movie.title} overview={movie.overview} />
             ))}
           </Card.Group>
         </Container>

         <VideoBox
           inverted
           content={[
             {
               header: 'Reel.',
               paragraph: `We can give your company superpowers to do 
             things that they never thought possible.
             Let us delight your customers and
             empower your needs... through pure data analytics.` 
             }
           ]}
           videoUrl="https://daniellekotch.s3.us-east-2.amazonaws.com/daniellekotch/trailors/danielle_reel.mp4"
           floated="right"
         />
         <Container className="container">

           <Header style={{ fontSize: '4em', marginTop: '1em', marginBottom: '1em' }} textAlign="left">Gallery.</Header>
           <ResponsiveGallery 
             useLightBox 
             images={this.state.pictures.map(({ url }) => ({ src: url }))}
           />
         </Container>
         <div style={{ padding: '3em' }} />
       </>
     );
   }
}

export default Acting;
