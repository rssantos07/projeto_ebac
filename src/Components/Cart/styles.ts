import styled from 'styled-components'
import { color } from '../../styles'
import lixeira from '../../assets/lixeira.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${color.orange};
  padding: 32px 8px 40px 8px;
  max-width: 360px;
  width: 100%;
  z-index: 1;
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${color.white};
  padding: 8px 0;
  max-width: 344px;
  width: 344px;
  color: ${color.orange};
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 0 8px;
  }

  h3 {
    display: block;
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 900;
    line-weight: 22px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-weight: 22px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    color: ${color.orange};
    cursor: pointer;
  }
`
export const Price = styled.div`
  display: flex;
  color: ${color.white};
  margin-bottom: 16px;
  margin-top: 40px;
  justify-content: space-between;

  p,
  span {
    font-size: 16px;
    font-weight: 700;
    line-weight: 16x;
  }
  span {
  }
`
export const EmptyText = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    width: 16px;
    position: absolute;
    top: -15px;
    right: 10px;
    cursor: pointer;
  }
  p {
    color: ${color.white};
    text-align: center;
    padding: 25px;
  }
`
