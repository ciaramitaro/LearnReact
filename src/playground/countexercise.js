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
