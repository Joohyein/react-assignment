import { useState } from "react";
import React from "react";

type InputProps = [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void];

const useInput = (handler:(value:string)=>string|undefined):InputProps => {
    const [value, setValue] = useState<string>("");
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = handler(e.target.value);
        if(value !== undefined) {setValue(value)};
        
    };
    const reset = () => {
        setValue('');
    }
    return [ value, changeHandler, reset ];
};

export default useInput;