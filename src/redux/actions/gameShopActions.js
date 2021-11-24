export const BUY_GAME = 'BUY_GAME';
export const RETURN_GAME = 'RETURN_GAME';

export const buy_game_action = (id, quantity) => {
    return {
        type: BUY_GAME,
        payload: { id, quantity }
    }
}

export const return_game_action = (id, quantity) => {
    return {
        type: RETURN_GAME,
        payload: { id, quantity }
    }
}