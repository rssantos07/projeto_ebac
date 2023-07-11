import { Restaurante } from '../../pages/Home'
import CardCardapio from '../CardCardapio'
import { List } from './styles'

type Props = {
  dishs: Restaurante[]
}

const Cardapio = ({ dishs }: Props) => {
  const getOferta = (dishs: Restaurante) => {
    return dishs.destacado
  }
  return (
    <List>
      {dishs.map((dish) => (
        <li key={dish.id}>
          <CardCardapio
            id={dish.id}
            image={dish.capa}
            country={dish.tipo}
            title={dish.titulo}
            rank={dish.avaliacao}
            description={dish.descricao}
            destacado={getOferta(dish)}
          />
        </li>
      ))}
    </List>
  )
}

export default Cardapio
