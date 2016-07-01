/**
 * WorldStore.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import type {WorldAction} from '../actions/WorldActions';

import {Map, List} from 'immutable';
import {MapStore} from 'flux/utils';

import WorldDispatcher from '../dispatcher/WorldDispatcher';
import WorldConstants from '../constants/WorldConstants';

type WorldState = Map<string, any>;

class WorldStore extends MapStore
{
    getInitialState(): WorldState {
        return new Map({
            pxWidth: 600,
            pxHeight: 400,
            drawables: new List()
        });
    }

    reduce(state: WorldState, action: WorldAction): WorldState{
        switch(action.type) {
            case WorldConstants.UPDATE_WORLD_SIZE:
                return state.merge(action.payload);
            case WorldConstants.ADD_DRAWABLE:
                var currDrawables = state.get('drawables'),
                    newDrawables = currDrawables.push(action.payload);

                return state.merge(new Map({
                    drawables: newDrawables
                }));
            default:
                return state;
        }
    }
}

const instance =  new WorldStore(WorldDispatcher);
export default instance;
