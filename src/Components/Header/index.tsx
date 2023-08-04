import * as S from './styles'
import imageBackground from '../../assets/fundo.svg'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <S.Container style={{ backgroundImage: `url(${imageBackground})` }}>
      <S.Image src={logo} alt="EFOOD" />
      <S.Text>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </S.Text>
    </S.Container>
  )
}

export default Header
