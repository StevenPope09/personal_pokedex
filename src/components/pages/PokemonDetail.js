import React, { useState, useEffect } from 'react';
//import Button from '@material-ui/core/Button';
import Pokemon from '../Pokemon';
import { Container } from 'react-bootstrap';

export default function PokemonDetail(props) {

    let [pokemon, setPokemon] = useState({});
    let [isError, setIsError] = useState(false);

    useEffect(() => {

        init();
        async function init() {
            let idOrName = props.match.params.idOrName;
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
            if (!res.ok) {
                // console.log('something wrong');
                setIsError(true);
                return;
            }

            let json = await res.json();
            // console.log(json);
            setPokemon(json);
        }

    })

    if (isError) {
        return (
            <div style={styles.backDrop}>
                <Container>
                    <div style={styles.error}>
                        <p>Error getting data.</p>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div style={styles.backDrop}>
            <Container>

                <div style={styles.searchRes}>
                    {Object.entries(pokemon).length !== 0 && <Pokemon
                        pokemon={pokemon}
                        disableAdd={false}

                    />}
                </div>

            </Container>

        </div>

    );
}

const styles = {
    searchRes: {
        display: 'flex',
        justifyContent: 'center',
    },
    backDrop: {
        backgroundColor: '#1C3144',
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '2%',
        padding: '2%'

    },
    error: {
        color: 'white',
        border: '2px solid black',
        backgroundColor: '#FF0000',
        display: 'flex',
        justifyContent: 'center',
        padding: '1%',
        fontSize: '20px'
    }
}