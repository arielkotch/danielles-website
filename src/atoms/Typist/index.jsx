import React from 'react';
import Typed from 'react-typed';
import PropTypes from 'prop-types';

function Typist({
  sentences, typeSpeed, backSpeed, style,
}) {
  return (
    <Typed
      strings={sentences}
      typeSpeed={typeSpeed}
      backSpeed={backSpeed}
      loop
      style={style}
    />
  );
}

Typist.defaultProps = {
  sentences: [],
  backSpeed: 40,
  typeSpeed: 50,
  style: {
    color: 'black',
    fontSize: '28px'
  }
};

Typist.propTypes = {
  sentences: PropTypes.instanceOf(Array),
  backSpeed: PropTypes.number,
  typeSpeed: PropTypes.number,
  style: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.string
  })
};

export default Typist;
