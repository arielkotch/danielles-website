import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Segment,Container,List,Button,Icon 
} from 'semantic-ui-react';

import Home from '../home/homeContainer';
import Acting from '../acting/actingContainer';
import Dance from '../dance/danceContainer';
import Reel from '../reel/index';
import Movie from '../movie/index';
import Contact from '../contact/index';
import MenuBar from '../../molecules/MenuBar/index';

const AppRouter = () => (
  <>
    <Router>
      <div>
        <div>
          <MenuBar 
            brand="danielle kotch"
            menuItems={
          [
            { name: 'Home', active: true },
            { name: 'Acting', active: false },
            { name: 'Dance', active: false },
            { name: 'Reel', active: false },
            // { name: 'Contact', active: false },
            // { name: 'Movie', active: false }
          ]
        }
          />
        </div>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/Home/" component={Home} />
          <Route path="/Acting/" component={Acting} />
          <Route path="/Dance/" component={Dance} />
          <Route path="/Reel/" component={Reel} />
          <Route path="/Contact/" component={Contact} />
          <Route path="/Movie/" component={Movie} />

        </div>
      </div>
    </Router>
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

export default AppRouter;
