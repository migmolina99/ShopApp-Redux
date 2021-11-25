import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from '../redux/actions/finderActions';

function PokemonFinder() {

    const dispatch = useDispatch();
    const [pokemonName, setPokemonName] = useState('pikachu');

    return (
        <form className="search-form">
            <label className="search-form__label" htmlFor="search">Buscar</label>
            <input id="search" 
                   className="search-form__input" 
                   type="text"
                   value={pokemonName}
                   onChange={ (e) => setPokemonName(e.target.value) }></input>
            <button className="search-form__button" 
                    type="button"
                    onClick={ () => dispatch(fetchPokemon(pokemonName)) }>Buscar Pokemon</button>
        </form>
    );
}

export default PokemonFinder;