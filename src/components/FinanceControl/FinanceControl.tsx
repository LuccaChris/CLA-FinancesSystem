import type { FinanceControlProps } from "../../models/interfaces/FinanceControlProps/FinanceControlProps";
import type { Movement } from "../../models/interfaces/Movement/Movement";
import Balance from "../Balnace/Balance";
import Expense from "../Expense/Expense";
import "./FinanceControl.css"

const FinanceControl = ({ 
  handleNewMovement,
  balance,
  expense,
}: FinanceControlProps) => {
  
const receiveNewMovement = (movement: Movement) => {
        movement && handleNewMovement(movement);
  };

  return (
    <div className="container_finances">
      <Balance currentBalance={balance} emitMovement={receiveNewMovement}/>
      <Expense currentExpense={expense} currentBalance={balance} emitMovement={receiveNewMovement}/>
    </div>
  );
};

export default FinanceControl;
