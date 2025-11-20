import React, { useContext } from "react";
import { UserContext } from "./MyComponentA";

function MyComponentAb(){

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>MyComponentAb</h1>
            <h2>{'Bye ${user}'}</h2>
        </div>
    );
}

export default MyComponentAb;