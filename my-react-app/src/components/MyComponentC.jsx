import React, { useContext } from "react";
import { UserContext } from "./MyComponentA";
import MyComponentAb from './MyComponentAb.jsx';

function MyComponentC() {

    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>MyComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>
            <MyComponentAb />
        </div>
    );
}

export default MyComponentC;


