import React from 'react';
import { useSelector } from 'react-redux';

function GameQuantity() {

    const games = useSelector(state => state.games);

    return (
        <>
            <h1 className="product-card__title">Quantity: { games[0].stock }</h1>
        </>
    );

}

export default GameQuantity;