import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const storeItemsApi = createApi({
    reducerPath: "storeApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products'})
})