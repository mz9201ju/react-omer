import React from "react";
import myImage from "./image/1.png"
import './style.css';

function App() {
    return (<div className="container">
        <img src={myImage} alt="My Image"/>
    </div>);
}

export default App;