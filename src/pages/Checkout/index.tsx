import ToAddButton from '../../Components/ToAdd'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import Card from '../../Components/Card'
import * as S from './styles'
import { usePurchaseMutation } from '../../services/checkout'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { getTotalPrice } from '../../utils'
import { formataPreco } from '../../utils'
import { checkoutClose, clear, close } from '../../store/reducers/cart'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const [showAddressForm, setShowAddressForm] = useState(true)
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { checkout, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const closePayment = () => {
    dispatch(checkoutClose())
  }

  const concluided = () => {
    closePayment()
    dispatch(close())
    navigate('/')
    window.location.reload()
  }

  const totalPrice = getTotalPrice(items)

  const inputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      adress: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      ownerCard: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(3, 'preencher com nome da cidade')
        .required('Este campo é obrigatório'),
      city: Yup.string()
        .min(3, 'preencher com nome da cidade')
        .required('Este campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'preencher cep')
        .required('Este campo é obrigatório'),
      number: Yup.string().required('Este campo é obrigatório'),
      complement: Yup.string(),

      ownerCard: Yup.string().when((values, schema) =>
        showPaymentForm ? schema.required('Este campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        showPaymentForm ? schema.required('Este campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        showPaymentForm ? schema.required('Este campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        showPaymentForm ? schema.required('Este campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        showPaymentForm ? schema.required('Este campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.adress,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.ownerCard,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
      setShowAddressForm(true)
      setShowPaymentForm(false)
    }
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])
  console.log(`o sucesso é ${isSuccess}`)

  return (
    <S.Container className={checkout ? 'checkout-open' : ''}>
      {isSuccess && data ? (
        <Card title={`Pedido realizado - ${data.orderId}`}>
          <div>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p className="margin-top">
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p className="margin-top">
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p className="margin-top">
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <div className="margin-top">
              <ToAddButton type="button" title="Concluir" onClick={concluided}>
                Concluir
              </ToAddButton>
            </div>
          </div>
        </Card>
      ) : (
        <div>
          <form onSubmit={form.handleSubmit}>
            <div>
              {showAddressForm && (
                <Card title="Entrega">
                  <>
                    <S.Group>
                      <S.InputGroup>
                        <label htmlFor="fullName">Quem irá receber</label>
                        <input
                          id="fullName"
                          type="text"
                          name="fullName"
                          value={form.values.fullName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={inputError('fullName') ? 'error' : ''}
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="adress">Endereço</label>
                        <input
                          id="adress"
                          type="text"
                          name="adress"
                          value={form.values.adress}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={inputError('adress') ? 'error' : ''}
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="city">Cidade</label>
                        <input
                          id="city"
                          type="text"
                          name="city"
                          value={form.values.city}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={inputError('city') ? 'error' : ''}
                        />
                      </S.InputGroup>
                      <S.InputGroup inline>
                        <div>
                          <label htmlFor="zipCode">Cep</label>
                          <InputMask
                            id="zipCode"
                            type="text"
                            name="zipCode"
                            value={form.values.zipCode}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={`input ${
                              inputError('zipCode') ? 'error' : ''
                            } margin-top`}
                            mask="99999-999"
                          />
                        </div>
                        <div>
                          <label htmlFor="number">Numero</label>
                          <input
                            id="number"
                            type="text"
                            name="number"
                            value={form.values.number}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={`input ${
                              inputError('number') ? 'error' : ''
                            } margin-top`}
                          />
                        </div>
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="complement">
                          Complemento (opcional)
                        </label>
                        <input
                          id="complement"
                          type="text"
                          name="complement"
                          value={form.values.complement}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={inputError('complement') ? 'error' : ''}
                        />
                      </S.InputGroup>
                    </S.Group>
                    <ToAddButton
                      type="button"
                      onClick={() => {
                        setShowAddressForm(false)
                        setShowPaymentForm(true)
                      }}
                      title="Continuar com o pagamento"
                    >
                      Continuar com o pagamento
                    </ToAddButton>

                    <ToAddButton
                      type="button"
                      title="Voltar para o carrinho"
                      onClick={closePayment}
                    >
                      Voltar para o carrinho
                    </ToAddButton>
                  </>
                </Card>
              )}
              {showPaymentForm && (
                <Card
                  title={`Pagamento - Valor à pagar ${formataPreco(
                    totalPrice
                  )}`}
                >
                  <>
                    <S.Group>
                      <S.InputGroup>
                        <label htmlFor="ownerCard">Nome no cartão</label>
                        <input
                          id="ownerCard"
                          type="text"
                          name="ownerCard"
                          value={form.values.ownerCard}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={inputError('ownerCard') ? 'error' : ''}
                        />
                      </S.InputGroup>
                      <S.InputGroup inline>
                        <div>
                          <label className="margin-bottom" htmlFor="cardNumber">
                            Número do cartão
                          </label>
                          <InputMask
                            id="cardNumber"
                            type="text"
                            name="cardNumber"
                            style={{ width: '228px' }}
                            value={form.values.cardNumber}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={`input ${
                              inputError('cardNumber') ? 'error' : ''
                            } margin-top`}
                            mask="9999 9999 9999 9999"
                          />
                        </div>
                        <div>
                          <label htmlFor="cardCode">CVV</label>
                          <InputMask
                            id="cardCode"
                            type="text"
                            name="cardCode"
                            value={form.values.cardCode}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={`input ${
                              inputError('cardCode') ? 'error' : ''
                            } margin-top width-cvv`}
                            mask="999"
                          />
                        </div>
                      </S.InputGroup>
                      <S.InputGroup inline>
                        <div>
                          <label
                            className="margin-bottom"
                            htmlFor="expiresMonth"
                          >
                            Mês de vencimento
                          </label>
                          <InputMask
                            id="expiresMonth"
                            type="text"
                            name="expiresMonth"
                            value={form.values.expiresMonth}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={`input ${
                              inputError('expiresMonth') ? 'error' : ''
                            } margin-top`}
                            mask="99"
                          />
                        </div>
                        <div>
                          <label htmlFor="expiresYear">Ano de vencimento</label>
                          <InputMask
                            id="expiresYear"
                            type="text"
                            name="expiresYear"
                            value={form.values.expiresYear}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={`input ${
                              inputError('expiresYear') ? 'error' : ''
                            } margin-top`}
                            mask="9999"
                          />
                        </div>
                      </S.InputGroup>
                    </S.Group>

                    <ToAddButton
                      type="submit"
                      title="Finalizar o pagamento"
                      disabled={isLoading}
                      onClick={form.handleSubmit}
                    >
                      {isLoading
                        ? 'Finalizando a compra...'
                        : 'Finalizar o pagamento'}
                    </ToAddButton>
                    <ToAddButton
                      disabled={isLoading}
                      title="Voltar para edição de endereço"
                      type="button"
                      onClick={() => {
                        setShowAddressForm(true)
                        setShowPaymentForm(false)
                      }}
                    >
                      Voltar para edição de endereço
                    </ToAddButton>
                  </>
                </Card>
              )}
            </div>
          </form>
        </div>
      )}
    </S.Container>
  )
}

export default Checkout
