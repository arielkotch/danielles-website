/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import {
  Grid,Segment
} from 'semantic-ui-react';
import { isEqual } from 'lodash'
import Blur from '../../Dimmer/index';
import { TextCol, ImageCol } from '../Columns/index'
import { styles } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class TextBox extends Component {
  state={
    active: true
  }

  /*

    imageUrl: ""
    inverted
    content:[{
      header:''
      paragraph:''
    }]
  */

  

  getBody = ({ floated, imageUrl, content }) => {
    const Image = this.imageCol({ imageUrl,floated })
    const Text = this.textCol({ content })
    console.log(Text)
    return (
      <div> 
        <Image />
        <Text />
      </div>
     
    )
  }
    

  render() {
    const {
      inverted,imageUrl, content,floated 
    } = this.props;
    return (
      <Blur active={this.state.active}>
        <Segment inverted={inverted} style={styles.segment} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              {
                isEqual(floated,'right') ? (
                  <>
                    <TextCol 
                      content={content}
                      inverted={inverted}
                      styles={styles}
                    />
                    <ImageCol 
                      imageUrl={imageUrl}
                      floated={floated}
                      onLoad={() => this.setState({ active: false })}
                    />
                  </>
                ) : (
                  <>
                    <ImageCol 
                      imageUrl={imageUrl}
                      floated={floated}
                      onLoad={() => this.setState({ active: false })}
                    />
                    <TextCol 
                      content={content}
                      styles={styles}
                      inverted={inverted}
                    />
                  </>
                )
              }
              
            </Grid.Row>
          </Grid>
        </Segment>
      </Blur>
    );
  }
}

TextBox.defaultProps = {
  imageUrl: 'https://image.freepik.com/free-vector/oops-error-404-page-found-go-back-banner-system-error-broken-page-bitten-donut-food-page-with-design-elements-website-problem-report-pink_249405-3.jpg',
  content: [{
    header: 'Nothing to See Here!',
    paragraph: 'Error Not Found'
  }],
  floated: 'right'
}

export default TextBox;
