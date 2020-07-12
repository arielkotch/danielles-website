import React from 'react'
import { Item, Label } from 'semantic-ui-react'
import { styles } from './styles.js'
function Movie(props) {
    return (
        <Item.Group divided>
            <Item style={styles.movie}>
                <Item.Image src={props.image} />
                <Item.Content>
                    <Item.Header as="a" style={styles.title}>
                        {props.header}
                    </Item.Header>
                    <Item.Meta>
                        <span className="cinema" style={styles.meta}>
                            {props.subHeader}
                        </span>
                    </Item.Meta>
                    <Item.Description style={styles.description}>
                        {props.movieDescription}
                    </Item.Description>
                    <Item.Extra>
                        <Label style={styles.label} as="a">
                            {props.label}
                        </Label>
                        <Label
                            style={styles.label}
                            as="a"
                            icon="globe"
                            content="Additional Languages"
                        />
                    </Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}

export default Movie
