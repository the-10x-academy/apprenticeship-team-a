//import logo from "../../logo.svg";
import React from "react";
import "./HomePage.css";

function HomePage() {
    return (

      <div>
        <div className="left">  {/* takes care of left arrangement */}
            <img src= "/lens-1418954@2x.png" alt ="" className = 'img'></img>   {/* takes care of Image arrangement */}
        </div>
        <div className="right"> {/* takes care of right arrangement */}
            <h1>10x Team 01</h1>
            <button>Enter</button> {/* takes care of button */}
        </div>
      </div>
	);
	
}
export default HomePage;