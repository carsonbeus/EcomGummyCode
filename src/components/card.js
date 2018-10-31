import React, { Component } from 'react';

class Card extends Component {
    render() {
        const sticker = this.props;
        return(
            <div className='sticker'>
                <div className='sticker__front'>
                    <div className='sticker__front__image-container'>
                        <img src={sticker.imageURL} />
                    </div>
                    <div>Category: {sticker.category}</div>
                </div>
                <div className='sticker__back'>
                    <div className='sticker__back__title'>
                        {sticker.title}
                    </div>
                    <div className='sticker__back__description'>
                        <div className='sticker__back__description__text'>
                            {sticker.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;