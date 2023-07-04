import favoritos from '../../assets/estrela.svg'
import {
  Botao,
  Cabecalho,
  Card,
  Image,
  ImagemBotao,
  Nota,
  Texto,
  Titulo
} from './styles'
import Button from '../Botao'

type Props = {
  image: string
  country: string
  title: string
  rank: number
  description: string
}

const CardCardapio = ({ image, country, title, rank, description }: Props) => {
  return (
    <>
      <Card>
        <ImagemBotao>
          <Image src={image} alt={title} />
          <Button type="button" title="Clique aqui">
            {country}
          </Button>
        </ImagemBotao>
        <Cabecalho>
          <Titulo>{title}</Titulo>
          <Nota>
            <p>{rank}</p>
            <img src={favoritos} alt="favorito" />
          </Nota>
        </Cabecalho>
        <Texto>{description}</Texto>
        <Botao>
          <Button type="link" to="/perfil" title="Clique aqui">
            Saiba mais
          </Button>
        </Botao>
      </Card>
    </>
  )
}

export default CardCardapio
