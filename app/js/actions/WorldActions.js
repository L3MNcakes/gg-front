/**
 * WorldActions.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import WorldConstants from '../constants/WorldConstants';

export type WorldAction = {
        type: WorldConstants.UPDATE_WORLD_SIZE,
        payload: {
            pxWidth: number,
            pxHeight: number
        }
    };
