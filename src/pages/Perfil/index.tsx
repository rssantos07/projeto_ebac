import { useParams } from 'react-router-dom'
import HeaderPerfil from '../../Components/HeaderPerfil'
import PerfilCard from '../../Components/PerfilCard'
import { useGetOnDishQuery, useGetOnHeaderQuery } from '../../services/api'
import Loader from '../../Components/Loaders'

type MenuParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as MenuParams
  const { data: prato, isLoading } = useGetOnHeaderQuery(id)
  const { data: cardapio } = useGetOnDishQuery(id)

  if (!prato) {
    return <Loader />
  }

  if (!cardapio) {
    return <Loader />
  }

  return (
    <>
      <HeaderPerfil restaurante={prato} isLoading={isLoading} />
      <PerfilCard items={prato.cardapio} />
    </>
  )
}

export default Perfil
