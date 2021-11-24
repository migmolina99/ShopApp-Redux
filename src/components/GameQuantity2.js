import React from 'react';
import { connect } from 'react-redux';

function GameQuantity({ games }) {

    return (
        <>
            <h1 className="product-card__title">Quantity: { games[0].stock }</h1>
        </>
    );

}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(GameQuantity);