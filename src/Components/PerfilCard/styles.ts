import styled from 'styled-components'
import { cores } from '../../styles'
import AdicionarButton from '../Adicionar'

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px;
  justify-items: center;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
`

export const Card = styled.div`
  width: 304px;
  background-color: ${cores.laranja};
  color: ${cores.branco};
  padding: 8px;
  margin-bottom: 32px;
  height: 338px;
`

export const Image = styled.img`
  width: 100%;
  margin-bottom: 8px;
  height: 167px;
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
  height: 78px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  background-color: ${cores.laranja};
  color: ${cores.branco};


  > div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 8px 8px;
    .fechar {
      text-align: right;
      display: flex;
      cursor: pointer;
      width: 16px;
      height: 16px;
      text-align: center;
    }

  }
  header {
    display: flex;
    padding: 8px 32px 32px 32px;

    .detalhes {
      margin-left: 24px;

      h4 {
      font-size: 18px;
      font-weight: 900;
      line-height: 22px;
    }
      p {
        margin-top: 16px;
        margin-bottom: 16px;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
      }
      span {
        margin-bottom: 40px;
        background-color: red;
      }
      .button{
        width: 250px;
      }
    }


  }
  .fechar {

  }

  img {
    display: block;
    width 280px;
    height: 280px;
    object-fit: cover;
  }

  > img {
    width: 100%;
  }
`
