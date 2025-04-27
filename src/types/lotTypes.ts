export type ILotCategory =
    | 'софт-скил'
    | 'другое'
    | 'дополнительное'
    | 'кнопка'
    | 'хард-скил';

export interface ILotItem {
    id: string;
    title: string;
    description: string;
    image: string;
    category: ILotCategory;
    price: number | null;
}

export interface ILarek {
    isOrdered: boolean;
    placeInBasket: () => void;
    removeFromBasket: () => void;
}

export type ILot = ILotItem & ILarek;