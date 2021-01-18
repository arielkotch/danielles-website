/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Card, Image, Label } from 'semantic-ui-react';
import { isEmpty } from 'lodash';

import Modal from '../../atoms/MovieModal/index';


// TODO REMOVE THIS HARDCODED LINK
const POSTER_LINK = 'https://image.tmdb.org/t/p/w1280';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      videos: []
    };
  }

  componentDidMount() {
    const { videos } = this.props;
    if (!isEmpty(this.props.getVideo)) {
      this.setState({
        videos
      })
    }
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    if (nextProps.getVideo !== this.props.getVideo) {
      // Perform some operation
      this.setState({ videos: nextProps.getVideo });
    }
  }

    handleOnClick = () => {
      this.setState({
        isModalOpen: true,
      });
    }

    onCloseModal = () => {
      this.setState({
        isModalOpen: false,
      });
    }

    render() {
      const {
        character,
        release_date,
        vote_count,
        vote_average,
        title,
        overview,
        popularity,
        poster_path,
      // eslint-disable-next-line react/destructuring-assignment
      } = this.props.movie;
      console.log(this.state.videos)
      return (
        <Card>
          <Image
            wrapped
            onClick={this.handleOnClick}
            src={`${POSTER_LINK}${poster_path}`}
          />

          <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
              <span className="character">{character}</span>
            </Card.Meta>
            <Card.Description>{overview}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Label className="ui yellow" as="a">
                replace
              </Label>
            </a>
          </Card.Content>
          <Modal
            overview={overview}
            title={title}
            image={`${POSTER_LINK}${poster_path}`}
            movieUrl={!isEmpty(this.state.videos) && `https://www.youtube.com/watch?v=${this.state.videos[0].key}`}
            isOpen={this.state.isModalOpen}
            onCloseModal={this.onCloseModal}
          />
        </Card>
      );
    }
}

export default Movie;
