import React, {useState, useEffect, useRef} from "react";

function MyComponentAa(){

    const inputRef = useRef(null);

    console.log(ref);

     useEffect(() => {
        console.log("COMPONENT RENDERED");
     });

     function handleClick(){
      ref.current++;
     }
     return (
        <div>
            <button onClick={handleClick}>
            Click me !
        </button>
        <input ref = {inputRef}/>
        </div>
        
     );
}

export default MyComponentAa;