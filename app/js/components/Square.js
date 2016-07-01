/**
 * Square.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/

import React, {Component} from 'react';
import Random from 'random-js';

type Props = {
    x: number,
    y: number
};

type State = {

};

type Style = {
    fill: string
};

export default class Square extends Component<void, Props, State>
{
    style: Style = {
        fill: randomColor()
    };

    render(): ?React.Element {
        return (
            <rect
                x={this.props.x}
                y={this.props.y}
                width="100"
                height="100"
                style={this.style}
            />
        );
    }
}

/**
 * Helpers
 **/
var randomEngine = Random.engines.mt19937().autoSeed();
var hexDistribution = Random.hex();

function randomColor(): string {
    return "#" + hexDistribution(randomEngine, 6);
}

