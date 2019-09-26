import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';


const Search = props => {
    return (
        <Form inline style={styles.form}>
            <FormControl style={styles.search} type="text" placeholder="Enter Name or ID" className="mr-sm-2"
                onChange={props.onSearchChange}
            />
           {!props.disableSearchButton && <Button onClick={props.onSearchClick} style={styles.srchButton} variant="outline-success">Search</Button>}
        </Form>
    )
}

export default Search;

const styles = {
    search: {
        width: '55%'
    },
    srchButton: {
        marginTop: '2%',
        alignText: 'center',
        backgroundColor: '#FF0000',
        color: 'white',
        border: '1.5px solid black'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '7%',
        marginBottom: '3%'
    }
}