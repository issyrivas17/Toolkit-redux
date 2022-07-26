import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react' 


export const todosApi = createApi({

    reducerPath: 'todos', 

    baseQuery: fetchBaseQuery ({
        baseUrl: 'https://jsonplaceholder.typecode.com' 
    }), 

    endpoints: (builder) => { 

      getTodos: builder.query ({
        query: () => '/todos' 
      })


    }




}) 


export const {} = todosApi; 