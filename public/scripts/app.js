'use strict';

console.log('App.js is running');

//JSK stands for javascript xml

var appObject = {
    title: 'Indecision App',
    subtitle: 'something something',
    options: ['One', 'Two', 'Three']
};

var getOptions = function getOptions(options) {
    if (options.length > 0) {
        var displayOptions = '';
        for (var i = 0; i < options.length; i++) {
            displayOptions += options[i] + ' ';
        }
        return displayOptions;
    } else return 'No options';
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        appObject.title
    ),
    appObject.subtitle && React.createElement(
        'p',
        null,
        ' ',
        appObject.subtitle
    ),
    React.createElement(
        'p',
        null,
        'Here are your options: ',
        getOptions(appObject.options)
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);
var getLocation = function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'location: ',
            location
        );
    }
};

var appRoot = document.getElementById('app');

var count = 0;
var buttonID = 'my-id';
var addOne = function addOne() {
    count++;
    renderContentApp();
};

var minusOne = function minusOne() {
    count--;
    renderContentApp();
};

var reset = function reset() {
    count = 0;
    renderContentApp();
};

var renderContentApp = function renderContentApp() {
    var template2 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne, className: 'button' },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            ' -1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            ' reset'
        )
    );
    ReactDOM.render(template2, appRoot);
};

renderContentApp();
