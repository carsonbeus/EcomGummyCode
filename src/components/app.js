import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchStickers } from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchStickers()
  }
  
  render() {
    return (
      <div className='app'>
        {
          this.props.stickers.map(sticker => {
            return (
              <div className='sticker' key={sticker._id}>
                <img src={sticker.imageUrl}/>
                <div>Category: {sticker.category}</div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { stickers } = state.store;
  return {
    stickers
  }
}

app = connect(mapStateToProps, {fetchStickers})(App);

export default App;