import type { FinanceControlProps } from "../../models/interfaces/FinanceControlProps/FinanceControlProps";
import type { Movement } from "../../models/interfaces/Movement/Movement";
import "./FinanceControl.css"

const FinanceControl = ({ handleNewMovement, balance, expense }: FinanceControlProps) => {
    const receiveNewMovement = (movement: Movement) => {
        movement && handleNewMovement(movement);
        return (
            <div>
                {/* Render the finance control component here */}
                {/* Example: Displaying balance and expense */}
            </div>
        )
    }
}

export default FinanceControl;