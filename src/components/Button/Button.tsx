import './Button.css'

import { FC} from "react";

type ButtonProps = {
    text:string;
    onClick: () => void;
  }

export const Button:FC<ButtonProps> = ({text, onClick}) =>{ 
    return ( 
        <button className="button" onClick={onClick}>
            {text}
        </button>
    )
}