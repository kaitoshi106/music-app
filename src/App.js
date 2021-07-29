import React, { Fragment } from 'react';
import History from './components/history/History';
import Songs from './components/list-songs/songs';
import Navbar from './components/navbar/Navbar';
import Player from './components/player/Player';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Songs />
      <Player />
      <History />
    </Fragment>
  );
}

export default App;
