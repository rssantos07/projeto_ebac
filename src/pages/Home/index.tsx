import Cardapio from '../../Components/Cardapio'
import Header from '../../Components/Header'
import Dish from '../../models/Pratos'

import sushi from '../../assets/sushi.png'
import trrattoria from '../../assets/trattoria.png'

const prato: Dish[] = [
  {
    id: 1,
    image: sushi,
    country: 'japonesa',
    title: 'Hioki Sushi',
    rank: 4.9,
    description: `  Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
      frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
      rápida, embalagens cuidadosas e qualidade garantida. Experimente o
      Japão sem sair do lar com nosso delivery!`
  },
  {
    id: 2,
    image: trrattoria,
    country: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    rank: 4.6,
    description: `A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!`
  },
  {
    id: 3,
    image: trrattoria,
    country: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    rank: 4.6,
    description: `A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!`
  },
  {
    id: 4,
    image: trrattoria,
    country: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    rank: 4.6,
    description: `A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!`
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <Cardapio dishs={prato} />
    </>
  )
}
export default Home
