import React, { useState, useEffect, createContext } from "react";
// import { css } from "@emotion/react";
// import ClipLoader from "react-spinners/ClipLoader";


// Can be a string as well. Need to ensure each key-value pair ends with ;

export const LoaderContext = createContext()

const LoaderProvider = function (props) {
    
    let [loading, setLoading] = useState(false);
    
    return (
     
            <LoaderContext.Provider value={{setLoading: setLoading}}>
            {/* <ClipLoader loading={loading}  size={150}  /> */}
            {
                loading &&
                <div className="loading" >Loading&#8230;</div>
            }
            

            {props.children}
            </LoaderContext.Provider>
            
            
    )
}

export default LoaderProvider