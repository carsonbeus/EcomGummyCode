import { SET_STICKERS } from './types';

function fetchStickers() {
    const stickers = [
        {
            _id: 0,
            category: 'Javascript',
            remaining: 4,
            imageURL: 'https://via.placeholder.com/80x80'
        },
        {
            _id: 1,
            category: 'Python',
            remaining: 2,
            imageURL: 'https://via.placeholder.com/80x80'
        },
        {
            _id: 2,
            category: 'Ruby',
            remaining: 6,
            imageURL: 'https://via.placeholder.com/80x80'
        }
    ]

    const responee = {
        data: { stickers }
    }

    return ({
        type: SET_STICKERS,
        payload: response.data.stickers
    })

}

export { fetchStickers }