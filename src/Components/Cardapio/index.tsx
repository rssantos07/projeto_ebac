import Dish from '../../models/Pratos'
import CardCardapio from '../CardCardapio'
import { List } from './styles'

export type Props = {
  dishs: Dish[]
}

const Cardapio = ({ dishs }: Props) => {
  return (
    <List>
      {dishs.map((dish) => (
        <CardCardapio
          key={dish.id}
          image={dish.image}
          country={dish.country}
          title={dish.title}
          rank={dish.rank}
          description={dish.description}
        />
      ))}
    </List>
  )
}

export default Cardapio
