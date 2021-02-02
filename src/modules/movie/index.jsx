/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import {
  Segment, Image,Menu
} from 'semantic-ui-react';
import Carousel from 'react-multi-carousel';
import { sortBy } from 'lodash';
import ReactPlayer from 'react-player'
import 'react-multi-carousel/lib/styles.css';



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

const onClickedSorting = (e,item) => {
  console.log(e,item)
  item.forEach((div) => {
    console.log(div.currentTarget.textContent)
  })
}
const divs = [
  <div style={{ color: 'yellow' }}>Dan</div>,
  <div style={{ color: 'blue' }}>Ariel</div>,
  <div style={{ color: 'black' }}>Mark</div>
]

const Movie = () => (
  <Segment>
    <div>
      { divs }
    </div>
    <button onClick={(e) => onClickedSorting(e,divs)}>Sort</button>
  </Segment>

);

export default Movie;
