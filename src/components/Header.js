import React from 'react'
import Logo from '../images/logo.png'
import { NavLink, Link } from 'react-router-dom'
//import { makeStyles } from '@material-ui/core/styles';
import { Navbar, Nav, Image } from 'react-bootstrap';


//You can use appBar here from Material UI
//Remove extra spacing from header
const Header = props => {
    //const classes = useStyles();
    return (

        <Navbar style={styles.navBar} expand="lg">
            <div>
                <Link to="/"><Image style={styles.logo} src={Logo} fluid /></Link> 
            </div>

            <div style={styles.title}>
                <Navbar.Brand  style={styles.title}>Personal Pokedex</Navbar.Brand>
            </div>

            <div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    {/* <Container style={styles.linkCon}> */}
                    <Nav className="mr-auto">
                        <div style={styles.linkDiv}>
                            <Link style={styles.links} to="pokedex">Pokedex</Link>
                            <Link style={styles.links} to="collection">Collections</Link>
                        </div>
                    </Nav>
                    
                </Navbar.Collapse>
            </div>

        </Navbar >

    )
}
export default Header

let styles = {
    logo: {
        height: '100px',
        width: '100px',
        //marginRight: '3%'
    },
    navBar: {
        backgroundColor: '#203FED',
        color: 'white',
        width: '100%',
        display: 'flex',
        //flexFlow: 'row wrap',
        justifyContent: 'space-between'


    },
    links: {

        color: 'white',
        fontSize: '18px',
        //alignContent: 'flex-end',

    },
    title: {
        color: 'white',
        fontSize: '1.55em',
        //border: '1px solid white'
        //marginLeft: '35%'
        //justifyContent: 'center'

    },
    linkDiv: {
        display: 'flex',
        flexDirection: 'column',
        //float: 'right',
        //border: '1px solid red',
        //marginLeft: '10%'

    },
    


}