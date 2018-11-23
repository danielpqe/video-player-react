import React from 'react';
import {render} from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json'

const app = document.getElementById('app')
// render(<Media type="video" title="Bitcoin" author="@danielpqe" image="./images/covers/bitcoin.jpg"/>,app);
render(<Playlist data={data}/>,app)
