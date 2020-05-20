import React, { Component } from 'react';
import {Segment,Header,Image,Grid,Card,Item,Button,paragraph,Label,Icon,Container} from 'semantic-ui-react'
import Movie from '../../components/Movie/index'
import {getMovies} from '../data/index'
import imagePlaceholder from './regular.png'
import Typist from '../../components/Typist/index'
import CardView from '../../components/CardView/index'

import {styles} from './styles.js'

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
        
        <Card.Group
        stackable 
        centered
        itemsPerRow='3'>

          {
            this.state.movies.map(function({
              title,
              meta,
              description,
              label,
              image,
              movieUrl
            },index){
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
                   <div style={{padding:'10px'}}/>
                </Grid.Column>
                  <div style={{padding:'10px'}}/>
                </React.Fragment>
              );
            })
          }
          
         </Card.Group>
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
