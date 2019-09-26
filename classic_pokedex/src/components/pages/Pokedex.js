import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Pokemon from '../Pokemon';
import Search from '../Search'
import { Container, Col, Row } from 'react-bootstrap';
import Card1 from '../cards/Card1'
import Card2 from '../cards/Card2'

export default function Pokedex(props) {
    

    let [masterPokemonArray, setMasterPokemonArray] = useState([]); // current page of pokemon
    let [search, setSearch] = useState("")
    let [next, setNext] = useState("")

    // pass in array of pokemon index objects
    // return an array of pokemon detail objects
    async function getPokemonDetails(indexObjects) {
        let pokemonArr = [];

        for (let result of indexObjects) {
            let { url } = result;
            let pokemonRes = await fetch(url);
            let pokemonJson = await pokemonRes.json();
            pokemonArr.push(pokemonJson);

        }

        return pokemonArr;
    }

    useEffect(() => {

        init();
        async function init() {

            let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
            let json = await res.json();
            let { next } = json;
            setNext(next);
            let pokemonArr = await getPokemonDetails(json.results)
            setMasterPokemonArray(pokemonArr);
        }

    }, []) // == componentDidMount

    async function onLoadMore() {
        // console.log('load more');
        let res = await fetch(next);
        let json = await res.json();
        setNext(json.next);
        let pokemonArr = await getPokemonDetails(json.results);
        let newPokemonArr = [...masterPokemonArray, ...pokemonArr];
        setMasterPokemonArray(newPokemonArr);
    }


    return (
        <div>

            <div style={styles.backDrop}>
                <Container>
                    <div style={styles.topBar}><h1>Pokedex</h1></div>
                </Container>
                <Container>
                    <div>
                    <Search
                            onSearchChange={(e) => {
                                e.preventDefault()
                                setSearch(e.target.value.toLowerCase())
                            }}
                            onSearchClick={() => {
                                console.log(search);
                                props.history.push("/pokemon/" + search);
                            }}

                        />
                    </div>
                    <div className="pokemonList">
                        {masterPokemonArray.map((pokemon) => {
                            return <Pokemon key={pokemon.id} pokemon={pokemon} disableAdd={false} />
                        })}
                    </div>
                    <div style={styles.buttonDiv}>
                        <Button style={styles.loadButton} variant="contained" onClick={onLoadMore}>Load more</Button>
                    </div>

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
    );
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
    loadMore: {

    },
    buttonDiv: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2%',
        marginTop: '2%'
    },
    loadButton: {
        marginTop: '2%',
        marginBottom: '2%',
        backgroundColor: '#FF0000',
        color: 'white'
    },
    cards: {
        //display: 'flex',
        //justifyContent: 'space-around',
        paddingBottom: '3%',
        marginBottom: '1em'
    }


}