import pizza from '../../assets/pizza.png'
import Dish from '../../models/Pratos'
import AdicionarButton from '../Adicionar'
import { Card, Image, Paragrafo, Titulo } from './styles'

export type Props = {
  dish: Dish
}

const CardPerfil = () => {
  return (
    <Card>
      <Image src={pizza} alt="" />
      <Titulo>Pizza Marguerita</Titulo>
      <Paragrafo>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Paragrafo>
      <AdicionarButton />
    </Card>
  )
}

export default CardPerfil
