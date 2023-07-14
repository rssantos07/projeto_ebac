import Cardapio from '../../Components/Cardapio'
import Header from '../../Components/Header'

import { useGetFeaturedRestaranteQuery } from '../../services/api'

export interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const { data: restaurante } = useGetFeaturedRestaranteQuery()
  if (restaurante) {
    return (
      <>
        <Header />
        <Cardapio dishs={restaurante} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default Home
