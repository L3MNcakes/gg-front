/**
 * ProjectActions.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import PROJECTS from '../constants/ProjectsConstants';
import {Map} from 'immutable';

export type ProjectsAction =
    {
        type: PROJECTS.ACTION_LOAD_PROJECTS,
        payload: Map<string, any>
    };
