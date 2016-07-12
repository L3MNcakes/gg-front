/**
 * ProjectManager.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import React, {Component} from 'react';
import {Container} from 'flux/utils';
import {Map} from 'immutable';
import localforage from 'localforage';

import {dispatch} from '../dispatcher/AppDispatcher';

import ProjectsStore from '../stores/ProjectsStore';

import PROJECTS from '../constants/ProjectsConstants';

type State = {};

class ProjectManager extends Component<void, Object, State>
{
    state: State;

    static getStores() {
        return [ProjectsStore];
    }

    static calculateState(prevState: State): State {
        return {};
    }

    componentWillMount(): void {

        // Initializes projects from local storage
        localforage.getItem('projects').then( (value: ?Map<string, any>) => {
            if(value !== null) {
                // If value was found, load it into the Store
                dispatch({
                    type: PROJECTS.ACTION_LOAD_PROJECTS,
                    payload: value
                });
            }
        });

    }

    render(): ?React.Element {
        return (
            <div className="app-projects-container">
                <div className="projects-manager center--all">
                    <h3 className="text--left">Projects</h3>
                    <hr />
                    <div className="collection">
                        <div className="collection-item">
                            Project 1
                        </div>
                        <div className="collection-item">
                            Project 2
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const ProjectManagerContainer = Container.create(ProjectManager);

export default ProjectManagerContainer;
