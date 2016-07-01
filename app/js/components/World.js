/**
 * World.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import React, {Component} from 'react';

type Props = {
    width: number,
    height: number,
    children: Array<React.Element>
};

export default class World extends Component<void, Props, void>
{
    props: Props;

    render(): ?React.Element {
        return (
            <svg
                width={this.props.width}
                height={this.props.height}
                style={{border: '1px solid black', backgroundColor: '#222'}}
            >
                {this.props.children}
            </svg>
        );
    }
}
