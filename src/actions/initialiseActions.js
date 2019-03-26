"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionsType = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');

var InitialiseActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionsType.INITIALISE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }
        });
    }
};

module.exports = InitialiseActions;