import { useState } from "react";
import type { BalanceProps } from "../../models/interfaces/BalancesProps/BalanceProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import "./Balance.css";

const Balance = ({emitMovement,currentBalance}: BalanceProps) => {
  const [renderInputForm, setRenderInputForm] = useState(false);
  const [IsFormValid, setIsFormValid] = useState(false);
  const [InputName, setInputName] = useState("");
  const [InputValue, setInputValue] = useState("");

  const handleRenderInputForm = () => {
    setRenderInputForm(!false);
  };
  const hideInputForm = () => {
    setRenderInputForm(false);
    setIsFormValid(true);
    setInputName("");
    setInputValue("");
  };

  return (
    <div className="balance_container">
      <div className="balance_card">
        <header className="balance_header">
          <FontAwesomeIcon icon={faWallet} color="#000" size="2x" />
          <h2>Saldo</h2>
        </header>
        <h3>{currentBalance > 0 ? `R$ ${currentBalance.toFixed(2)}` : "R$ 0,00"}</h3>
      </div>
    </div>

  
  )}
export default Balance;