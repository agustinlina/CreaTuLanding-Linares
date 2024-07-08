import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'
import { FcShop } from "react-icons/fc";
function NavBar () {
  return (
    <>
      {['sm'].map(expand => (
        <Navbar
          key={expand}
          expand={expand}
          className='mb-3 navbar'
          data-bs-theme='dark'
        >
          <Container >
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href='#'><FcShop/> Willy's Store</Navbar.Brand>
            
            <Navbar.Offcanvas fluid data-bs-theme='dark'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Logo
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body > 
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <Nav.Link href='#action1' className='text-light'>Inicio</Nav.Link>
                  <Nav.Link href='#action2' className='text-light'>Nosotros</Nav.Link>
                  <NavDropdown
                    title='Productos'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href='#action3'>
                      Productos
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action4'>
                      Productos
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='#action5'>
                      Productos
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className='d-flex'>
                  <Form.Control
                    type='search'
                    placeholder='Search'
                    className='me-2'
                    aria-label='Search'
                  />

                  <Button className='buscar'>Buscar</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <CartWidget />
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default NavBar
