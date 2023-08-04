import logo from '../../assets/logo.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import * as S from './styles'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <S.Container>
      <Link to="/">
        <S.Image src={logo} alt=""></S.Image>
      </Link>

      <div>
        <S.Social src={instagram}></S.Social>
        <S.Social src={facebook}></S.Social>
        <S.Social src={twitter}></S.Social>
      </div>
      <S.Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br /> dos produtos é toda do estabelecimento contratado.
      </S.Text>
    </S.Container>
  )
}

export default Footer
