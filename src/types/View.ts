interface IView {
    render(data?: unknown): HTMLElement;
}

interface IViewConstructor<T extends IView = IView> {
    new (container: HTMLElement, events?: IEventEmitter): T;
}