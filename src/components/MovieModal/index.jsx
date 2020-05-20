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
          <ReactPlayer 
              playsinline 
              playing  
              url={this.props.movieUrl} 
              width={'100%'} 
              height={'35em'} 
            />
        </Modal>
      </React.Fragment>
    );
  }
}

export default ModalSUI;
