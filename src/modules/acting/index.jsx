import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Segment,Header,Image,Grid,Card,Item,Button,paragraph,Label,Icon,Container} from 'semantic-ui-react'
import Movie from '../../components/Movie/index'
import {getMovies} from '../data/index'
import imagePlaceholder from './regular.png'
import styles from './index.less'

import ReactPlayer from 'react-player'

class Acting extends Component {
  constructor(props){
    super(props);
    this.state={
      movies:getMovies()
    }
  }
  render() {
    let description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur tempus mi, sed lacinia est volutpat vitae. Quisque nec tempus lacus. Sed ante diam, lacinia sit amet sem sit amet, vestibulum aliquam quam. Morbi tincidunt volutpat interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut tempus arcu sed risus interdum, ut pharetra augue facilisis. Suspendisse tempor velit quis velit pretium, a dignissim quam placerat. Cras tincidunt molestie magna, a facilisis metus finibus a. Nulla convallis vulputate ultrices. Donec at orci quam.";

    let headerStyle={
      fontSize:'4em',
      color:'#FFFFFF',
      fontWeight: 'normal',
      marginBottom: 0,
      paddingTop:  '4em',
    };
    let rowStyle={
      marginTop:'0px',
      minHeight:200,
    };

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
                <div class="ui small header center aligned">
                  “I love acting because it’s this space where dreams can be realized, fantasy comes to life, and there are no limitations on what’s possible.”
              </div>
            </div>
            <div class="ui four wide column">
            </div>
          </div>
        </Grid>
        <Container className="container">
          {
            this.state.movies.map(function(item,index){
              return (
                <Grid>
                  <div class="ui row">
                    <div class="ui column two wide">


                <ReactPlayer playsinline  url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={'320px'} height={'220px'} playing />
                  </div>
                  <div class="ui column twelve wide" style={{paddingTop:'20px'}}>
                    <div class="row">
                <Movie


                  key={index}
                  header={item.title}
                  subHeader={item.meta}
                  movieDescription={item.description}
                  label={item.label}
                //  image={item.image}
                  />
                </div>
              </div>
                </div>
              </Grid>
              );
            })
          }
        </Container>

      </React.Fragment>
    );
  }
}
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
