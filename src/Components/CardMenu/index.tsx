import favoritos from '../../assets/estrela.svg'
import * as S from './styles'
import Button from '../Bottom'

type Props = {
  image: string
  country: string
  title: string
  rank: number
  description: string
  id: number
  destacado: boolean
}

const CardMenu = ({
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
      <S.Card>
        <img src={image} alt={title} />
        <S.Infos>
          {destacado && <S.Tag key="destacado">Destaque da semana</S.Tag>}
          <S.Tag>{country}</S.Tag>
        </S.Infos>

        <S.Cabecalho>
          <S.Titulo>{title}</S.Titulo>
          <S.Nota>
            <p>{rank}</p>
            <img src={favoritos} alt="favorito" />
          </S.Nota>
        </S.Cabecalho>
        <S.Texto>{description}</S.Texto>
        <S.Bottom>
          <Button type="link" to={`/perfil/${id}`} title="Clique aqui">
            Saiba mais
          </Button>
        </S.Bottom>
      </S.Card>
    </>
  )
}

export default CardMenu
