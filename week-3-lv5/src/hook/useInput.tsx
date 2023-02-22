import { useState } from "react";
import React from "react";

type InputProps = [string, (e: React.ChangeEvent<HTMLInputElement>) => void, (v:string) => void];

const useInput = (handler:(value:string)=>string|undefined):InputProps => {
    const [value, setValue] = useState<string>("");
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = handler(e.target.value);
        if(value !== undefined) {setValue(value)};
        
    };
    const reset = (v:string) => {
        setValue(v);
    }
    return [ value, changeHandler, reset ];
};

export default useInput;