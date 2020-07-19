import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
class Gallery extends Component {
    state = {
        photos: this.props.photos,
    }

    groupByThree = ([a, b, c, ...rest]) => {
        if (rest.length === 0) return [[a, b, c].filter((x) => x !== undefined)]
        return [[a, b, c]].concat(this.groupByThree(rest))
    }

    render() {
        return (
            <React.Fragment>
                <Grid>
                    {this.groupByThree(this.state.photos).map((sub) => (
                        <Grid.Row columns={3}>
                            {sub.map(({ src }) => (
                                <Grid.Column>
                                    <Image src={src} />
                                </Grid.Column>
                            ))}
                        </Grid.Row>
                    ))}
                </Grid>
            </React.Fragment>
        )
    }
}
export default Gallery
