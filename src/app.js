console.log('App.js is running');

//JSK stands for javascript xml

let appObject={
    title:'Indecision App',
    subtitle:'something something',
    options:['One', 'Two', 'Three']
};

let getOptions=(options)=>
{
    if(options.length > 0)
    {
        let displayOptions='';
        for(let i=0; i< options.length; i++)
        {
            displayOptions += options[i] +' ';
        }
        return displayOptions;
    }
    else return 'No options'

};


const template  = (
    <div>
    <h1> {appObject.title}</h1>
        {appObject.subtitle && <p> {appObject.subtitle}</p>}
        <p>Here are your options: {getOptions(appObject.options)}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
let getLocation=(location)=>{
    if(location)
    {
        return <p>location: {location}</p>
    }
};

const appRoot = document.getElementById('app');

let count =0;
const buttonID= 'my-id';
let addOne=() =>{
    count++;
    renderContentApp();
};

let minusOne=()=>{
   count--;
   renderContentApp();
};

let reset=()=>{
    count=0;
    renderContentApp();
}

const renderContentApp=()=>{
    const template2 =(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} className="button">+1</button>
            <button onClick={minusOne}> -1</button>
            <button onClick={reset}> reset</button>
        </div>
    )
    ReactDOM.render(template2, appRoot);
}

renderContentApp();

