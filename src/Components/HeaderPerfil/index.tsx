import { Link } from 'react-router-dom'
import whiteBackground from '../../assets/fundo.svg'
import logo from '../../assets/logo.svg'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import Loader from '../Loaders'

type Props = {
  restaurante: Restaurante
  isLoading: boolean
}

const HeaderPerfil = ({ restaurante, isLoading }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <S.Content style={{ backgroundImage: `url(${whiteBackground})` }}>
        <S.Text>Restaurantes</S.Text>
        <Link to="/">
          <S.Image src={logo} alt=""></S.Image>
        </Link>

        <S.CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </S.CartButton>
      </S.Content>
      <S.Banner
        style={{
          backgroundImage: `url(${restaurante.capa})`
        }}
      >
        <div className="container">
          <h3>{restaurante.tipo}</h3>
          <p>{restaurante.titulo}</p>
        </div>
      </S.Banner>
    </>
  )
}

export default HeaderPerfil
