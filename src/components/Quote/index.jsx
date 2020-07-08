import React from "react";
import { Container, Grid } from "semantic-ui-react";

export default function Quote({ quote, source }) {
  return (
    <Grid>
      <Container>
        <div class="row sixteen wide">
          <div class="ui four wide column"></div>
          <div class="ui eight wide column">
            <div class="ui large header center aligned">{quote}</div>
            <div class="ui medium header right aligned">- {source}</div>
          </div>
          <div class="ui four wide column"></div>
        </div>
      </Container>
    </Grid>
  );
}
