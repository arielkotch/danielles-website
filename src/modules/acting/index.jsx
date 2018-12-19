import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Segment,Header,Image,Grid,Card,Item,Button,paragraph,Label,Icon,Container} from 'semantic-ui-react'
import Movie from '../../components/Movie/index'
import {getMovies} from '../data/index'
import imagePlaceholder from './regular.png'
import Typist from '../../components/Typist/index'
import CardView from '../../components/CardView/index'
import  './styles.js';

class Acting extends Component {
  constructor(props){
    super(props);
    this.state={
      movies:[],
      sentences:[
      'I love acting, it’s where dreams can be realized.',
       'Fantasy comes to life.',
        'There are no limitations on what’s possible.'
      ]
    }
  }
  componentDidMount(){
    this.setState({
      movies:getMovies()
    })
  }
  render() {
    return (
      <React.Fragment>
        <Grid>
          <div class="row">
            <Image fluid src={imagePlaceholder}/>
          </div>
        </Grid>
        <Grid>
          <div class="row sixteen wide">
            <div class="ui four wide column">
            </div>
            <div class="ui eight wide column">
                <div class="ui huge header center aligned">Acting</div>

            </div>
            <div class="ui four wide column">
            </div>
          </div>
        </Grid>
        <Container className="container">
          {
            this.state.movies.map(function(item,index){
              return (
                <Grid columns={3} divided>
                    <Grid.Row>
                      <Grid.Column>
                        <CardView
                          image={"https://upload.wikimedia.org/wikipedia/en/f/f8/SinisterMoviePoster2012.jpg"}
                          title={"Sinister"}
                          meta={"Thriller/Horror"}
                          description={"Danielle played “Lawngirl” in Sinister where she had a late night run in with Ellison Oswalt played by Ethan Hawke."}
                          label="IMDB"
                          />      </Grid.Column>
                      <Grid.Column>
                        <CardView
                          image={"https://upload.wikimedia.org/wikipedia/en/f/f8/SinisterMoviePoster2012.jpg"}
                          title={"Sinister"}
                          meta={"Thriller/Horror"}
                          description={"Danielle played “Lawngirl” in Sinister where she had a late night run in with Ellison Oswalt played by Ethan Hawke."}
                          label="IMDB"
                          />      </Grid.Column>
                      <Grid.Column>
                        <CardView
                          image={"https://upload.wikimedia.org/wikipedia/en/f/f8/SinisterMoviePoster2012.jpg"}
                          title={"Sinister"}
                          meta={"Thriller/Horror"}
                          description={"Danielle played “Lawngirl” in Sinister where she had a late night run in with Ellison Oswalt played by Ethan Hawke."}
                          label="IMDB"
                          />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
              );
            })
          }
        </Container>
      </React.Fragment>
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
