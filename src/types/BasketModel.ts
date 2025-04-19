class BasketModel implements IBasketModel {
    items: Map<string, number> = new Map();
    total: number = 0;

    constructor(protected events: IEventEmitter) {}

    add(id: string): void {
        const count = this.items.get(id) || 0;
        this.items.set(id, count + 1);
        this._changed();
    }

    remove(id: string): void {
        if (!this.items.has(id)) return;
        
        const count = this.items.get(id)! - 1;
        if (count <= 0) {
            this.items.delete(id);
        } else {
            this.items.set(id, count);
        }
        this._changed();
    }

    clear(): void {
        this.items.clear();
        this._changed();
    }

    getTotal(): number {
        return this.total;
    }

    protected _changed() {
        this.events.emit('basket:change', {
            items: Array.from(this.items.keys()),
            total: this.total
        } as IBasketChangeEvent);
    }
}