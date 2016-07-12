/**
 * App.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

/**
 * Npm import
 **/
import React, {Component} from 'react';

/**
 * Components import
 **/
import AppToolbar from './AppToolbar';
import AppEditor from './AppEditor';
import AppInspector from './AppInspector';
import AppProperties from './AppProperties';
import ProjectManager from './ProjectManager';

/**
 * Stores import
 **/
import ProjectsStore from '../stores/ProjectsStore';

/**
 * Constants import
 **/
import APP from '../constants/AppConstants';

type State = {
    view: string
};

export default class App extends Component<void, Object, State>
{
    state: State = {
        view: APP.VIEW_PROJECT_MANAGER
    };

    render(): ?React.Element {
        switch(this.state.view) {
            case APP.VIEW_PROJECT_EDITOR:
                return this._renderProjectEditor();
            case APP.VIEW_PROJECT_MANAGER:
                return this._renderProjectManager();
        }
    }

    _renderProjectEditor(): ?React.Element {
        return (
            <div className="app-container">
                <AppToolbar />
                <div className="app-content-section">
                    <AppEditor />
                    <AppInspector />
                </div>
                <AppProperties />
            </div>
        );
    }

    _renderProjectManager(): ?React.Element {
        return (
            <ProjectManager />
        );
    }
}
