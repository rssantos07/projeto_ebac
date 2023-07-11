import { Link } from 'react-router-dom'
import fundo from '../../assets/fundo.svg'
import logo from '../../assets/logo.svg'
import { Content, Paragrafo, Image, Apresentacao } from './styles'
import { Restaurante } from '../../pages/Home'

type Props = {
  restaurante: Restaurante
}

const HeaderPerfil = ({ restaurante }: Props) => {
  return (
    <>
      <Content style={{ backgroundImage: `url(${fundo})` }}>
        <Paragrafo>Restaurantes</Paragrafo>
        <Link to="/">
          <Image src={logo} alt=""></Image>
        </Link>

        <Paragrafo>0 produto(s) no carrinho</Paragrafo>
      </Content>
      <Apresentacao
        style={{
          backgroundImage: `url(${restaurante.capa})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <h3>{restaurante.tipo}</h3>
          <p>{restaurante.titulo}</p>
        </div>
      </Apresentacao>
    </>
  )
}

export default HeaderPerfil
