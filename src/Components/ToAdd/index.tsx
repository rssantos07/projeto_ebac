import * as S from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title?: string
  onClick?: () => void
  children: string
  className?: string
  to?: string
  disabled?: boolean
}

const ToAddButton = ({
  onClick,
  children,
  title,
  to,
  className,
  type,
  disabled
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <>
        <S.Bottom
          onClick={onClick}
          type={type}
          title={title}
          disabled={disabled}
          className={className}
        >
          {children}
        </S.Bottom>
      </>
    )
  }
  return (
    <S.BottomLink to={to as string} title={children}>
      {children}
    </S.BottomLink>
  )
}

export default ToAddButton
