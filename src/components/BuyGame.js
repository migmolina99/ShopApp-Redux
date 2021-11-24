import React from 'react';
import { useDispatch } from 'react-redux';
import { buy_game_action, return_game_action } from '../redux/actions/gameShopActions';

function BuyGame() {

    const dispatch = useDispatch();

    return (
        <>
            <button onClick={ () => dispatch(buy_game_action(1, 1)) } className="product-card__button">Add</button>
            <button onClick={ () => dispatch(return_game_action(1, 1)) } className="product-card__button">Remove</button>
        </>
    );

}

export default BuyGame;