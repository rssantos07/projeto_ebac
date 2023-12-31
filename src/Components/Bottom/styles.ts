import styled from 'styled-components'
import { color } from '../../styles'

import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  border: 1px solid ${color.orange};
  color: ${color.white};
  background-color: ${color.orange};
  font-size: 16px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  position: absolute;
  top: 0%;
  right: 0%;
  margin: 16px;
`

export const ButtonLink = styled(Link)`
  border: 1px solid ${color.orange};
  color: ${color.white};
  background-color: ${color.orange};
  font-size: 16px;
  font-weight: bold;
  padding: 6px 4px;
  text-decoration: none;
  margin-left: 8px;
`
