import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const storeItemsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com'}),
    endpoints: (builder)=> ({
        getStoreItems: builder.query({
            query:()=> `products/category/electronics`
        })
    })
})

export const {useGetStoreItemsQuery} = storeItemsApi;