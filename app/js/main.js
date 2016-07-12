/**
 * Main.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import localforage from 'localforage';

import App from './components/App';

localforage.config({
    name: 'VCAEngine',
    storeName: 'vcaEngineStore'
});

ReactDOM.render(
    <App />,
    document.getElementById('App')
);
