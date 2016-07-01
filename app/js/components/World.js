/**
 * World.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import React, {Component} from 'react';
import {Map} from 'immutable';

type Props = {
    width: number,
    height: number,
    viewport: Map<string, number>
} | {
    width: number,
    height: number,
    viewport: Map<string, number>,
    children: Array<React.Element>
};

export default class World extends Component<void, Props, void>
{
    props: Props;

    render(): ?React.Element {
        var viewportStr: string = svgViewportStr(this.props.viewport, this.props.width, this.props.height);

        return (
            <svg
                width={this.props.width}
                height={this.props.height}
                viewBox={viewportStr}
                style={{border: '1px solid black', backgroundColor: '#222'}}
            >
                {this.props.children ? this.props.children : null}
            </svg>
        );
    }
}

var svgViewportStr = (viewport: Map<string, number>, width: number, height: number): string => {
    return ""
        + viewport.get("x")
        + " "
        + viewport.get("y")
        + " "
        + width
        + " "
        + height;
}
