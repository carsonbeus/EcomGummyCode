import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchStickers } from '../actions';

import Card from './card';

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
              <Card {...sticker} key={sticker._id} />
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

App = connect(mapStateToProps, {fetchStickers})(App);

export default App;