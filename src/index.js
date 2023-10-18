import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Comp from './comp';
// import Hello from './Hello';
import ToDo from './Todo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Todo color="black" size="33"/>
    {/* <Hello color="black" size="33" clickEvent={()=>
      {
        console.log("who clicked my button??")
        alert("who clicked my button??")
      }}/> */}
    {/* <App/> */}
    {/* <Comp/> */}
    {/* <Hello name="Jayu" age="22"/>
    <Hello name="vinay" age="23"/>
    <Hello name="kunal" age="22"/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
