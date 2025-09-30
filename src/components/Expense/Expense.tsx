import { useState } from "react";
import type { ExpenseProps } from "../../models/interfaces/ExpenseProps/ExpenseProps";
import "./Expense.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const Expense = ({
    emitMovement,
    currentExpense,
    currentBalance
    }: ExpenseProps) => {
  const [renderInputForm, setRenderInputForm] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState("");

  // Alterna exibição do formulário
  const handleRenderInputForm = () => setRenderInputForm(!renderInputForm);

  // Reseta o formulário
  const handleResetForm = () => {
    setRenderInputForm(false);
    setIsFormValid(true);
    setInputName("");
    setInputValue("");
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(inputName.trim().length === 0 || inputValue.trim().length === 0) {
        setIsFormValid(false);
    return;
    }

    if(currentBalance >= +inputValue) {
        hideInputForm();
        emitMovement({
            name: inputName,
            value: inputValue,
            type: "Output",
        });
    } else {
        setIsFormValid(false);
    }
        
        return;
    }

    const hideInputForm = () => {
        setRenderInputForm(false);
        setIsFormValid(true);
        setInputName("");
        setInputValue("");
    }

    const handleInputNameForm = (event: React.FormEvent<HTMLInputElement>) => {
        const eventTarget = event.currentTarget as HTMLInputElement;
        const eventValue = eventTarget.value;
        inputName.trim().length > 0 ? setIsFormValid(true) : setIsFormValid(false);
        setInputName(eventValue);
    };

    const handleInputValueForm = (event: React.FormEvent<HTMLInputElement>) => {
        const eventTarget = event.currentTarget as HTMLInputElement;
        const eventValue = eventTarget.value;
        inputValue.trim().length > 0 ? setIsFormValid(true) : setIsFormValid(false);
        setInputValue(eventValue);
    };



  return (
    <div>
      <div className="expense_container">
        <div className="expense_card">
          <header className="expense_header">
            <FontAwesomeIcon icon={faPercent} color="#E43F4d" size="2x" />
            <h2>Despesas</h2>
          </header>
          <h3>{currentExpense > 0 ? `R$ ${currentExpense.toFixed(2)}` : "R$ 0,00"}</h3>
        

          {!renderInputForm && (
            <Button
              action={handleRenderInputForm}
            title="Saída"
            priority="Output"
            disabled={currentBalance === 0}
            />
          )}

            {renderInputForm && (
                <form onSubmit={formSubmitHandler}>
                <div
                className={`input_form_container ${!isFormValid ? "invalid" : ""}`}>
                    <input 
                    className="expense_input"
                    type="text" 
                    placeholder="Nome"
                    value={inputName}
                    onChange={handleInputNameForm}
                    />

                    <input 
                    className="expense_input"
                    type="text" 
                    placeholder="Value"
                    value={inputValue}
                    onChange={handleInputValueForm}
                    />
                    
                </div>
                <div className="actions_form_buttons_container">
                    <Button 
                    title="Cancelar"
                    priority="Output"
                    action={hideInputForm}
                    />
                    <Button
                    type="submit"
                    title="Adicionar"
                    priority="Input"

                    />
                
                </div>

                </form>)}
        </div>
      </div>
    </div>
  );
};

export default Expense;

