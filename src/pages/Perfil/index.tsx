import { useParams } from 'react-router-dom'
import { CardapioItem, Restaurante } from '../Home'
import HeaderPerfil from '../../Components/HeaderPerfil'
import { useEffect, useState } from 'react'
import PerfilCard from '../../Components/PerfilCard'

const Perfil = () => {
  const { id } = useParams()
  const [prato, setRestaurante] = useState<Restaurante>()
  const [cardapio, setCardapio] = useState<CardapioItem>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [id])

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
