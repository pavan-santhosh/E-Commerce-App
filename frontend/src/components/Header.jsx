import React from 'react'
import {Badge, Navbar, Nav, Container} from 'react-bootstrap';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';




const Header = () => {
  const {cartItems} = useSelector((state) => state.cart);
  return (
    <header>
        <Navbar bg = "dark" variant = "dark" expand = "md" collapseOnSelect>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand href = "/">ShopKart</Navbar.Brand>
              </LinkContainer>
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
            <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className='ms-auto'>
                  <LinkContainer to = '/cart'>
                    <Nav.Link href = "/cart"><FaShoppingCart/>Cart{
                      cartItems.length>0&&(
                      <Badge fill bg = 'success' style = {{marginLeft: '5px'}}>
                        {cartItems.reduce((a,c)=>  (Number(a)+ Number(c.qty)),0)}
                      </Badge>)
                    }
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to = '/login'>
                    <Nav.Link href = "/cart"><FaUser/>SignIn</Nav.Link>
                  </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header

/*import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <FaShoppingCart /> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link href='/login'>
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;*/

/*import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <FaShoppingCart /> Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                      {cartItems.reduce((a, c) => (a + c.qty), 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link href='/login'>
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;*/