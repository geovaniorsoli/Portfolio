//components
import Nav from "../components/Nav"
import Sobre from "../components/Sobre"
import Home from "../components/Home"
import Projeto from "../components/Projetos"
import Contato from "../components/Contato"
import Footer from "../components/Footer"

export default function app() {

  return (
    <>
    <Nav />
    <Home />
    <Sobre />
    <Projeto/>
    <Contato />
    <Footer />
    </>
  )
}
