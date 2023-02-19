import { useState } from "react";
import React from "react";

type InputProps = [boolean, (value: React.MouseEventHandler<HTMLButtonElement>) => void];

const useModalOpen = ():InputProps => {
    const [value, setValue] = useState<boolean>(false);
    const Handler = () => {
        setValue(true);
    };
   
    return [value, Handler];
};

export default useModalOpen;
