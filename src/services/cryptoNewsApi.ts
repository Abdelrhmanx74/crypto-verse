import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoNewsApiHeaders = {
    'X-RapidAPI-Key': '8571bbf9d1mshf8b2080f680a326p1d9082jsn4af7246be913',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}

const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk"

const createRequest = (url: string) => ({ url, headers: cryptoNewsApiHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: () => createRequest(`/`),
        })
    })
})

export const {
    useGetCryptosNewsQuery
} = cryptoNewsApi;
