import "./App.css"
import React from "react"


class innerComponent extends React.Component{
    render(){
        return <div>Inner component is here...</div>
    }
    componentDidMount(){
        console.log("this is componentDidMount...")
    }
    
    componentWillUnmount(){
        console.log("thisb is coponentWillUnmount..")
    }

    shouldComponentUpdate()
  {
    console.log("Inside shouldComponentUpdate")
    return true
  }
}

export default innerComponent;