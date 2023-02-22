import { useState } from "react";
import React from "react";

type InputProps = [string, (e: React.ChangeEvent<any>) => void, ()=>void];

const useInput = ():InputProps => {
    const [value, setValue] = useState<string>("");
    const changeHandler = (e:React.ChangeEvent<any>) => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue("");
    }
    return [value, changeHandler, reset ];
};

export default useInput;