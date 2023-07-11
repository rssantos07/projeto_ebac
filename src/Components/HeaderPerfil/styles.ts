import styled from 'styled-components'
import { cores } from '../../styles'

export const Content = styled.div`
  widht: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding: 82px 172px;
  align-items: center;
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const Paragrafo = styled.p`
  font-size: 18px;
  font-weight: 900;
`
export const Image = styled.img`
  height: 57px;
  margin-left: 80px;
`

export const Apresentacao = styled.div`
  width: 100%;
  height: 280px;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 0 32px 0;

    h3 {
      font-size: 34px;
      color: ${cores.branco};
      font-weight: 100;
      line-height: 38px;
    }
    p {
      font-size: 32px;
      color: ${cores.branco};
      font-weight: 900;
      line-height: 38px;
    }
  }
`
