import React from 'react';
import DataPage from "./DataPage";

function Objects(){
    const [array]=React.useState([{
        name: "Mason",
        age: 20,
        color: "Orange",
        id: "My favorite color is Orange"
    },{
        name: "Bonnie",
        age: 74,
        color: "Pink",
        id: "My favorite Color is Pink"
    },{
        name: "Corbin",
        age: 25,
        color: "Cyan",
        id: "My favorite color is Cyan"
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
