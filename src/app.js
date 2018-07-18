console.log('App.js is running');

//JSK stands for javascript xml

let template  = <h1 id="somethingid"> This is JSK from app.js</h1>;
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);