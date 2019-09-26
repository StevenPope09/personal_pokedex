import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Img1 from '../../images/customControllers.jpeg'
import Img2 from '../../images/legendary.jpeg'
import Img3 from '../../images/heroic.jpeg'
import Image from 'react-bootstrap/Image'
//import { StylesContext } from '@material-ui/styles/StylesProvider';

class CarouselBar1 extends Component {
    render() {
        return (
            <div style={styles.container}>
                <Carousel>
                    <Carousel.Item>
                        <Image
                            style={styles.images}
                            className="d-block w-100"
                            src={Img1}
                            alt="First slide"
                            
                        />
                        <Carousel.Caption style={styles.subTitle}>
                            <h4>Custom Controllers</h4>
                            <p>Custom Pokemon controllers are now available!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            style={styles.images}
                            className="d-block w-100"
                            src={Img2}
                            alt="Third slide"
                        />

                        <Carousel.Caption style={styles.subTitle}>
                            <h4>So Legendary!</h4>
                            <p>Legendary Pokemon of the world.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            style={styles.images}
                            className="d-block w-100"
                            src={Img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption style={styles.subTitle}>
                            <h4>The World Needs a Hero</h4>
                            <p>Not all heroes wear capes. In fact some are in the shape of a Dragonite!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default CarouselBar1

const styles = {
    container: {
        marginBottom: '8%',
        
    },
    subTitle: {
        border: '1px solid white',
        backgroundColor: 'rgba(0,0,0,.8)',
        fontSize: '.75em',
        padding: '5px'
    },
    
}
