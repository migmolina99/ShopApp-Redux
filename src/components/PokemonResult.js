import React from 'react';
import { useSelector } from 'react-redux';

function PokemonResult() {

    const finder = useSelector(state => state.finder);

    return (
        <div className="search-result">
            <h3 className="search-result__title">Resultado: </h3>
            {finder.loading && <span className="search-result__loading">Cargando...</span>}
            {Object.keys(finder.pokemon).length > 0 && (
                <div className="search-result__cheracter">
                    <img src={finder.pokemon.sprites.front_default} 
                         className="search-result__image"
                         alt="Pokemon"></img>
                    <span className="search-result__name">{ finder.pokemon.name }</span>
                </div>
            )}
            { finder.error && <span className="search-result__error">Error</span> }
        </div>
    );
}

export default PokemonResult;