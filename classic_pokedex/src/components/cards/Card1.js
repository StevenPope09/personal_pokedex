import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import PokemonGo from '../../images/pokemonSwitch.jpeg'

export default class Card1 extends Component {
    
    render() {
        return (
            
            <div>
                <Card style={styles.cardBody}>
                    <div>
                        <Card.Img style={styles.pokeImg} variant="right" src={PokemonGo} />
                    </div>
                    <div>
                        <Card.Body>
                            <Card.Title>Pokemon on the Switch</Card.Title>
                            <Card.Text>
                            Experience the world of Pokemon in a different way. Be sure to get yourself a copy of Let’s Go Pikachu!
                            </Card.Text>
                            <Card.Text>
                            For sale now in stores everywhere!
                            </Card.Text>
                            <Button variant="danger" href="https://www.amazon.com/s?k=let%27s+go+pikachu&gclid=Cj0KCQjwzozsBRCNARIs
                            AEM9kBN9inKtQIiN8BlFf7ARDS2tu-fwEbDV-Z3zOGKrjmMRvXlQlYDFymoaAh-5EALw_wcB&hvadid=267910850766&hvdev=c&hvlocphy=
                            9028159&hvnetw=g&hvpos=1t1&hvqmt=e&hvrand=3302751618292292728&hvtargid=kwd-453909694962&hydadcr=26586_9479141&tag=
                            googhydr-20&ref=pd_sl_7btav0ti8r_e">Shop Now</Button>
                        </Card.Body>
                    </div>
                    
                </Card>
            </div>
        )
    }
}
const styles = {
    cardBody: {
        //width: '15rem',
        //display: 'flex',
        //flexDirection: 'column'
    }
}
