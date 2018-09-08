console.log('App.js is running');

//JSK stands for javascript xml

let appObject={
    title:'Indecision App',
    subtitle:'Put your life in the hands of a computer',
    options:[]
};
const getOptions=(options)=>
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

const onFormSubmit=(e)=>{
    e.preventDefault(); //Prevents page refresh

    //target is the event which is form, accessing a list of elements
    //which are indexed by name like "option" and finally we get that
    //value of that var.
    const option = e.target.elements.option.value;

    if(option){
        appObject.options.push(option);
        e.target.elements.option.value ='';
        render();
    }
};
const removeOptions=()=>{
    appObject.options.length =0;

    render();
}
const onMakeDecision=()=>{
    const randomNum = Math.floor(Math.random() * appObject.options.length);
    const optionPicked= appObject.options[randomNum];
    alert(optionPicked);
};


//const appRoot = document.getElementById('app');

const render=()=>{
    const template  = (
        <div>
            <h1> {appObject.title}</h1>
            {appObject.subtitle && <p> {appObject.subtitle}</p>}
            <p>Here are your options: {getOptions(appObject.options)}</p>
            <button disabled={appObject.options.length ===0} onClick={onMakeDecision}>What should I do?</button>

            <button onClick={removeOptions}>Remove All</button>
            <ol>
                {
                    appObject.options.map((op)=>{
                        return <li key={op}> Option: {op}</li>
                    })
                }

            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>

        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();






