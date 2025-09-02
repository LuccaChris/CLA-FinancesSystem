import type { ButtonProps } from "../../models/interfaces/ButtonProps/ButtonProps";
import "./Button.css"


const Button = ({title, priority, action, type, disabled}: ButtonProps) => {
    return(
        <button className={`btn ${priority}`} onClick={action} type={type} disabled={disabled}>
            {title}
        </button>
    );
};

export default Button;