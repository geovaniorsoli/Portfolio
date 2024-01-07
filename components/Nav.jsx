import { Navbar, Nav, Container } from 'react-bootstrap'
import style from '../styles/nav.module.css'
export default function Navbars() {

  return (
    <>
  <Navbar collapseOnSelect expand="lg" className={style.navbackground}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={style.navbarButtonMobile}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <a className={style.link} href="#home">Home</a>
            <a className={style.link} href="#sobre">Sobre</a>
            <a className={style.link} href="#projeto">Projetos</a>
            <a className={style.link} href="#contato">Contatos</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
