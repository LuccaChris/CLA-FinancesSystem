import type { Movement } from "../Movement/Movement";

export interface FinanceControlProps {
 
  handleNewMovement: (movement: Movement) => void; // Function to handle new movements
   balance: number;
  expense: number; 
}