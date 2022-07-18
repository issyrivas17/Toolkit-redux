import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slice/pokemon';

export const PokemonApp = () => { 

  const dispatch = useDispatch (); 

  const {isLoading,pokemons,page} = useSelector (state => state.pokemons) ; 

  useEffect(() => {
    dispatch (getPokemons ()); 
  }, []);

 return (
        <>
        <h1> PokemonApp</h1> 
        <hr/> 
        <span> Loading: {isLoading ? 'true': 'false'}</span> 

        <ul>
            <li> Hola </li>
            <li> Hola </li>
            <li> Hola </li>
        </ul>
        </>
  )
}
