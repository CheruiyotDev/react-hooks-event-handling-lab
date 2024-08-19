import React from "react";

function handleOnchange() {
    console.log("Entering password...")
}

function Keypad (){

    return (
        <div>
            <input type="password" onChange={handleOnchange} />
        </div>
    )
}

export default Keypad;