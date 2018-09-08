'use strict';

var appRoot = document.getElementById('app');

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

var visibility = false;
var list = '';
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey, these are some details you cna now see.'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
