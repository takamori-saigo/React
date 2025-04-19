interface ICatalogModel {
    items: IProduct[];
    setItems(items: IProduct[]): void;
    getProduct(id: string): IProduct | undefined;
    getProducts(ids: string[]): IProduct[];
}

class CatalogModel implements ICatalogModel {
    items: IProduct[] = [];

    constructor(protected events: IEventEmitter) {}

    setItems(items: IProduct[]): void {
        this.items = items;
        this.events.emit('catalog:changed', this.items);
    }

    getProduct(id: string): IProduct | undefined {
        return this.items.find(item => item.id === id);
    }

    getProducts(ids: string[]): IProduct[] {
        return this.items.filter(item => ids.includes(item.id));
    }
}