import React, { useState } from "react";
import type { BalanceProps } from "../../models/interfaces/BalancesProps/BalanceProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import "./Balance.css";

const Balance = ({emitMovement,currentBalance}: BalanceProps) => {
  const [renderInputForm, setRenderInputForm] = useState(false);
  const [IsFormValid, setIsFormValid] = useState(true);
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
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (InputName.trim().length === 0 || InputValue.trim().length === 0) {
      setIsFormValid(false);
      return;
    }

    hideInputForm();
    emitMovement({ 
      name: InputName,
      value: InputValue,
      type: "Input",
    });

  };

  const handleInputNameForm = (event: React.FormEvent<HTMLInputElement>) =>{
    const eventTarget = event.currentTarget as HTMLInputElement;
    const eventValue = eventTarget.value;
    InputValue.trim().length > 0 ? setIsFormValid(true) : setIsFormValid(false);
    setInputName(eventValue);
  }

  const handleInputValueForm = (event: React.FormEvent<HTMLInputElement>) =>{
    const eventTarget = event.currentTarget as HTMLInputElement;
    const eventValue = eventTarget.value;
    InputValue.trim().length > 0 ? setIsFormValid(true) : setIsFormValid(false);
    setInputValue(eventValue);

  }

  return (
    <div>

    <div className="balance_container">
      <div className="balance_card">
        <header className="balance_header">
          <FontAwesomeIcon icon={faWallet} color="#7af1a7" size="2x" />
          <h2>Saldo</h2>
        </header>
        <h3>{currentBalance > 0 ? `R$ ${currentBalance.toFixed(2)}` : "R$ 0,00"}</h3>

        {!renderInputForm && (
          <Button
          action={handleRenderInputForm}
          title="Entrada"
          priority="Input"
          />
        )}

        {renderInputForm && (
          <form onSubmit={formSubmitHandler}>
            <div className={`input_form_container ${
              !IsFormValid ? "invalid" : ""
              }`}
              >
                <input
                className="balance_input" 
                type="text"
                placeholder="Nome"
                value={InputName} 
                onChange={(handleInputNameForm)} 
                />

                <input 
                className="balance_input"
                type="text"
                placeholder="Valor"
                value={InputValue}
                onChange={handleInputValueForm}
                />



              </div>
              <div className="actions_form_buttons_container">
                <Button
                  action={hideInputForm}
                  title="Cancelar"
                  priority="Output"
                />
                <Button
                  title="Adicionar"
                  priority="Input"
                  type="submit"
                />
              </div>
          </form>
        )}

      </div>
    </div>
  </div>

  )}
export default Balance;