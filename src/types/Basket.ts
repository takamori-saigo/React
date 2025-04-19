interface IBasketModel {
    items: Map<string, number>;
    total: number;
    add(id: string): void;
    remove(id: string): void;
    clear(): void;
    getTotal(): number;
}

interface IBasketItemViewData {
    id: string;
    title: string;
    price: string;
    count: number;
}

interface IBasketViewData {
    items: HTMLElement[];
    total: string;
}