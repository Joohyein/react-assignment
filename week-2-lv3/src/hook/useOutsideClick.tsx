import React, { useEffect } from "react";

// type handlerType = (React.SetStateAction<boolean>)

export const useOutsideClickClose = (handler:()=>void) => {
    const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  
    useEffect(() => {
      function handleClickOutside(event:any) {
        if (ref.current && !ref.current.contains(event.target)) {
          handler();
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, handler]);
  
    return ref;
  };

// ref.current useRef가 적용됐는지 확인