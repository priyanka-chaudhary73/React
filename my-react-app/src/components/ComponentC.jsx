import React, { useContext } from "react";
import { UserContext } from "./MyComponentA";
import MyComponentD from './MyComponentD.jsx'

function MyComponentC(){

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>MyComponentC</h1>
            <h2>{'Hello again ${user}'}</h2>
            <MyComponentD/>
        </div>
    );
}

export default MyComponentC;