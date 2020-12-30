import React from 'react';
import {
  Segment, Header, Grid, Image, Form,
} from 'semantic-ui-react';
import { styles } from './styles';

const Contact = () => (
  <Segment textAlign="center" style={styles.segment} vertical>
    <Header
      as="h1"
      content="Contact Page"
      style={styles.header}
    />
    <Grid>
      <Grid.Row>
        <Grid.Column width={3} />
        <Grid.Column width={3}>
          <Image src="https://m.media-amazon.com/images/M/MV5BNGJkYjMyNjAtNWUyZC00MDBjLThjMWQtMzM4ZTNhNzE5MGRkXkEyXkFqcGdeQXVyMTYwMDg1NDc@._V1_SY1000_CR0,0,675,1000_AL_.jpg" size="small" />

        </Grid.Column>
        <Grid.Column width={6}>
          <Form fluid>
            <Form.Input
              error={{
                content: 'Please enter your first name',
                pointing: 'below',
              }}
              fluid
              label="First name"
              placeholder="First name"
              id="form-input-first-name"
            />
            <Form.Input
              error="Please enter your last name"
              fluid
              label="Last name"
              placeholder="Last name"
            />
            <Form.Checkbox
              label="I agree to the Terms and Conditions"
              error={{
                content: 'You must agree to the terms and conditions',
                pointing: 'left',
              }}
            />

          </Form>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  </Segment>
);

export default Contact;
