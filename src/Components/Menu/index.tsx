import CardMenu from '../CardMenu'
import { List } from './styles'

type Props = {
  dishs: Restaurante[]
}

const Menu = ({ dishs }: Props) => {
  const getOferta = (dishs: Restaurante) => {
    return dishs.destacado
  }
  return (
    <List>
      {dishs.map((dish) => (
        <li key={dish.id}>
          <CardMenu
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

export default Menu
