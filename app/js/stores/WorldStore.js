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

export type WorldObject = {
    id: string,
    component: any,
    location: {
        x: number,
        y: number
    }
};

export const DEFAULT_WORLD_PXDIMENSION_WIDTH = 600;
export const DEFAULT_WORLD_PXDIMENSION_HEIGHT = 400;

class WorldStore extends MapStore
{
    getInitialState(): Map<string, any> {
        return new Map({
            pxDimension: Map({
                width: DEFAULT_WORLD_PXDIMENSION_WIDTH,
                height: DEFAULT_WORLD_PXDIMENSION_HEIGHT
            }),

            viewport: Map({
                x: -1 * (DEFAULT_WORLD_PXDIMENSION_WIDTH / 2),
                y: -1 * (DEFAULT_WORLD_PXDIMENSION_HEIGHT / 2)
            }),

            worldObjects: List()
        });
    }

    reduce(state: Map<string, any>, action: WorldAction): Map<string, any> {
        switch(action.type) {
            case WorldConstants.ADD_OBJECT:
                var currObjects = state.get('worldObjects'),
                    newObjects = currObjects.push(action.payload);

                return state.set('worldObjects', newObjects);
            case WorldConstants.UPDATE_WORLD_SIZE:
                var currPxDimension = state.get('pxDimension'),
                    newPxDimension = currPxDimension.merge(action.payload);

                return state.set('pxDimension', newPxDimension);
            case WorldConstants.ADD_DRAWABLE:
                var currDrawables = state.get('drawables'),
                    newDrawables = currDrawables.push(action.payload);

                return state.set('drawables', newDrawables);
            default:
                return state;
        }
    }
}

const instance =  new WorldStore(WorldDispatcher);
export default instance;
