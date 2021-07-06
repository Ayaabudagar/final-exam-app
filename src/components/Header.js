import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap/'

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">The Cocktail</Navbar.Brand>

                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="favorite">FavoriteDrinks</Nav.Link>

                        </Nav>

                    </Container>
                </Navbar>

            </div>
        )
    }
}

export default Header
