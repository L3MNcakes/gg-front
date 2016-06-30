var FluxStore = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/AppDispatcher'),
    TestConstants = require('../constants/TestConstants'),

    assign = require('object-assign');

var _message = "Default Message #2";

var setMessage = function(msg) {
    _message = msg;
}

var AnotherTestStore = function() {};

AnotherTestStore.prototype = assign({}, FluxStore.prototype, {
    getMessage: function() {
        return _message;
    },

    __onDispatch: function(action) {
        switch(action.actionType) {
            case TestConstants.TEST_UPDATE:
                setMessage(action.msg);
                this.__emitChange();
                break;
            default:
                // Nothing
        }
    }
});

module.exports = new AnotherTestStore(AppDispatcher);
