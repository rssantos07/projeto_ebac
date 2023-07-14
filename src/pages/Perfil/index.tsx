import { useParams } from 'react-router-dom'
import HeaderPerfil from '../../Components/HeaderPerfil'
import PerfilCard from '../../Components/PerfilCard'
import { useGetOnDishQuery, useGetOnHeaderQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: prato } = useGetOnHeaderQuery(id!)
  const { data: cardapio } = useGetOnDishQuery(id!)

  if (!prato) {
    return <h3>Carregando...</h3>
  }

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderPerfil restaurante={prato} />
      <PerfilCard items={prato.cardapio} />
    </>
  )
}

export default Perfil
