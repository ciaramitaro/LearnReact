class Counter extends React.Component{
    constructor (props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state ={
            count:0
        };
    }

    //To change state we call a React method setState, it accepts an argument of a
    //function where we return an object. To set or access the previous state we
    //pass in the prevState argument. You are not overriding the state method, just
    //changing the state attribute. This is useful if you have multiple state
    //attributes.
    handleAddOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count +1
            }
        });
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count -1
            }
        });

    }
    //Dont need prevState because we are just setting count back to 0
    handleReset(){
        this.setState(()=>{
           return{
               count:0
           }
        });

    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}
ReactDOM.render(<Counter />, document.getElementById('app'));

// let count =0;
// const buttonID= 'my-id';
// let addOne=() =>{
//     count++;
//     renderContentApp();
// };
//
// let minusOne=()=>{
//     count--;
//     renderContentApp();
// };
//
// let reset=()=>{
//     count=0;
//     renderContentApp();
// }
//
// const renderContentApp=()=>{
//     const template2 =(
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne} className="button">+1</button>
//             <button onClick={minusOne}> -1</button>
//             <button onClick={reset}> reset</button>
//         </div>
//     )
//    // ReactDOM.render(template2, appRoot);
// }
//
// renderContentApp();
