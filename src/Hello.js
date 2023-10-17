import "./App.css";
import React from "react";

class InnerComponent extends React.Component {
  // render()
  constructor() {
    return <div>Inner component is here..</div>;
    super();
  }

  render() {
    console.log("#### mounting Innercomponent####");
    return <div>this is inner component</div>;
  }

  componentWillUnmount() {
    console.log("unmounting innercomponent");
    console.log("Inside componentWillUnmount");
  }
}

class App extends React.Component  {
  // state={counter:0 , InnerComponent:<InnerComponent/>}
  state = {
    counter: 0,
    innerComponent: <InnerComponent />,
  };

  constructor(props) {
    super(props);
    console.log("I am inside constructer");
  }

  innerComponent = () => {
    this.setState({ counter: this.state.counter + 1 });

    if (this.state.counter % 2 == 0) {
      this.setState({ innerComponent: <InnerComponent /> });
    } else {
      this.setState({ innerComponent: <div>unmounting</div> });
    }

    // this.setState({innerComponent:<div>component is unmounted</div>})
  };

  render() {
    console.log("Inside the render method");
    // console.log(this.props)
    return (
      <div>
        <button onClick={this.innerComponent}>Click me</button>
        <br />
        counter:{this.state.counter}
        <br />
        {/* {this.state.counter} */}
      </div>
    );
  }

  componentDidMount() {
    console.log("I am inside componentDidMount");
  }
}
export default App;
