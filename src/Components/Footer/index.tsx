import logo from '../../assets/logo.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import { Container, Image, Paragrafo, Sociais } from './styles'

const Footer = () => {
  return (
    <Container>
      <Image src={logo} alt=""></Image>
      <div>
        <Sociais src={instagram}></Sociais>
        <Sociais src={facebook}></Sociais>
        <Sociais src={twitter}></Sociais>
      </div>
      <Paragrafo>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br /> dos produtos é toda do estabelecimento contratado.
      </Paragrafo>
    </Container>
  )
}

export default Footer
