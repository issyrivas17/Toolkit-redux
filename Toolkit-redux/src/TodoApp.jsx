import React from 'react'
import { useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {

 const {data: todos,isLoading} = useGetTodosQuery(); 

  return (
    <> 
    
    <h1> Todos- RTK Query  </h1> 
    <hr/> 
    <h4> isLoading... {isLoading ? 'True': 'False' }</h4>  
    
    <hr/> 
    
    <pre> ... </pre> 
    <ul>
      {todos.map (todo => (
        <li key={ todo.id}> 
        {todo.title}
        
        </li>
  
      ))}
    </ul>

    <button>
        Next todo 
    </button>
    
    </>
  )
}
