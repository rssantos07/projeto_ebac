import { Link } from 'react-router-dom'

import fundo from '../../assets/fundo.svg'
import apresentacao from '../../assets/apresentacao.png'
import logo from '../../assets/logo.svg'
import { Content, Paragrafo, Image, Apresentacao } from './styles'

const HeaderPerfil = () => {
  return (
    <>
      <Content style={{ backgroundImage: `url(${fundo})` }}>
        <Paragrafo>Restaurantes</Paragrafo>
        <Link to="/">
          <Image src={logo} alt=""></Image>
        </Link>

        <Paragrafo>0 produto(s) no carrinho</Paragrafo>
      </Content>
      <Apresentacao src={apresentacao} alt="La Dolce Vita Trattoria" />
    </>
  )
}

export default HeaderPerfil
