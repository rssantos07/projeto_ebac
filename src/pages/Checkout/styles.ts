import styled from 'styled-components'
import { color } from '../../styles'

type Props = {
  inline?: boolean
}

export const Container = styled.div`
  display: none;

  &.checkout-open {
    display: flex;
  }
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0 24px 0;
`

export const InputGroup = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.inline ? 'row' : 'column')};
  margin-bottom: 10px;
  justify-content: space-between;

  label {
    font-weight: 700;
    font-size: 14px;
    line-height: 16x;
    margin-bottom: 8px;
  }

  input {
    padding: 8px 8px;
    background-color: ${color.white};
    border: 1px solid ${color.white};
    color: #4b4b4b;
    font-weight: 700;
    font-size: 14px;
    line-height: 16x;
    &.error {
      border: 2px solid red;
    }
  }
  .margin-top {
    margin-top: 8px;
    width: 155px;
    display: flex;
  }

  .width-card {
    width: 228px;
  }
  .width-cvv {
    width: 87px;
  }
`
export const Bottom = styled.button`
  background-color: ${color.white};
  width: 100%;
  height: 24px;
  border: none;
  color: ${color.orange};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 8px;
`
