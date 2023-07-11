import favoritos from '../../assets/estrela.svg'
import { Botao, Cabecalho, Card, Infos, Nota, Texto, Titulo } from './styles'
import Button from '../Botao'
import Tag from '../../Tag'
import { TagContainer } from '../../Tag/styles'

type Props = {
  image: string
  country: string
  title: string
  rank: number
  description: string
  id: number
  destacado: boolean
}

const CardCardapio = ({
  image,
  country,
  title,
  rank,
  description,
  id,
  destacado
}: Props) => {
  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <Infos>
          {destacado && (
            <TagContainer key="destacado">Destaque da semana</TagContainer>
          )}
          <TagContainer>{country}</TagContainer>
        </Infos>

        <Cabecalho>
          <Titulo>{title}</Titulo>
          <Nota>
            <p>{rank}</p>
            <img src={favoritos} alt="favorito" />
          </Nota>
        </Cabecalho>
        <Texto>{description}</Texto>
        <Botao>
          <Button type="link" to={`/perfil/${id}`} title="Clique aqui">
            Saiba mais
          </Button>
        </Botao>
      </Card>
    </>
  )
}

export default CardCardapio
