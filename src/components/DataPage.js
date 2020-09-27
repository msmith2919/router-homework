import React from "react";
import {Link} from "react-router-dom";
import Box from "./Box";

function  DataPage(){
    const data = [{name:"Bonnie", age:76, color:"pink", id:"Grandma"},
        {name:"Corbin", age:25, color:"orange", id:"Friend"},
        {name:"Jolee", age:49, color:"red", id:"Mom"}];

    return(
        <div>
            <nav>
                <Link to={`/data/${data[0].id}/${data[0].name}/${data[0].age}/${data[0].color}`}>
                    <Box display={"Name: "+data[0].name} color={data[0].color}/></Link>
                <Link to={`/data/${data[1].id}/${data[1].name}/${data[1].age}/${data[1].color}`}>
                    <Box display={"Name: "+data[1].name} color={data[1].color}/></Link>
                <Link to={`/data/${data[2].id}/${data[2].name}/${data[2].age}/${data[2].color}`}>
                    <Box display={"Name: "+data[2].name} color={data[2].color}/></Link>
            </nav>

        </div>
    )
}

export default DataPage;