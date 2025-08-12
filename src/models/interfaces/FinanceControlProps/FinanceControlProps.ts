import {Movement} from '../Movement/Movement';

export interface FinanceControlProps {
handleNewMovement: (movement: Movement) => void;
balance: number;
expense: number;

}