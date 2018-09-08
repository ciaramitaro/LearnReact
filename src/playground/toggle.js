

const appRoot = document.getElementById('app');

const toggleVisibility=()=>
{
    visibility = !visibility;
    render();
}

let visibility =false;
const list= '';
const render=()=>{
    const template =(
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                { visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey, these are some details you cna now see.</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
}


render();