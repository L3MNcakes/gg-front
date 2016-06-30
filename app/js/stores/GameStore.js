/**
 * GameStore.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import type {GameAction} from '../actions/GameActions';

import {Map} from 'immutable';
import {MapStore} from 'flux/utils';

import GameDispatcher from '../dispatcher/GameDispatcher';

type GameState = Map<string, any>;

class GameStore extends MapStore
{
    getInitialState(): GameState {
        return new Map({});
    }
}

const instance = new GameStore(GameDispatcher);
export default instance;
