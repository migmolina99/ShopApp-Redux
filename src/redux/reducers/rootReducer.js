import { combineReducers } from 'redux';
import finderReducer from './finderReducer';
import gameShopReducer from './gameShopReducer';

const rootReducer = combineReducers({
    games: gameShopReducer,
    finder: finderReducer
});

export default rootReducer;