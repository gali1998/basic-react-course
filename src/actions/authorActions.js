'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var actionTypes = require('../constants/actionTypes');

var authorActions = {
    createAuthor: function(author) {
        var newAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: actionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },
    updateAuthor: function(author) {
        var updatedAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: actionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },
    deleteAuthor: function(id) {
        var updatedAuthor = AuthorApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType: actionTypes.DELETE_AUTHOR,
            id: id
        });
    }
};

module.exports = authorActions;