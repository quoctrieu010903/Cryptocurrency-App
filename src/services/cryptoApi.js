import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// headers for the api
// fetchBaseQuery is a utility function that creates a base query function for making HTTP requests
const cryptoApiHeaders = {
        'x-rapidapi-key': '5df7485a1fmsh4f8eca221c49397p18973djsn8c1c1b639733',
		'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
	
    
};

// base url for the api
// baseUrl is the root URL for the API endpoints
const baseUrl = 'https://coinranking1.p.rapidapi.com';

// createRequest is a function that takes a URL and returns an object with the URL and headers
// this is used to create the request object that will be sent to the API
// this function is used to create the request object that will be sent to the API
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// fetch data from the api format query
// create a slice of the store
// create a reducer
// create a store
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCrytos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        
    }),
});

export const {
    useGetCrytosQuery,
} = cryptoApi;  