import { Link } from 'react-router-dom'
import fundo from '../../assets/fundo.svg'
import logo from '../../assets/logo.svg'
import { Content, Paragrafo, Image, Apresentacao, CartButton } from './styles'
import { Restaurante } from '../../pages/Home'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

type Props = {
  restaurante: Restaurante
}

const HeaderPerfil = ({ restaurante }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <Content style={{ backgroundImage: `url(${fundo})` }}>
        <Paragrafo>Restaurantes</Paragrafo>
        <Link to="/">
          <Image src={logo} alt=""></Image>
        </Link>

        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
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
