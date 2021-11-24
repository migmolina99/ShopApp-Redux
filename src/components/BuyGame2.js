import React from 'react';
import { connect } from 'react-redux';
import { buy_game_action, return_game_action } from '../redux/actions/gameShopActions';

function BuyGame({ buy_game_action, return_game_action }) {

    return (
        <>
            <button onClick={ () => buy_game_action(1, 1) } className="product-card__button">Add</button>
            <button onClick={ () => return_game_action(1, 1) } className="product-card__button">Remove</button>
        </>
    );

}

const mapDispatchToProps = {
    buy_game_action,
    return_game_action
}

export default connect(null, mapDispatchToProps)(BuyGame);