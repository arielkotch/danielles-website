import React, { Component } from 'react';
import {Segment,Header,Image} from 'semantic-ui-react'
import {styles} from './styles.js'
import ContactForm from '../../components/ContactForm/index'


class Contact extends Component {

  render() {

    return (
      <React.Fragment>
        <Segment
          textAlign='center'
          style={styles.segment}
          vertical
          >
          <Header
            as='h1'
            content='Contact Page'
            style={styles.header}>
          </Header>
          <ContactForm/>
        </Segment>
      </React.Fragment>
    );
  }
}

export default Contact;
