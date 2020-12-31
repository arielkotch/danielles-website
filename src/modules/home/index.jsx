/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Segment,Header,Container, List ,Button,Icon,Grid,Image
} from 'semantic-ui-react';
import ReactPlayer from 'react-player';
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
    // const { actor } = this.state;
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
          <div
            style={styles.wrapper}
            className="video-wrapper"
          >
            <ReactPlayer
              style={styles.reactPlayer}
              playsinline
              loop
              playing
              width="100%"
              height="100%"
              muted
              config={{
                vimeo: {
                  playerOptions: { controls: false } 
                } 
              }}

              url="https://vimeo.com/250628595"
            />
           
         
          </div>


        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Whats New
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do 
                  things that they never thought possible.
                  Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes thats
                  right, you thought it was the stuff of dreams, but even bananas can be
                  bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image bordered rounded size="large" src="https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/71138327_537132577036949_3587288940547145728_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=kMlGwzd3AzsAX8DVr_b&_nc_ht=scontent.ftlv5-1.fna&oh=892a2bc03f9adf2c57b076e3e4549569&oe=601253DF" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Acting
                </Header>
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                <Button size="huge">Enter</Button>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Dancing 
                </Header>
                
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                <Button size="huge">Enter</Button>

              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Singing
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <b>Nan</b>
                  {' '}
                  Chief Fun Officer Acme Toys
                </p>
                <Button size="huge">Enter</Button>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      
       
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column floated="left" width={4}>
                <Image bordered rounded size="large" src="https://walter.trakt.tv/images/people/000/457/908/headshots/thumb/2785a05c3b.jpg.webp" />
              </Grid.Column>
              <Grid.Column width={10}>
               
                <Header as="h3" style={{ fontSize: '2em' }}>
                  About Me
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do 
                  things that they never thought possible.
                  Let us delight your customers and
                  empower your needs... through pure data analytics.
                  We can give your company superpowers to do 
                  things that they never thought possible.
                  Let us delight your customers and
                  empower your needs... through pure data analytics.
                  We can give your company superpowers to do 
                  things that they never thought possible.
                  Let us delight your customers and
                  empower your needs... through pure data analytics.
                  We can give your company superpowers to do 
                  things that they never thought possible.
                  Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>

              </Grid.Column>
             
            </Grid.Row>
            <Grid.Row />
          </Grid>
        </Segment>
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
        
        
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container textAlign="center">
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="https://www.facebook.com/Danielle-Kotch-369760013092295">
                <Button color="facebook">
                  <Icon name="facebook" />
                  {' '}
                  Facebook
                </Button>              
              </List.Item>
              <List.Item as="a" href="https://www.imdb.com/name/nm2714832/">
                <Button color="yellow">
                  <Icon name="camera" />
                  {' '}
                  IMDB
                </Button>
              </List.Item>
              <List.Item as="a" href="https://www.instagram.com/danielle_kotch/">
                <Button color="instagram">
                  <Icon name="instagram" />
                  {' '}
                  Instagram
                </Button>
              </List.Item>
              <List.Item as="a" href="https://www.youtube.com/channel/UC9uuSPk6JTN2tLpU4hRZlFQ">
                <Button color="youtube">
                  <Icon name="youtube" />
                  {' '}
                  YouTube
                </Button>              
              </List.Item>
            </List>
          </Container>
        </Segment>

        



      </>
    );
  }
}

export default Home;

