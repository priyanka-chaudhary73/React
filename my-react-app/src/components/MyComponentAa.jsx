import React, {useState, useEffect, useRef} from "react";

function MyComponentAa(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

     useEffect(() => {
        console.log("COMPONENT RENDERED");
     });

     function handleClick1(){
        inputRef1.current,focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";

     }

     
     function handleClick2(){
        inputRef2.current,focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";

     }

     
     function handleClick3(){
        inputRef3.current,focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";

     }
     return (
        <div>
            <button onClick1={handleClick1}>
            Click me 1!
        </button>
        <input ref = {inputRef1}/>

          <button onClick2={handleClick2}>
            Click me 2!
        </button>
        <input ref = {inputRef2}/>

          <button onClick3={handleClick3}>
            Click me 3!
        </button>
        <input ref = {inputRef3}/>
        </div>
        
     );
}

export default MyComponentAa;