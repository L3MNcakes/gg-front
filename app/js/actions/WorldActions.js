/**
 * WorldActions.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import type {WorldObject} from '../stores/WorldStore';

import React from 'react';
import WorldConstants from '../constants/WorldConstants';

export type WorldAction = {
        type: WorldConstants.UPDATE_WORLD_SIZE,
        payload: {
            pxWidth: number,
            pxHeight: number
        }
    } | {
        type: WorldConstants.ADD_DRAWABLE,
        payload: ?React.Element
    } | {
        type: WorldConstants.ADD_OBJECT,
        payload: WorldObject
    };
