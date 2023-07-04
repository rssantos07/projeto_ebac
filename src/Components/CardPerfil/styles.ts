import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 304px;
  background-color: ${cores.textColor};
  color: ${cores.textButton};
  padding: 8px;
  margin-bottom: 32px;
`
export const Image = styled.img`
  width: 100%;
  margin-bottom: 8px;
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
`

export const Paragrafo = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`
