'use strict';

console.log('App.js is running');

//JSK stands for javascript xml
let template = React.createElement(
  'h1',
  { id: 'somethingid' },
  ' This is JSK from app.js'
);
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
