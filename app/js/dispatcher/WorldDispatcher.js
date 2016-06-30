/**
 * WorldDispatcher.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import type {WorldAction} from '../actions/WorldActions';

import {Dispatcher} from 'flux';

const instance: Dispatcher<WorldAction> = new Dispatcher();

export default instance;
export const dispatch = instance.dispatch.bind(instance);
