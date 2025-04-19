class BasketItemView implements IView {
    protected id: string | null = null;

    constructor(
        protected container: HTMLElement,
        protected events: IEventEmitter
    ) {}

    render(data: IBasketItemViewData): HTMLElement {
        if (data) {
            this.id = data.id;
            // ... рендеринг элемента корзины
        }
        return this.container;
    }
}