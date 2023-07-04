import { Fundo, Image, Paragrafo } from './styles'
import imagemFundo from '../../assets/fundo.svg'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <Fundo style={{ backgroundImage: `url(${imagemFundo})` }}>
      <Image src={logo} alt="EFOOD" />
      <Paragrafo>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </Paragrafo>
    </Fundo>
  )
}

export default Header
