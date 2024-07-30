import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import React, { useEffect, useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'
import { FcShop } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { getProductCategory } from '../../products'

function NavBar () {
  const [categories, setCategory] = useState([])

  useEffect(() => {
    getProductCategory().then(res => setCategory(res))
  }, [])

  return (
    <>
      {['sm'].map(expand => (
        <Navbar
          key={expand}
          expand={expand}
          className='mb-3 navbar'
          data-bs-theme='dark'
        >
          <Container>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href='#'>
              <Link to='CreaTuLanding-Linares/'>
                <FcShop /> Willy's Coffee Shop
              </Link>
            </Navbar.Brand>

            <Navbar.Offcanvas
              fluid
              data-bs-theme='dark'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Logo
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  {categories.map(category => (
                    <Link
                      key={category}
                      to={`CreaTuLanding-Linares/category/${category}`}
                      className='nav-link text-white'
                    >
                      {category.replace('_', ' ').toUpperCase()}
                    </Link>
                  ))}
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
