import Menu from '../../Components/Menu'
import Header from '../../Components/Header'
import Loader from '../../Components/Loaders'

import { useGetFeaturedRestaranteQuery } from '../../services/api'

const Home = () => {
  const { data: restaurante } = useGetFeaturedRestaranteQuery()
  if (restaurante) {
    return (
      <>
        <Header />
        <Menu dishs={restaurante} />
      </>
    )
  }
  return <Loader />
}
export default Home
