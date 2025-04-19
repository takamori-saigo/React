class ProductCardView implements IView {
    constructor(
        protected container: HTMLElement,
        protected events: IEventEmitter
    ) {}

    render(data: IProduct): HTMLElement {
        this.container.dataset.id = data.id;
        // ... рендеринг карточки
        return this.container;
    }
}