import { Botao } from './styles'

type Props = {
  onClick?: () => void
  texto: string
}

const AdicionarButton = ({ onClick, texto }: Props) => {
  return (
    <>
      <Botao onClick={onClick}>{texto}</Botao>
    </>
  )
}

export default AdicionarButton
