import type { ButtonProps } from "../../models/interfaces/ButtonProps/ButtonProps";
import "./Button.css"


const Button = ({title, priority, action, type, disabled}: ButtonProps) => {
    return(
        <button
        className={`btn ${priority === "Input"? "greenBg" : "redBg"}`}
        onClick={action} 
        type={type ? type : "button"} 
        disabled={disabled ? disabled : false}
        >
            
        {title}
        </button>
    );
};

export default Button;