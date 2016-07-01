/**
 * WorldSizeEditor.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import type {WorldAction} from '../actions/WorldActions';
import type {WorldObject} from '../stores/WorldStore';

import React, {Component} from 'react';
import {Map} from 'immutable';
import Random from 'random-js';

import {DEFAULT_WORLD_PXDIMENSION_WIDTH,
        DEFAULT_WORLD_PXDIMENSION_HEIGHT} from '../stores/WorldStore';

import {dispatch} from '../dispatcher/WorldDispatcher';
import WorldConstants from '../constants/WorldConstants';
import Square from './Square';

type Props = {};

type State = {
    width: number,
    height: number
};

export default class WorldSizeEditor extends Component<void, Props, State>
{
    state: State = {
        width: DEFAULT_WORLD_PXDIMENSION_WIDTH,
        height: DEFAULT_WORLD_PXDIMENSION_HEIGHT
    };

    render(): ?React.Element {
        return (
            <div>
                <div>
                    <label>Width:</label>
                    <input type="text" name="width" onChange={this._onInputChange.bind(this)} defaultValue={this.state.width} />
                </div>
                <div>
                    <label>Height:</label>
                    <input type="text" name="height" onChange={this._onInputChange.bind(this)} defaultValue={this.state.height} />
                </div>
                <input type="button" value="Draw" onClick={this._onDrawClick.bind(this)}/>
            </div>
        );
    }

    _onInputChange(evt: Event): void {
        var state: State = Object.assign({}, this.state);

        if(evt.target.name && evt.target.value) {
            state[evt.target.name] = evt.target.value;
            this.setState(state);
        }

        dispatch({
            type: WorldConstants.UPDATE_WORLD_SIZE,
            payload: Map({
                width: state.width,
                height: state.height
            })
        });
    }

    _onDrawClick(evt: Event): void {
        var squareObj: WorldObject = {
            id: randomString(),
            component: Square,
            location: {
                x: randomX(),
                y: randomY()
            }
        };

        dispatch({
            type: WorldConstants.ADD_OBJECT,
            payload: squareObj
        });
    }
}

/**
 * Helpers
 **/
var randomEngine = Random.engines.mt19937().autoSeed(),
    xDistribution = Random.integer(-1200, 1200),
    yDistribution = Random.integer(-800, 800),
    strDistribution = Random.string();

function randomX(): number {
    return xDistribution(randomEngine);
}

function randomY(): number {
    return yDistribution(randomEngine);
}

function randomString(): string {
    return strDistribution(randomEngine, 10);
}
