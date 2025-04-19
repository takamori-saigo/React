class BasketView implements IView {
    constructor(protected container: HTMLElement) {}

    render(data: IBasketViewData): HTMLElement {
        if (data) {
            this.container.replaceChildren(...data.items);
        }
        return this.container;
    }
}