import { HashLoader } from 'react-spinners'
import { color } from '../../styles'
import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <HashLoader color={color.orange} />
    </Container>
  )
}

export default Loader
