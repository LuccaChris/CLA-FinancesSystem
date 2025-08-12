import type { Movement } from "../Movement/Movement";

export interface FinanceControlProps {
  balance: number; // Current balance
  expense: number; // Current expense
  handleNewMovement: (movement: Movement) => void; // Function to handle new movements
}