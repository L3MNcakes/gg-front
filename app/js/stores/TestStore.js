var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    TestConstants = require('../constants/TestConstants');

var CHANGE_EVENT = 'change';

var _message = "Default Message";

function setMessage(msg) {
    _message = msg;
}

var TestStore = Object.assign({}, EventEmitter.prototype, {
    getMessage: function() {
        return _message;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case TestConstants.TEST_UPDATE:
            setMessage(action.msg);
            TestStore.emitChange();
            break;
        default:
            // Nothing
    }
});

module.exports = TestStore;
