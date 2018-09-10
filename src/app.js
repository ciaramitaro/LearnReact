//import React, { Component } from 'react';
//import * as ReactDOM from "react-dom";

const appRoot = document.getElementById('app');
class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision';
        const subtitle ='Put your life in the hands of a computer';
        const options =['one', 'two','four'];
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options}/>
                <AddOption options={options}/>
            </div>
        )
    }
}
class Header extends React.Component{
    render(){
        return (
            <div>
          <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    handlePick(){

        alert('Handle Pick')
    }
    render(){
        return (
          <div>
              <button onClick={this.handlePick}>What should I do?</button>
          </div>
        );
    }
}
class Options extends React.Component{
    constructor(props){
        super(props);
        this.removeAll= this.removeAll.bind(this);

    }
    removeAll(){

        console.log(this.props.options);
    }
    render(){
        return(
          <div>
              {<button onClick={this.removeAll}>Remove All</button>}
              {
                  this.props.options.map((op) => <Option key={op} optionText={op}/>
                  )
              }
              <Option />
          </div>
        );
    }
}
class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option)
        {
            alert('Handled Add Option');
        }
    };
    render(){
        return(
          <div>
              <form onSubmit={this.handleAddOption}>
                  <input type="text" name="option"/>
                  <button>Add Option</button>
              </form>
          </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, appRoot);






