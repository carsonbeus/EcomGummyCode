import React, { Component } from 'react';

class Card extends Component {
    render() {
        const sticker = this.props;
        return(
            <div className='sticker'>
                <img src={sticker.imageURL} />
                <div>Category: {sticker.category}</div>
            </div>
        )
    }
}
export default Card;