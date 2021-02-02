/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  Modal
} from 'semantic-ui-react';
import 'react-multi-carousel/lib/styles.css';
import ReactPlayer from 'react-player'

function MovieModal({
  isOpen, onCloseModal, url
}) {
  return (
    <Modal
      onClose={onCloseModal}
      open={isOpen}
      size="fullscreen"

    >
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
      />
     
    </Modal>

  );
}

export default MovieModal;
