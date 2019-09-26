import React, { useEffect, useState } from 'react'
import Pokemon from '../Pokemon';
import { Container, Col, Row } from 'react-bootstrap';
import Search from '../Search'
import Card1 from '../cards/Card1'
import Card2 from '../cards/Card2'

export default function Collection(props) {

    let [collection, setCollection] = useState([]);
    let [search, setSearch] = useState("")

    useEffect(() => {
        let collection = JSON.parse(localStorage.getItem("collection"));
        setCollection(collection);
    }, [])

    function filterData() {
        //check if search is empty if so display all data if not filter based on input
        if (search === "") {
            return collection
        }
        else {
            return collection.filter((currentObj) => {
                // console.log(currentObj);
                if (currentObj.name.includes(search) || String(currentObj.id).includes(search))  {
                    return true;
                }
                else {
                    return false;
                }
            })

        }
    }

    return (
        <div>

            <div style={styles.backDrop}>
                <Container>
                    <div style={styles.topBar}><h1>Collection</h1></div>
                </Container>
                <Container>
                    <div>
                        <Search

                            // searchPoke={(e) => {
                            //     e.preventDefault()
                            //     let key = search.value;
                            //     setSearch(key)
                            // }}

                            onSearchChange={(e) => {
                                let newVal = e.target.value;
                                setSearch(newVal);
                                
                            }}

                            disableSearchButton

                        />
                    </div>
                    <div className="pokemonList">
                        {filterData().map((pokemon) => {
                            return <Pokemon key={pokemon.id} pokemon={pokemon} disableAdd={true} />
                        })}
                    </div>
                </Container>
                <Container >
                    <div style={styles.cards}>
                        <Row>
                            <Col xs={12} sm={12} lg={6} style={styles.cards}>
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


const styles = {
    topBar: {
        padding: "10px",

        display: "flex",
        //border: "1px solid black",
        marginTop: "5%",
        justifyContent: 'center',
        color: 'white'
    },
    backDrop: {
        backgroundColor: '#1C3144',
        marginLeft: '20%',
        marginRight: '20%',
        //marginTop: '2%'

    },
    cards: {
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: '3%',
        marginTop: '5%'
    }


}
