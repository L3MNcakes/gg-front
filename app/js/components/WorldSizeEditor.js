/**
 * WorldSizeEditor.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import type {WorldAction} from '../actions/WorldActions';

import React, {Component} from 'react';
import Random from 'random-js';

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
        width: 600,
        height: 400
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

        if(evt.target instanceof HTMLInputElement) {
            state[evt.target.name] = parseInt(evt.target.value);
        }

        this.setState(state);

        dispatch({
            type: WorldConstants.UPDATE_WORLD_SIZE,
            payload: {
                pxWidth: state.width,
                pxHeight: state.height
            }
        });
    }

    _onDrawClick(evt: Event): void {
        var square: React.Element = (
            <Square x={randomInt()} y={randomInt()} key={randomString()} />
        );

        dispatch({
            type: WorldConstants.ADD_DRAWABLE,
            payload: square
        });
    }
}

/**
 * Helpers
 **/
var randomEngine = Random.engines.mt19937().autoSeed();
var intDistribution = Random.integer(0, 600);
var strDistribution = Random.string();

function randomInt(): number {
    return intDistribution(randomEngine);
}

function randomString(): string {
    return strDistribution(randomEngine, 10);
}
