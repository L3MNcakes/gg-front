/**
 * ProjectsStore.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import type {ProjectsAction} from '../actions/ProjectsActions';

import {Map} from 'immutable';
import {MapStore} from 'flux/utils';
import localforage from 'localforage';

import AppDispatcher from '../dispatcher/AppDispatcher';

import PROJECTS from '../constants/ProjectsConstants';

type ProjectsState = Map<string, any>;

class ProjectsStore extends MapStore
{
    getInitialState(): ProjectsState {
        return Map({});
    }

    reduce(state: ProjectsState, action: ProjectsAction): ProjectsState {
        switch(action.type) {
            case PROJECTS.ACTION_LOAD_PROJECTS:
                return action.payload;
            default:
                return state;
        }
    }
}

const instance = new ProjectsStore(AppDispatcher);
export default instance;
