/**
 * GameDispatcher.js
 *
 * @author L3MNcakes <L3MNcakes@gmail.com>
 * @flow
 **/
'use strict'

import type {GameAction} from '../actions/GameActions';

import {Dispatcher} from 'flux';

const instance: Dispatcher<GameAction> = new Dispatcher();

export default instance;
export const dispatch = instance.dispatch.bind(instance);
