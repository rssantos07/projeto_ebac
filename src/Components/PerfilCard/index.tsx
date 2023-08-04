import ToAddButton from '../ToAdd'
import * as S from './styles'
import close from '../../assets/close.svg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'

type Props = {
  items: MenuItem[]
}

interface ModalState extends MenuItem {
  isVisible: boolean
}

const PerfilCard = ({ items }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 130) {
      return descricao.slice(0, 127) + '...'
    }
    return descricao
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    foto: '',
    preco: 0,
    id: 0,
    nome: ' ',
    descricao: '',
    porcao: ''
  })

  const handleModalOpen = (item: MenuItem) => {
    setModal({
      isVisible: true,
      foto: item.foto,
      preco: item.preco,
      id: item.id,
      nome: item.nome,
      descricao: item.descricao,
      porcao: item.porcao
    })
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      foto: '',
      preco: 0,
      id: 0,
      nome: '',
      descricao: '',
      porcao: ''
    })
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add([modal]))
    dispatch(open())
  }
  return (
    <>
      <S.Cards>
        {items.map((media) => (
          <S.Card key={media.id}>
            <S.Image src={media.foto} alt="" />
            <S.Title>{media.nome}</S.Title>
            <S.Text>{getDescricao(media.descricao)}</S.Text>
            <ToAddButton
              type="button"
              onClick={() => handleModalOpen(media)}
              title={`Mais detalhes`}
            >
              Mais detalhes
            </ToAddButton>
          </S.Card>
        ))}
      </S.Cards>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <div>
            <img
              className="fechar"
              src={close}
              alt=""
              onClick={() => {
                closeModal()
              }}
            ></img>
          </div>

          <header>
            <div>
              <img src={modal.foto} alt="" />
            </div>

            <div className="detalhes">
              <h4>{modal.nome}</h4>
              <p>{modal.descricao}</p>
              <p>Serve: {modal.porcao}</p>
              <div className="button">
                <ToAddButton
                  type="button"
                  onClick={() => {
                    addToCart()
                    closeModal()
                  }}
                >{`Adicionar ao carrinho - ${formataPreco(
                  modal.preco
                )}`}</ToAddButton>
              </div>
            </div>
          </header>
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default PerfilCard
