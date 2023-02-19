import { useState } from "react";
import React from "react";

type InputProps = [string, (e: React.ChangeEvent<HTMLSelectElement>) => void];

const useSelect = ():InputProps => {
    const [value, setValue] = useState<string>("");
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
    };
    
    return [ value, handleSelect ];
};

export default useSelect;