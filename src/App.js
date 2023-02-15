import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          I was changed
        </p>
      </div>
    );
  }
}
export default App;
