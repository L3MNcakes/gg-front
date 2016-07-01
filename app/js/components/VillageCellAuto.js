/**
 * VillageCellAuto.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import React, {Component} from 'react';
import {Container} from 'flux/utils';

import WorldStore from '../stores/WorldStore';

import World from './World';
import WorldSizeEditor from './WorldSizeEditor';

type State = {
    worldWidth: number,
    worldHeight: number,
    drawables: Array<React.Element>
};

class VillageCellAuto extends Component<void, void, State>
{
    state: State;

    static getStores() {
        return [WorldStore];
    }

    static calculateState(prevState: State) {
        return {
            worldWidth: WorldStore.get('pxWidth'),
            worldHeight: WorldStore.get('pxHeight'),
            drawables: WorldStore.get('drawables')
        };
    }

    render(): ?React.Element {
        return (
            <div>
                <World
                    width={this.state.worldWidth}
                    height={this.state.worldHeight}
                >
                    {this.state.drawables}
                </World>
                <WorldSizeEditor />
            </div>
        );
    }
}

const VillageCellAutoContainer = Container.create(VillageCellAuto);
export default VillageCellAutoContainer;
