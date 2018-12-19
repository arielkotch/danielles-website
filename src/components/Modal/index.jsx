import React, { Component } from 'react';
import {Container,Menu,Header} from 'semantic-ui-react'
import {Card,Image,Icon,Label,Modal,Button} from 'semantic-ui-react'
import ReactPlayer from 'react-player'

class ModalSUI extends Component {

  onActionClick=()=>{
    alert('action click');
  }
  render() {

    return (
      <React.Fragment>
        <Modal
           open={this.props.isOpen}
           onClose={this.props.onCloseModal}
         >
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
              <ReactPlayer playsinline  url={"https://www.youtube.com/watch?v=_5Ys9NZQSzA"} width={'320px'} height={'220px'} />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ModalSUI;
