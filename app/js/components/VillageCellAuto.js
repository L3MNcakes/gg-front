/**
 * VillageCellAuto.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import type {WorldObject} from '../stores/WorldStore';

import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {List, Map} from 'immutable';

import WorldStore from '../stores/WorldStore';

import World from './World';
import WorldSizeEditor from './WorldSizeEditor';

type State = {
    pxDimension: Map<string, number>,
    viewport: Map<string, number>,
    elementsToDraw: List<React.Element>
};

class VillageCellAuto extends Component<void, void, State>
{
    state: State;

    static getStores() {
        return [WorldStore];
    }

    static calculateState(prevState: State) {
        return {
            pxDimension: WorldStore.get('pxDimension'),
            viewport: WorldStore.get('viewport'),
            elementsToDraw: camera(WorldStore.get('worldObjects'))
        };
    }

    render(): ?React.Element {
        return (
            <div>
                <World
                    width={this.state.pxDimension.get('width')}
                    height={this.state.pxDimension.get('height')}
                    viewport={this.state.viewport}
                >
                    {this.state.elementsToDraw}
                </World>
                <WorldSizeEditor />
            </div>
        );
    }
}

/**
 * The camera takes an arbitrary list of world objects and returns a list of React Elements which should
 * be rendered to the current viewport.
 **/
var camera = (worldObjects: List<WorldObject>): List<React.Element> => {
    var viewport = WorldStore.get('viewport'),
        pxDimension = WorldStore.get('pxDimension');

    return worldObjects.map( (object: WorldObject, key: number) => {
        return React.createElement(object.component, {
            key: object.id,
            x: object.location.x,
            y: object.location.y
        });
    });
}

const VillageCellAutoContainer = Container.create(VillageCellAuto);
export default VillageCellAutoContainer;
