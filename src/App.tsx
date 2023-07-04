import { BrowserRouter } from 'react-router-dom'

import Footer from './Components/Footer'
import Header from './Components/Header'
import { GlobalCss } from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
