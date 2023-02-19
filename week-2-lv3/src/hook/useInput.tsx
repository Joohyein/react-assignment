import { useState } from "react";
import React from "react";

type InputProps = [string, (e: React.ChangeEvent<HTMLInputElement>) => void, (e: React.ChangeEvent<HTMLInputElement>) => void];

const useInput = ():InputProps => {
    const [value, setValue] = useState<string>("");
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const reset = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue("");
    }
    return [value, changeHandler, reset, ];
};

export default useInput;

