import React from 'react';
import {
  Segment, Header, Grid, Image,Menu,Container
} from 'semantic-ui-react';
import Carousel from 'react-multi-carousel';
import ReactPlayer from 'react-player'
import 'react-multi-carousel/lib/styles.css';
import { styles } from './styles';



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const renderMenuItem = ({ activeItem }) => {
  if (activeItem === 'Posters') {
    return (
      <Carousel 
        responsive={responsive}
        swipeable
      >
        <Image src="https://www.themoviedb.org/t/p/w220_and_h330_face/cmIKK0TXv64vVKQOjKYMZbsv0GE.jpg" />
        <Image src="https://www.themoviedb.org/t/p/w220_and_h330_face/cmIKK0TXv64vVKQOjKYMZbsv0GE.jpg" />
        <Image src="https://www.themoviedb.org/t/p/w220_and_h330_face/cmIKK0TXv64vVKQOjKYMZbsv0GE.jpg" />
        <Image src="https://www.themoviedb.org/t/p/w220_and_h330_face/cmIKK0TXv64vVKQOjKYMZbsv0GE.jpg" />
        <Image src="https://www.themoviedb.org/t/p/w220_and_h330_face/cmIKK0TXv64vVKQOjKYMZbsv0GE.jpg" />
        <Image src="https://www.themoviedb.org/t/p/w220_and_h330_face/cmIKK0TXv64vVKQOjKYMZbsv0GE.jpg" />
      </Carousel>
    )
  }
  return (
    <Carousel 
      responsive={responsive}
      swipeable
    >
      <ReactPlayer
        style={{ 'padding-left': '1em','padding-right': '1em' }}
        playsinline
        url="https://www.youtube.com/watch?v=f5OD9CKrZEw&list=PLGLfVvz_LVvReUrWr94U-ZMgjYTQ538nT"
        width="100%"
        height="100%"
      />

      <ReactPlayer
        style={{ 'padding-left': '1em','padding-right': '1em' }}
        playsinline
        url="https://www.youtube.com/watch?v=f5OD9CKrZEw&list=PLGLfVvz_LVvReUrWr94U-ZMgjYTQ538nT"
        width="100%"
        height="100%"
      />
      <ReactPlayer
        style={{ 'padding-left': '1em','padding-right': '1em' }}
        playsinline
        url="https://www.youtube.com/watch?v=f5OD9CKrZEw&list=PLGLfVvz_LVvReUrWr94U-ZMgjYTQ538nT"
        width="100%"
        height="100%"
      />
      <ReactPlayer
        style={{ 'padding-left': '1em','padding-right': '1em' }}
        playsinline
        url="https://www.youtube.com/watch?v=f5OD9CKrZEw&list=PLGLfVvz_LVvReUrWr94U-ZMgjYTQ538nT"
        width="100%"
        height="100%"
      />
      <ReactPlayer
        style={{ 'padding-left': '1em','padding-right': '1em' }}
        playsinline
        url="https://www.youtube.com/watch?v=f5OD9CKrZEw&list=PLGLfVvz_LVvReUrWr94U-ZMgjYTQ538nT"
        width="100%"
        height="100%"
      />
      <ReactPlayer
        style={{ 'padding-left': '1em','padding-right': '1em' }}
        playsinline
        url="https://www.youtube.com/watch?v=f5OD9CKrZEw&list=PLGLfVvz_LVvReUrWr94U-ZMgjYTQ538nT"
        width="100%"
        height="100%"
      />
  

    </Carousel>
  )
}

class MenuExampleSecondaryPointing extends React.Component {
  state = { activeItem: 'Posters' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          
          <Menu.Item
            name="Posters"
            active={activeItem === 'Posters'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Videos"
            active={activeItem === 'Videos'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Menu>

        {renderMenuItem({ activeItem })}
       
      </div>
    )
  }
}

const Movie = ({
  title = 'We Can Be Heroes',
  overview = "When alien invaders capture Earth's superheroes, their kids must learn to work together to save their parents - and the planet.When alien invaders capture Earth's superheroes, their kids must learn to work together to save their parents - and the planet.When alien invaders capture Earth's superheroes, their kids must learn to work together to save their parents - and the planet.When alien invaders capture Earth's superheroes, their kids must learn to work together to save their parents - and the planet.When alien invaders capture Earth's superheroes, their kids must learn to work together to save their parents - and the planet.When alien invaders capture Earth's superheroes, their kids must learn to work together to save their parents - and the planet.When alien invaders capture Earth's superheroes, their kids must learn to work together to save their parents - and the planet",
  directors = 'Robert Rodriguez'
}) => (
  <Segment textAlign="center" style={styles.segment} vertical>
    <Segment style={{ padding: '3em 0em' }} vertical>
      <Grid container stackable verticalAlign="left">
        <Grid.Row>
          <Grid.Column floated="left" width={4}>
            <Image size="medium" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg" wrapped />
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as="h1" style={{ fontSize: '4em' }}>
              {title}
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Container styles={{ 'min-height': '3em' }}>
                <Header as="h1" style={{ fontSize: '1em' }}>
                  Overview
                </Header>
                {overview}
              </Container>    
              <Header as="h1" style={{ fontSize: '1em' }}>
                Directors
              </Header>
              {directors}
            </p>
            <MenuExampleSecondaryPointing style={{ 'padding-right': '4em' }} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Segment>
);

export default Movie;
