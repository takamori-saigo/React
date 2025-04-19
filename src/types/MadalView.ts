class ModalView implements IView {
    constructor(protected container: HTMLElement) {}

    render(data: IModalData): HTMLElement {
        // ... рендеринг модального окна
        return this.container;
    }
}
