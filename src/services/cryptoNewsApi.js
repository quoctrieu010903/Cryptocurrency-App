import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoNewsApiHeaders = {
    'x-rapidapi-key': '5df7485a1fmsh4f8eca221c49397p18973djsn8c1c1b639733',
		'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
		'X-BingApis-SDK': 'true'
    };

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&textFormat=Raw&safeSearch=Off&freshness=Day&count=${count}`),
        }),
    }),
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;