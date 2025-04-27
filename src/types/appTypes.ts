import { ILot } from './lotTypes';
import { IOrder } from './orderTypes';

export type CatalogChangeEvent = {
    catalog: ILot[];
};

export type IBasketItem = Pick<ILot, 'id' | 'title' | 'price'>;

export interface IAppState {
    catalog: ILot[];
    basket: ILot[];
    order: IOrder;
    preview: ILot;
    isLotInBasket(item: ILot): boolean;
    clearBasket(): void;
    getTotalAmount(): number;
    getBasketIds(): number;
    getBasketLength(): number;
    initOrder(): IOrder;
}