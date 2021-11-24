import { BUY_GAME, RETURN_GAME } from '../actions/gameShopActions';

const default_game_shop = [
    {
        id: 1,
        name: 'Call of Duty 4',
        stock: 10
    },
    {
        id: 2,
        name: 'God of War',
        stock: 10
    }
];

const gameShopReducer = (state = default_game_shop, action) => {
    switch(action.type) {
        case BUY_GAME: {
            const { id, quantity  } = action.payload;
            return state.map(game => {
                if(game.id === id) {
                    return {
                        ...game,
                        stock: game.stock - quantity
                    }
                }
                return game;
            });
        }
        case RETURN_GAME: {
            const { id, quantity } = action.payload;
            return state.map(game => {
                if(game.id === id) {
                    return {
                        ...game,
                        stock: game.stock + quantity
                    }
                }
                return game;
            });
        }
        default: return state;
    }
}

export default gameShopReducer;