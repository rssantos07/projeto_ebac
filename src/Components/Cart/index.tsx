import { useDispatch, useSelector } from 'react-redux'
import pizza from '../../assets/pizza.png'
import { RootReducer } from '../../store'
import AdicionarButton from '../Adicionar'
import { CartContainer, CartItem, Overlay, Price, SideBar } from './styles'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../PerfilCard'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
        <SideBar>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt="" />
                <div>
                  <h3>{item.nome}</h3>
                  <p>Preço {formataPreco(item.preco)}</p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  type="button"
                ></button>
              </CartItem>
            ))}
          </ul>
          <Price>
            <p>Valor total</p>
            <span>{formataPreco(getTotalPrice())}</span>
          </Price>
          <AdicionarButton texto="Continuar com a entrega" />
        </SideBar>
      </CartContainer>
    </>
  )
}

export default Cart
