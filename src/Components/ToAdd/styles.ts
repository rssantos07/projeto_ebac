import styled from 'styled-components'
import { color } from '../../styles'
import { Link } from 'react-router-dom'

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

export const BottomLink = styled(Link)`
  background-color: ${color.white};
  width: 100%;
  height: 24px;
  border: none;
  color: ${color.orange};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`
