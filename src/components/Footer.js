import React from 'react'
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <Container>
                <h4>Steven Pope Design & Development ©2019 All Rights reserved.  </h4>
                <p>Email: <a style={styles.anchor} href="mailto: sjpope@student.fullsail.edu">Sjpope@student.fullsail.edu</a></p>
                <p>Phone Number: (210) 216-4119</p>
                <p>Address: 1234 Somewhere Street, Some Place NA 12345</p>
            </Container>

        </footer>
    )
}
export default Footer

const styles = {
    footer: {
        border: '1px solid black',
        backgroundColor: '#203FED',
        color: 'white',
        marginTop: '3%',
        paddingTop: '15px'
    },
    anchor: {
        color: 'white'
    }
}