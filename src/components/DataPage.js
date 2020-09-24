import React from 'react';
import {Link} from "react-router-dom";

function DataPage(props){
    const [name]=React.useState(props.name);
    const [age]=React.useState(props.age);
    const [color]=React.useState(props.color);
    const [id]=React.useState(props.id);

    return(
        /*<div>
            <h1>{props.match.params.id}</h1>
        </div>*/
        <div style={{backgroundColor:color, Height:"200px", Width:"200px"}}>
            <h2>Name: {name}</h2>
            <h3>Age: {age}</h3>
            <h3>ID: {id}</h3>
            <Link to={"/dataPage/:id"}>{id}</Link>

        </div>
    )
}

export default DataPage