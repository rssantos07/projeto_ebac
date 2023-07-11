import AdicionarButton from '../Adicionar'
import {
  Card,
  Cards,
  Image,
  Modal,
  ModalContent,
  Paragrafo,
  Titulo
} from './styles'
import close from '../../assets/close.svg'
import { CardapioItem } from '../../pages/Home'
import { useState } from 'react'

type Props = {
  items: CardapioItem[]
}

interface ModalState extends CardapioItem {
  isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
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

  const handleModalOpen = (item: CardapioItem) => {
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

  return (
    <>
      <Cards>
        {items.map((media) => (
          <Card key={media.id}>
            <Image src={media.foto} alt="" />
            <Titulo>{media.nome}</Titulo>
            <Paragrafo>{getDescricao(media.descricao)}</Paragrafo>
            <AdicionarButton
              onClick={() => handleModalOpen(media)}
              texto={`Mais detalhes`}
            />
          </Card>
        ))}
      </Cards>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
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
                <AdicionarButton
                  onClick={() => handleModalOpen(modal)}
                  texto={`Adicionar ao carrinho - ${formataPreco(modal.preco)}`}
                />
              </div>
            </div>
          </header>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default PerfilCard
