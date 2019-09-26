import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Card1 from '../cards/Card1'
import Card2 from '../cards/Card2'
import Caruosel1 from '../carousel/Carousel1'
import Caruosel2 from '../carousel/Carousel2'


export default class Home extends Component {
    render() {
        return (
            <div>
                <div style={styles.backDrop}>
                <Container>
                    <div style={styles.topBar}><h1>Welcome to the Personal Pokedex!</h1></div>
                </Container>
                <Container>
                    <h2 style={styles.topBar}>Latest News</h2>
                    <Row style={styles.news}>
                        <Col xs={12} lg={6}>
                            <Caruosel1 />
                        </Col>
                        <Col xs={12} lg={6}>
                            <Caruosel2 />
                        </Col>
                        
                    </Row>
                    
                </Container>
                <Container >
                    <div style={styles.cards}>
                        <Row>
                            <Col xs={12} sm={12}  lg={6} style={styles.cards}>
                                <Card1 />
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} style={styles.cards}>
                                <Card2 />
                            </Col>
                        </Row>


                    </div>
                </Container>
                </div>
            </div>
        )
    }
}


const styles = {
    topBar: {
        padding: "10px",

        display: "flex",
        //border: "1px solid black",
        marginTop: "10px",
        justifyContent: 'center',
        color: 'white'
    },
    backDrop: {
        backgroundColor: '#1C3144',
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '2%'

    },
    cards: {
        //display: 'flex',
        //justifyContent: 'space-around',
        paddingBottom: '3%',
        marginBottom: '1em'
    },
    news: {
        marginBottom: '75px'
    }


}