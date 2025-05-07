import { Events } from '../types';
import { ensureElement, formatNumber } from '../utils/utils';
import { Component } from '../components/base/Component';
import { IEvents } from '../components/base/events';

interface IPage {
    counter: number;
    galery: HTMLElement[];
    locked: boolean;
}

class Page extends Component<IPage> {
    private _counter: HTMLElement;
    private _gallery: HTMLElement;
    private _wrapper: HTMLElement;
    private _basket: HTMLButtonElement;

    constructor(container: HTMLElement, events: IEvents) {
        super(container, events);

        this._counter = ensureElement<HTMLElement>('.header__basket-counter');
        this._gallery = ensureElement<HTMLElement>('.gallery');
        this._wrapper = ensureElement<HTMLElement>('.page__wrapper');
        this._basket = ensureElement<HTMLButtonElement>('.header__basket');

        this._basket.addEventListener('click', () => {
            this.events.emit(Events.OPEN_BASKET);
        });
    }

    set counter(value: number) {
        this.setText(this._counter, formatNumber(value));
    }

    set galery(items: HTMLElement[]) {
        this._gallery.replaceChildren(...items);
    }

    set locked(value: boolean) {
        this.toggleClass(this._wrapper, 'page__wrapper_locked', value);
    }
}

export { Page };