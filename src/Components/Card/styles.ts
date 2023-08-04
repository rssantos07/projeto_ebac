import styled from 'styled-components'
import { color } from '../../styles'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  .button-spacing {
    margin-bottom: 52px;
    background-color: red;
    padding: 80px;
  }

  &.is-open {
    display: flex;
  }

  .margin-top {
    margin-top: 14px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }

  h2,
  h3 {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
`
export const SideBar = styled.aside`
  background-color: ${color.orange};
  padding: 32px 8px 40px 8px;
  max-width: 360px;
  width: 100%;
  z-index: 1;
  color: ${color.white};
`
