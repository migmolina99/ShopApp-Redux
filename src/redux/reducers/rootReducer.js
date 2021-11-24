import { combineReducers } from 'redux';
import gameShopReducer from './gameShopReducer';

const rootReducer = combineReducers({
    games: gameShopReducer
});

export default rootReducer;