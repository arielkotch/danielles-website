/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import ReactPlayer from 'react-player';
// import Typist from 'atoms/Typist/index';
import { styles } from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: '',
      sentences: ['Actor.', 'Dancer.', 'Singer.'],
    };
  }

  componentDidMount() {
    this.setState({
      actor: this.props.getActor || [],
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getActor !== this.props.getActor) {
      // Perform some operation
      this.setState({ actor: nextProps.getActor });
    }
  }

  render() {
    // TODO RESIZE IMAGE ON LOAD
    const { actor } = this.state;
    console.log(actor);
    return (
      <>
        <Segment
          textAlign="center"
          style={styles.segment({
            backgroundImage:
                            ' ',
          })}
          vertical
        >
          {/* <Header
            as="h1"
            content="Danielle Kotch"
            style={styles.header}
          /> */}
          <ReactPlayer
            playsinline
            url="https://www.youtube.com/watch?v=fYrh71MXalk"
            width="100%"
            controls={false}
            height="40em"
          />

          {/* <Typist
            sentences={this.state.sentences}
            backSpeed={40}
            typeSpeed={50}
            style={styles.typist}
          /> */}
        </Segment>
      </>
    );
  }
}

export default Home;
