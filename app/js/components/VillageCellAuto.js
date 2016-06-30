/**
 * VillageCellAuto.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import React, {Component} from 'react';
import {Container} from 'flux/utils';

import GameStore from '../stores/GameStore';
import WorldStore from '../stores/WorldStore';

import World from './World';

type State = {};

class VillageCellAuto extends Component<void, void, State>
{
    state: State;

    static getStores() {
        return [GameStore, WorldStore];
    }

    static calculateState(prevState) {
        return {};
    }

    render() {
        console.log(WorldStore);
        return (
            <World
                width={WorldStore.get('pxWidth')}
                height={WorldStore.get('pxHeight')}
            />
        );
    }
}

const VillageCellAutoContainer = Container.create(VillageCellAuto);
export default VillageCellAutoContainer;
