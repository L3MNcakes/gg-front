/**
 * AppInspector.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import React, {Component} from 'react';

export default class AppInspector extends Component<void, Object, null>
{
    state: null;

    render(): ?React.Element {
        return (
            <div className="app-inspector"></div>
        );
    }
}
