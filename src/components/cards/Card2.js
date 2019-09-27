import React, { Component } from 'react'
import { Card} from 'react-bootstrap';
import AdPic from '../../images/adPic.jpeg'

export default class Card2 extends Component {
    render() {
        return (
            <div>
                <Card style={styles.cardBody}>
                    <Card.Img variant="top" src={AdPic} />
                    <Card.Body>
                        <Card.Title>Remembering Pokemon Classic</Card.Title>
                        <Card.Text>
                        Keep an eye out for all things classic Pokemon on this amazing app!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const styles = {
    cardBody: {
        //width: '22rem',
        //height: '20rem'
    }
}
