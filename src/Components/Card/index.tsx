import * as S from './styles'

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => {
  return (
    <>
      <S.Container>
        <S.SideBar>
          <h2>{title}</h2>
          {children}
        </S.SideBar>
      </S.Container>
    </>
  )
}

export default Card
