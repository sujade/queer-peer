import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  NavbarCollapse,
  NavbarToggle,
  NavDropdown,
  NavLink
} from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <NavbarToggle aria-controls='basic-navbar-nav' />
        <NavbarCollapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink className={'text-black'} href='/'>
              Home
            </NavLink>
            <NavLink className={'text-black'} href='about'>
              About
            </NavLink>
            <NavLink className={'text-black'} href='partners'>
              Our Partners
            </NavLink>
            <NavLink className={'text-black'} href='volunteering'>
              Volunteering
            </NavLink>
            <NavLink className={'text-black'} href='donate'>
              Donate
            </NavLink>
            <NavDropdown
              className={'text-black'}
              title='Language'
              id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>English</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.1'>Deutsch</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.1'>Français</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.1'>Español</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.1'>Italiano</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.1'>Türkçe</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.1'>
                اَلْعَرَبِيَّةُ
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
