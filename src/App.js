// import logo from './logo.svg';
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./component1/Header";
import Footer from "./component1/Footer";
import Sidebar from "./component1/Sidebar";
// import MyNavbar from './component/MyNavbar.js';
// import Comp from './comp.js';

// import React from 'react';
// import Navbar from './Navbar.js';

function App(props) {
  //   const App = ()=>{
  //     return<Navbar />;
  //     };

  //   console.log(props.color);
  //   console.log(props.size);
  //   console.log(props.clickEvent)

  //   class App extends React.Component{
  //       constructor(props){
  //             super(props)
  //       }
  //       // overridden render function
  //       render(){
  //             console.log(this.props)
  //             return <button onClick={this.props.clickEvent}>click me</button>
  //       }
  // }

  return (
    <div className="App">
      {/* <button onClick={props.clickEvent}>Click me</button> */}
      {/* <MyNavbar/> */}
      {/* <Navbar/> */}
      {/* <comp/> */}
      <Header />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;

// import React from 'react';
// import Navbar from './Navbar.js';
// const App = ()=>{
//       return<Navbar />;
//    };

//    export default App;
