import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Img1 from '../../images/newsPoke.jpeg'
import Img2 from '../../images/pokeSwitch.jpeg'
import Img3 from '../../images/pokemonMasters.jpeg'
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
                            <h4>Possible Trouble?</h4>
                            <p>The Pokemon card artist 'taking the border off the artwork'</p>
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
                            <h4>Nintendo Switch?!?!</h4>
                            <p>Join the fight on Nintendo Switch to capture all Pokemon</p>
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
                            <h4>Pokemon Masters</h4>
                            <p>Pokemon Masters' brings old trainers together in one mobile game</p>
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
        marginBottom: '3%',
        
    },
    subTitle: {
        border: '1px solid white',
        backgroundColor: 'rgba(0,0,0,.8)',
        fontSize: '.75em',
        padding: '5px'
    },
    
}
