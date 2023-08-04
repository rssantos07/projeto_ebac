import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import ToAddButton from '../ToAdd'
import * as S from './styles'
import { checkoutOpen, close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'
import { getTotalPrice } from '../../utils'
import closed from '../../assets/close.svg'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    dispatch(checkoutOpen())
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.SideBar>
          {items.length > 0 ? (
            <>
              <ul>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <img src={item.foto} alt="" />
                    <div>
                      <h3>{item.nome}</h3>
                      <p>Preço {formataPreco(item.preco)}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      type="button"
                    ></button>
                  </S.CartItem>
                ))}
              </ul>
              <S.Price>
                <p>Valor total</p>
                <span>{formataPreco(getTotalPrice(items))}</span>
              </S.Price>
              <ToAddButton
                type="button"
                title="Continuar com a entrega"
                onClick={goToCheckout}
              >
                Continuar com a entrega
              </ToAddButton>
            </>
          ) : (
            <S.EmptyText>
              <img
                className="fechar"
                src={closed}
                alt="fechar"
                onClick={() => {
                  closeCart()
                }}
              ></img>

              <p>
                O carrinho está vazio, adicione pelo menos um produto para
                continuar sua compra.
              </p>
            </S.EmptyText>
          )}
        </S.SideBar>
      </S.CartContainer>
    </>
  )
}

export default Cart
