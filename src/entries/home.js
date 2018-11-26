import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from '../playlist/components/playlist';
// import data from '../api.json'
import data from '../api.json'

const app = document.getElementById('app')
// render(<Media type="video" title="Bitcoin" author="@danielpqe" image="./images/covers/bitcoin.jpg"/>,app);
render(<Home data={data}/>,app)
