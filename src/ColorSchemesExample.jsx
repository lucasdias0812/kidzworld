import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="/">
          <img alt='navbar-center' src='/src/assets/MicrosoftTeams-image (1).png' height="120" className="d-inline-block align-top"/>{''}
          </Navbar.Brand>
          <Navbar.Brand href="/">Kidz World</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Entrar</Nav.Link>
            <Nav.Link href="/CadastroP">Cadastro Produto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;