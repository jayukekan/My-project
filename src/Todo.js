import "./App.css";
import React from "react";

class InnerComponent extends React.Component{
    constructor(){
        super()
    }
    render(){
        return<div>This is innerComponent</div>
    }
    componentWillUnmount(){
        console.log("inside componentWillUnmount")
    }
}

class App extends React.Component{
    state={todo: [] }
    constructor(props){
        super(props)
            this.handleClick= this.handleClick.bind(this)
        
    }

    handleClick(event){
        console.log("I am inside handleClick")
        return true
        event.preventDefault()
        console.log("handleClick is Click")
        let newtodo= document.getElementById("addtodo").value
        console.log("Text readed: "+ newtodo)
        this.state.todo.push(newtodo)
        document.getElementById("addtodo").value = ""


    }

    print(){
        console.log("print is run")
        console.log(this.state)
    }

    render(){
        this.print()
        return <div>
            <h1>TODO List</h1>
            <from onSubmit={this.handleClick}>
                <input type="text" id="addtodo"/>
                <button type="submit">Add to TODO</button>
            </from>
        </div>
    }
}
export default App;