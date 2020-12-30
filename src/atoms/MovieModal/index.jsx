import React from 'react';
import { Modal } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

function MovieModal({ isOpen, onCloseModal, movieUrl }) {
  return (
    <Modal
      open={isOpen}
      onClose={onCloseModal}
    >
      <ReactPlayer
        playsinline
        playing
        url={movieUrl}
        width="100%"
        height="35em"
      />
    </Modal>
  );
}

export default MovieModal;
