import styled from 'styled-components'
import { color } from '../../styles'

export const Card = styled.div`
  width: 472px;
  border: 2px solid ${color.orange};
  margin-bottom: 48px;
  margin-right: 80px;
  position: relative;

  > img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Nota = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-right: 8px;
  p {
    margin-right: 6px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-top: 8px;
  margin-left: 8px;
`

export const Texto = styled.p`
  padding: 8px;
  font-size: 14px;
  margin-bottom: 16px;
`
export const Bottom = styled.div`
  margin-bottom: 16px;
`
export const ImagemBottom = styled.div`
  position: relative;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Tag = styled.div`
  background-color: ${color.orange};
  color: ${color.white};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 10px;
  display: inline-block;
  margin-left: 8px;
`
