/**
 * WorldStore.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import type {WorldAction} from '../actions/WorldActions';

import {Map} from 'immutable';
import {MapStore} from 'flux/utils';

import WorldDispatcher from '../dispatcher/WorldDispatcher';
import WorldConstants from '../constants/WorldConstants';

type WorldState = Map<string, any>;

class WorldStore extends MapStore
{
    getInitialState(): WorldState {
        return new Map({
            pxWidth: 600,
            pxHeight: 400
        });
    }

    __onDispatch(action: WorldAction): void {
        switch(action.type) {
            case WorldConstants.UPDATE_WORLD_SIZE:
                break;
            default:
                // Nothing, yet
        }
    }
}

const instance =  new WorldStore(WorldDispatcher);
export default instance;
