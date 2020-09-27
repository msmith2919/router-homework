import React from 'react';
import DataPage from "./DataPage";

function Objects(){
    const [array]=React.useState([{
        name: "Bonnie",
        age: 76,
        color: "pink",
        id: "Grandma"
    },{
        name: "Bonnie",
        age: 74,
        color: "Pink",
        id: "2"
    },{
        name: "Corbin",
        age: 25,
        color: "Cyan",
        id: "3"
    }
    ]);
    const arrayEles = array.map((bx, idx)=>
        <DataPage name={bx.name}  age={bx.age} color={bx.color} id={bx.id} key={idx}/>
    );
    return(
        <div>
            {arrayEles}
        </div>
    )
}

export default Objects;
