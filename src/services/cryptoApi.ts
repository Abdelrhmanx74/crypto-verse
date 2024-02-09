import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '8571bbf9d1mshf8b2080f680a326p1d9082jsn4af7246be913',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com/"

const createRequest = (url:string) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count?:number) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query:(coinUuid?:any) =>  createRequest(`/coin/${coinUuid}`),
        })
    })
})

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery
} = cryptoApi;
