"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback){
            if (!confirm('Are you sure you want to read this boring thing?')){
                transition.about();
            } else {
                callback();
            }
        },
        willTransitionFrom: function(transition, component){
            if (!confirm('Are you sure you want to leave such an exciting page?')){
                transition.about();
            }
        }
    },
    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React router</li>
                        <li>flux</li>
                        <li>node</li>
                        <li>gulp</li>
                        <li>browserify</li>
                        <li>bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;