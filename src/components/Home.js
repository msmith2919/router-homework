import React from "react";
import {Link} from "react-router-dom";
function Home(){
    return (
        <div className="homePage">
            <div className="block1" style={{marginTop: "20px", height: "100px", width: "100px", borderWidth: "2px", borderStyle: "solid", borderColor:"Green", backgroundColor:"Green"}}>
                <Link to={"/Green"}>Green</Link>
            </div>
            <div className="block1" style={{marginTop: "20px", height: "100px", width: "100px", borderWidth: "2px", borderStyle: "solid", borderColor:"Cyan", backgroundColor:"Cyan"}}>
                <Link to={"/Cyan"}>Cyan</Link>
            </div>
            <div className="block1" style={{marginTop: "20px", height: "100px", width: "100px", borderWidth: "2px", borderStyle: "solid", borderColor:"Purple", backgroundColor:"Purple"}}>
                <Link to={"/Purple"}>Purple</Link>
            </div>

        </div>
    )
}

export default Home;
