import React from 'react'
import { Container, Col } from 'react-bootstrap';


export default function Pokemon(props) {
    let { disableAdd } = props;
    let { name, sprites, id, types } = props.pokemon;
    let { front_default } = sprites;


    // get the array of type names
    let typeNames = types.map((item) => {
        let { type } = item;
        return type.name;
    })
    //console.log(typeNames);

    function onAddToCollection() {
        alert("Added to Collection!!")
        let currentCollection = JSON.parse(localStorage.getItem("collection"));
        currentCollection = [...currentCollection, props.pokemon];
        let currentCollectionString = JSON.stringify(currentCollection);
        localStorage.setItem("collection", currentCollectionString);
    }

    return (
        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <div style={styles.container}>
                <Container style={styles.pokeInfo}>

                    <div>
                        <p>{id}</p>
                    </div>
                    <div>
                        <p>{name} </p>
                    </div>
                    <div>
                        <img src={front_default} />
                    </div>
                    {typeNames.map((name) => {
                        return <div key={name} style={styles.types}> {name}</div>
                    })}
                    <div >
                        {!disableAdd && <button style={styles.addColl} onClick={onAddToCollection}>Add to Collection</button>}
                    </div>

                </Container>
            </div>
        </Col>


    )
}

let styles = {
    container: {
        border: '2px solid black',
        display: "flex",
        flexDirection: "column",
        marginBottom: '2%',
        marginTop: '2%',
        //justifyContent: 'space-between',
        backgroundColor: 'white',
        //justifyContent: 'center',

    },
    pokeInfo: {
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    types: {
        display: 'inline'
    },
    addColl: {
        marginTop: '2%',
        marginBottom: '2%',
        backgroundColor: '#FF0000',
        color: 'white',
        border: '1.5px solid black'
    }

}
