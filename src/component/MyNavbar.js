import React from 'react'
// import React,{component} from 'react'
import{Col,Container, Nav, NavDropdown, Navbar, Row} from 'react-bootstrap'

function MyNavbar(){
        return(
           <Container>
            <Row>
              <Col>
              <Navbar fixed='top' variant='dark' bg="dark" expand="md">
                <Container>
                <Navbar.Brand href="#">
                  <img src='./logo192.png' height={30} width={30} className='align-top'/>&nbsp; BLOG WEB
                  </Navbar.Brand> 
                  <Navbar.Toggle aria-controls="my-nav" />
                  <Navbar.Collapse id="my-nav">
                  <Nav className='me-auto fw-bold'>
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#">About</Nav.Link>
                  <Nav.Link href="#">Contect Us</Nav.Link>
                  <NavDropdown title="Gallary" id='my-nav'>
                    <NavDropdown.Item href="#">Gallary1</NavDropdown.Item>
                    <NavDropdown.Item href="#">Gallary2</NavDropdown.Item>
                    <NavDropdown.Item href="#">Gallary3</NavDropdown.Item>
                    <NavDropdown.Item href="#">Gallary4</NavDropdown.Item>
                  </NavDropdown>
                  </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              </Col>
            </Row>
           </Container>
        )
      }
export default MyNavbar;