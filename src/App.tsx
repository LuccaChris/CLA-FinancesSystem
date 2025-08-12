
import { useState } from 'react'
import './App.css'
import type { Movement } from './models/interfaces/Movement/Movement'

function App() {
  const [currentBalance, setCurrentBalance] = useState(0)//status do saldo atual
  const [currentExpense, setCurrentExpense] = useState(0)//status da despesa atual
  const [movementsItems, setMovementsItems] = useState<Array<Movement>>([]);//status de movimentação

  const setNewMovement = (movement: Movement) => {
    if (movement) {
      setMovementsItems((prevMovements) =>{
        const movements = [... prevMovements];
        movements.unshift({
          name: movement.name,
          value: movement.value,
          type: movement.type,
          id: Math.random().toString(36)
        });
        return movements;
      });

      movement.type === "Input" && setCurrentBalance((prevBalance) => prevBalance + Number(movement.value));
      if (movement.type === "Output") {
        movement.type === "Output" && setCurrentExpense((prevExpense) => prevExpense + Number(movement.value));
        currentBalance > 0 && setCurrentBalance((prevBalance) => prevBalance - Number(movement.value));
    }
  }
  return (
    <>
    </>
  )
}

export default App
