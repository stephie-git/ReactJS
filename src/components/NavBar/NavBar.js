import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from'react-bootstrap'



export default function NavBar()  {
    return (
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Contacto</Nav.Link>
                    <Nav.Link href="#link">¿Donde estamos?</Nav.Link>
                    <NavDropdown title="Nuetro catalogo" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Niños</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Novelas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Usados</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
    
}
