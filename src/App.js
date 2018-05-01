import React, { Component } from 'react';
import Validator from "./validator.js";
import CharComp from "./charcomp.js";
import './App.css';

/*
{this.state.inputArray.map(character=>{
          return <CharComp single={character}/>
        })}
*/


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleInput(e) {
    this.setState({ input: e.target.value });
  }
  handleDelete(id) {
    //prevState.data.filter(el => el != id )
    var inputArray = this.state.input.split("");
    var newInput = inputArray.filter(result => result !== id);
    var newResult = newInput.join("");
    this.setState({ input: newResult });
  }
  render() {
    var input_length;
    input_length = this.state.input.length;
    var inputArray = this.state.input.split("");

    return (
      <div className="App">
        <input type="text" placerholder="enter some text" onChange={this.handleInput}/>
        <p>
          {input_length}
        </p>
        <Validator inputLen={input_length}/>
        {inputArray.map((character,index)=><CharComp click={()=>this.handleDelete(character)}key={Math.floor((Math.random() * 100) + 1)} single={character}/>)}
        
      </div>
    );
  }
}

export default App;
