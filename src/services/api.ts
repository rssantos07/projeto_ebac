import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getFeaturedRestarante: builder.query<Restaurante[], void>({
      query: () => ''
    }),
    getOnHeader: builder.query<Restaurante, string>({
      query: (id) => `/${id}`
    }),
    getOnDish: builder.query<MenuItem, string>({
      query: (id) => `/${id}`
    })
  })
})

export const {
  useGetFeaturedRestaranteQuery,
  useGetOnDishQuery,
  useGetOnHeaderQuery
} = api

export default api
