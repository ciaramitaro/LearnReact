//import React, { Component } from 'react';
//import * as ReactDOM from "react-dom";

const appRoot = document.getElementById('app');
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions =this.handleDeleteOptions.bind(this);
        this.handlePick =this.handlePick.bind(this);
        this.handleAddOption =this.handleAddOption.bind(this);
        this.state ={
            options: props.options
        };
    }
    handleDeleteOptions(){
        this.setState(()=>{
            return{
                options: []
            }
        })
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const optionPicked= this.state.options[randomNum];
        alert(optionPicked);
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }
        this.setState((prevState)=>{
            return{
                options: prevState.options.concat(option)
            }
        })
    }
    render(){
        const subtitle ='Put your life in the hands of a computer';
        return(
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}
IndecisionApp.defaultProps={
    options:[]
}
const Header=(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );

}

Header.defaultProps={
    title: 'Indecision'
};
// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//           <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }
const Action=(props)=>{
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
}

// class Action extends React.Component{
//     render(){
//         return (
//           <div>
//               <button
//                   onClick={this.props.handlePick}
//                   disabled={!this.props.hasOptions}>
//                   What should I do?
//               </button>
//           </div>
//         );
//     }
// }
class Options extends React.Component{
    render(){
        return(
            <div>
                {<button onClick={this.props.handleDeleteOptions}>Remove All</button>}
                {
                    this.props.options.map((op) => <Option key={op} optionText={op}/>
                    )
                }
                <Option />
            </div>
        );
    }
}
const Option=(props)=>{
    return(
        <div>
            {props.optionText}
        </div>
    )
}
// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption= this.handleAddOption.bind(this);
        this.state={
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        //method in Indecision component called
        const error = this.props.handleAddOption(option);
        e.target.elements.option.value ='';

        this.setState(()=>{
            //If the object equals the state object it's returning you can just say the var name
            //instead of error: error
            return{error}
        });

    };
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                {/*method inside component called*/}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
// const User = (props)=>{
// return(
//     <div>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//     </div>
// )
// };
ReactDOM.render(<IndecisionApp  />, appRoot);