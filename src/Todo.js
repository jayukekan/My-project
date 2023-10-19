import "./App.css";
import React from "react";

class InnerComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>This is innerComponent</div>;
  }
  componentWillUnmount() {
    console.log("inside componentWillUnmount");
  }
}

class App extends React.Component {
  state = { todo: [] };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // console.log("I am inside handleClick")
    // return true
    event.preventDefault();
    console.log("handleClick is Click");
    let newtodo = document.getElementById("addtodo").value;
    let newTodoObject = {
      id: new Date().getTime(),
      text: newtodo,
    };
    // console.log("Text readed: "+newtodo)
    // this.state.todo.push(newtodo)
    // console.log(this.state)
    this.state.todo.push(newTodoObject);
    this.setState({ todo: this.state.todo });
    console.log(this.state);
    document.getElementById("addtodo").value = "";
    this.state.todo.map((temptodo) => {
      return "ID :" + temptodo.id + ", text :" + temptodo.text;
    });
  }

  // print(){
  //     console.log("print is run")
  //     console.log(this.state)
  // }

  render() {
    // this.print()
    return (
      <div>
        <h1>TODO List</h1>
        <from onSubmit={this.handleClick}>
          <input type="text" id="addtodo" />
          <button type="submit">Add to TODO</button>
        </from>
        <div>
          {this.state.todo.map((temptodo) => {
            return <div>{temptodo.text}</div>;
          })}
        </div>
      </div>
    );
  }
}
export default App;
