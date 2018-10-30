import { SET_STICKERS } from './types';

import axios from 'axios';

function fetchStickers() {
    return function(dispatch){
        axios.get('http://localhost:8080/api/store')
        .then(response => {
            dispatch({
                type: SET_STICKERS,
                payload: response.data.stickers
            })
        })
        .catch(err => {
            if(err) { console.log(err) }
        })
    }
}

export { fetchStickers }