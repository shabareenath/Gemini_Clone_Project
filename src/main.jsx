// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import ContextProvider from "./context/context.jsx";
import React from "react";
import ContextProvider from "./context/context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(

    // <ContextProvider>
    //   <App />
    // </ContextProvider>

    <React.StrictMode>
      <ContextProvider>
        <App/>
      </ContextProvider>
      
    </React.StrictMode>
  
);


//COMPLETED ON AUG 9 2024  11.45 PM.....BY SHABAREENATH