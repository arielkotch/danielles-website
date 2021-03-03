/* eslint-disable import/no-absolute-path */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Segment,Header,Container ,Button,Grid
} from 'semantic-ui-react';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router-dom';
import TextBox from '../../molecules/Content/Text/index';

import { styles } from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      profile: '',
      sentences: ['Actor.', 'Dancer.', 'Singer.'],
      actingReady: true
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
    // const { actor } = this.state;
    console.log(this.myRef)
    return (
      <>

        <Segment style={{ backgroundColor: 'black', padding: 0, margin: 0 }} inverted>
      
          <Header
            as="h1"
            content="DANIELLE KOTCH"
            style={styles.websiteHeader}
          /> 
          <Header
            as="h2"
            content="Singer | Actor | Dancer"
            style={styles.header}
          /> 
          <Container fluid>
            <ReactPlayer
              playsinline
              muted
              playing
              url="https://daniellekotch.s3.us-east-2.amazonaws.com/daniellekotch/trailors/goodnight_death_home.mp4"
              width="100%"
              height="40em"
            />
          </Container>

        </Segment>


        <TextBox 
          floated="right"
          imageUrl="https://daniellekotch.s3.us-east-2.amazonaws.com/daniellekotch/acting/86442376_643409473075925_8432951729149968384_o.jpg"
          content={
            [{
              header: 'Actor.',
              paragraph: `Actress and triple threat. Danielle has been acting professionally since age 
            six when she first appeared on Sesame Street. Films and TV include Sinister,
            Person of Interest, Phoebe in Wonderland, Made in Jersey, Junction as well 
            as other independents and shorts.` 
            },
            {
              header: 'Known For.',
              paragraph: 'Person of Interest (2011), Sinister (2012) and Lullaby (2014).' 
            }]
          }
          
        />

        <TextBox 
          floated="left"
          inverted
          imageUrl="https://daniellekotch.s3.us-east-2.amazonaws.com/daniellekotch/dance/pictures/dance2.jpeg"
          content={
            [{
              header: 'Dance.',
              paragraph: 'From dancing with Robin Thicke on his CBS Christmas special, to performing in an off-broadway show, and dancing on a national commercial for Macy’s. I then went on to receive awards at dance competitions both nationally and internationally' 
            },
            {
              header: 'Worked With.',
              paragraph: 'Travis Wall, Mandy Moore, Stacey Tookey, and Talia Favia'
            }]
          }
        />

        <TextBox 
          imageUrl="https://walter.trakt.tv/images/people/000/457/908/headshots/thumb/2785a05c3b.jpg.webp"
          content={
            [{
              header: 'About Me.',
              paragraph: `At the ripe old age of five, I started my performing arts journey. From dancing with Robin
              Thicke on his CBS Christmas special, to performing in an off-broadway show, and dancing on a
              national commercial for Macy’s. I then went on to receive awards at dance competitions both
              nationally and internationally. Along the way, I was given scholarships and danced with
              choreographers such as Travis Wall, Mandy Moore, Stacey Tookey, and Talia Favia.
              That wasn't enough for me though, after being signed up for a local theater class and booking my
              first audition, I fell in love with acting, which led me to a tv, film, and voiceover career. It all
              started with an interview with Murray on Sesame Street, which led me to movies such as
              Sinister, and Phoebe in Wonderland, to guest-starring in tv shows such as Person of Interest and
              Made in Jersey. However, I didn't stop there because I had to become a triple threat, which led
              me to find a passion for singing.
              My adrenaline junky side reared its head in my free time, which led me to travel the world. This
              included the opportunity to bunjy jump in New Zealand, and snowboard in Switzerland, giving
              me the ability to experience and connect with nature's beauty and always be on the lookout for
              the next big adventure!
              Thank you for visiting my site!` 
            }]
          }
        />
         
        <Header textAlign="center" as="h3" style={{ fontSize: '2em' }}>
          Contact
        </Header>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  New York | Los Angeles
                  COMMERCIAL


                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Frankie Fonte

                  Frankie@atbtalent.com
                </p>
                <Button size="huge">Contact</Button>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  New York | Los Angeles
                  COMMERCIAL


                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Frankie Fonte

                  Frankie@atbtalent.com
                </p>
                <Button size="huge">Contact</Button>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  New York | Los Angeles
                  COMMERCIAL


                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Frankie Fonte

                  Frankie@atbtalent.com
                </p>
                <Button size="huge">Contact</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
       

        



      </>
    );
  }
}

export default withRouter(Home);

