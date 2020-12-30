import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { styles } from './styles'

function Quote({ quote, source }) {
  return (
    <Grid>
      <Container>
        <div className="row sixteen wide">
          <div className="ui four wide column" />
          <div className="ui eight wide column">
            <div style={styles.header} className="ui large header center aligned">
              {quote}
            </div>
            <div style={styles.source} className="ui medium header right aligned">
              -
              {source}
            </div>
          </div>
          <div className="ui four wide column" />
        </div>
      </Container>
    </Grid>
  );
}

Quote.defaultProps = {
  quote: '',
  source: ''
};

Quote.propTypes = {
  quote: PropTypes.string,
  source: PropTypes.string,
};

export default Quote;
