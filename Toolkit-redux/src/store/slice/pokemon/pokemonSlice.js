import { createSlice } from '@reduxjs/toolkit';
export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
 page: 0,
 pokemons: [],
 isLoading: false, 
 },
    reducers: {
    starLoandingPokemons: (state, /* action */ ) => {
          state.isLoading = true; 
       }, 

       setPokemons : (state,action) => {
        console.log (action); 
       }
  } 
});


// Action creators are generated for each case reducer function
export const { starLoandingPokemons, setPokemons } = pokemonSlice.actions;