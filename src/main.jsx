import "./index.css";

import App from "./App.jsx";
import Interview from "./interview/Interview";
import InterviewPro from "./interview-pro/InterviewPro";
import React from "react";
import ReactDOM from "react-dom/client";

const customButton = (<button>Hola react erer</button>);

//Ejemplo de componente
const CustomButton2 = ({text}) => {
  return (<button>Hola react {text}</button>);
};


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  
  // <React.Fragment>
  //   {customButton}
  //   <CustomButton2 text="probandoProps"></CustomButton2>
  // </React.Fragment>


    // <App />


    // <Interview />
 
    <InterviewPro />

);
