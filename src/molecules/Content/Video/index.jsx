/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import {
  Grid,Segment
} from 'semantic-ui-react';
import { isEqual } from 'lodash'
import { TextCol, VideoCol } from '../Columns/index'
import { styles } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class TextBox extends Component {
  /*

    imageUrl: ""
    inverted
    content:[{
      header:''
      paragraph:''
    }]
  */

    onReady =(e,c) => {
      console.log(e,c)
      console.log('ready to play')
    }

    render() {
      const {
        inverted,videoUrl, content,floated 
      } = this.props;
      return (
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
                      width={6}
                    />

                    <VideoCol 
                      videoUrl={videoUrl}
                      floated={floated}
                      width={8}
                      customStyles={{
                        fontSize: '4em!important',
                      }}
                      onReady={this.onReady}
                    />
                  </>
                ) : (
                  <>
                    <VideoCol 
                      videoUrl={videoUrl}
                      floated={floated}
                      width={8}
                      customStyles={{
                        fontSize: '4emimportant',
                      }}
                      onReady={this.onReady}
                    />
                    <TextCol 
                      content={content}
                      inverted={inverted}
                      styles={styles}           
                      width={6}

                    />
                  </>
                )
              }
              
            </Grid.Row>
          </Grid>
        </Segment>
      
      );
    }
}

TextBox.defaultProps = {
  videoUrl: 'https://image.freepik.com/free-vector/oops-error-404-page-found-go-back-banner-system-error-broken-page-bitten-donut-food-page-with-design-elements-website-problem-report-pink_249405-3.jpg',
  content: [{
    header: 'Nothing to See Here!',
    paragraph: 'Error Not Found'
  }],
  floated: 'right'
}

export default TextBox;
