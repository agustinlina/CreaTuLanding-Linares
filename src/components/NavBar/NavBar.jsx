import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import NavDropdown from 'react-bootstrap/NavDropdown'
import React, { useEffect, useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'
import { FcShop } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { db } from '../services/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

function NavBar () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'))

        // Obtener categorías únicas
        const categoriesData = [
          ...new Set(querySnapshot.docs.map(doc => doc.data().category))
        ]

        setCategories(categoriesData)
      } catch (error) {
        console.error('Error fetching categories: ', error)
      }
    }

    fetchCategories()
  }, [])

  const formatCategory = category => {
    return category
      .toLowerCase() // Convertir a minúsculas
      .replace(/_/g, ' ') // Reemplazar guiones bajos por espacios
      .replace(/^\w/, c => c.toUpperCase()) // Capitalizar la primera letra
  }

  return (
    <>
      {['sm'].map(expand => (
        <Navbar
          key={expand}
          expand={expand}
          className='mb-3 navbar'
          data-bs-theme='dark'
        >
          <Container className='gap-5'>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand>
              <Link to='/'>
                <img
                  className='logo'
                  src='https://res.cloudinary.com/devemnrvh/image/upload/v1724303281/Williams_s_Cofee_Shop_peaan7.svg'
                  alt='logo'
                />
              </Link>
            </Navbar.Brand>

            <Navbar.Offcanvas
              fluid
              data-bs-theme='dark'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton className='offcanvas-body_color'>
                <Offcanvas.Title className='offcanvas-logo' id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to='/'><img
                    src='https://res.cloudinary.com/devemnrvh/image/upload/v1724303281/Williams_s_Cofee_Shop_peaan7.svg'
                    alt=''
                  /></Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='offcanvas-body_color d-flex flex-sm-row flex-column gap-4'>
                <Link className='navbar-text' to='/'>
                  <Nav.Link
                    className='navbar-text'
                    href='/'
                  >
                    Inicio
                  </Nav.Link>
                </Link>
                <Nav.Link className='navbar-text justify-content-end flex-grow-1 pe-3'>
                  <NavDropdown
                    className='navbar-text navbar__dropdown--menu'
                    title='Productos'
                    id='navbarScrollingDropdown'
                  >
                    {categories.map((category, index) => (
                      <NavDropdown.Item>
                        <Link
                          key={index} // Usamos index como key ya que category es un string único
                          to={`CreaTuLanding-Linares/category/${category}`}
                          className='nav-link text-white'
                        >
                          {formatCategory(category)}
                        </Link>
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                </Nav.Link>
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
