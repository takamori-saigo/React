import { IOrderContactsForm } from '../models/contacts-form.model';
import { IOrderDeliveryForm } from '../models/delivery-form.model';
import { ILot } from './lotTypes';

export type IPaymentType = 'card' | 'cash';
export type IOrderForm = IOrderDeliveryForm & IOrderContactsForm;

export interface IOrderAPI extends IOrderForm {
    items: string[];
    total: number;
}

export interface IOrder extends IOrderForm {
    items: ILot[];
    validateOrder(): void;
    clearOrder(): void;
    validatePayment(): void;
    validateAddress(): void;
    validateEmail(): void;
    validatePhone(): void;
    postOrder(): void;
}

export type IFormErrors = Partial<Record<keyof IOrderForm, string>>;