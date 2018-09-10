class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.handleParagraph = this.handleParagraph.bind(this);
        this.state={
            visibility :false
        };
    }
    handleVisibility(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            }
        })
    }
    handleParagraph(){
       if(this.state.visibility)
       {
           return <p> More Information!!</p>
       }
       else{
           return''
       }
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibility}>
                     {this.state.visibility ? 'Hide Details': 'Show Details'}
                </button>
                {this.handleParagraph()}
            </div>
        );
    }
}
ReactDOM.render(<Toggle />, document.getElementById('app'));


//const appRoot = document.getElementById('app');
// const toggleVisibility=()=>
// {
//     visibility = !visibility;
//     render();
// }
//
// let visibility =false;
// const render=()=>{
//     const template =(
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 { visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey, these are some details you can  now see.</p>
//                 </div>
//             )}
//         </div>
//     );
//    // ReactDOM.render(template, appRoot);
// }
//
//
// render();