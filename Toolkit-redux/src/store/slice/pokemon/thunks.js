import { starLoandingPokemons } from "./pokemonSlice"

export const getPokemons = (page =0 ) => {
    return (dispatch,getState) => {
        dispatch (starLoandingPokemons () ); 
        //TODO: Realizar Peticion http
        //dispacth (setPokemons()); 
    }
}