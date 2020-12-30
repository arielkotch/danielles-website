/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    this.setState({
      photos: this.props.photos,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { photos } = this.props;
    if (nextProps.photos !== photos) {
      this.setState({
        photos,
      });
    }
  }

    groupByThree = ([a, b, c, ...rest]) => {
      if (rest.length === 0) return [[a, b, c].filter((x) => x !== undefined)];
      return [[a, b, c]].concat(this.groupByThree(rest));
    }

    render() {
      const { photos } = this.state;
      return (
        <Grid>
          {this.groupByThree(photos).map((sub) => (
            <Grid.Row columns={3}>
              {sub.map(({ src }) => (
                <Grid.Column>
                  <Image src={src} />
                </Grid.Column>
              ))}
            </Grid.Row>
          ))}
        </Grid>
      );
    }
}

Gallery.defaultProps = {
  photos: [],
};

Gallery.propTypes = {
  photos: PropTypes.instanceOf(Array),
};
export default Gallery;
