import { SET_STICKERS } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case SET_STICKERS:
            return {
                ...state,
                stickers: action.payload
            }
        default: return state;
    }
}

export default function();