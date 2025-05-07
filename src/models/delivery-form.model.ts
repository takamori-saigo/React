import { Events, IPaymentType } from '../types';
import { ensureElement } from '../utils/utils';
import { IEvents } from '../components/base/events';
import { Form } from './form.model';

interface IOrderDeliveryForm {
    payment: IPaymentType;
    address: string;
}

class DeliveryForm extends Form<IOrderDeliveryForm> {
    protected _paymentContainer: HTMLDivElement;
    protected _paymentButtons: HTMLButtonElement[];

    constructor(container: HTMLFormElement, events: IEvents) {
        super(container, events);

        this._paymentContainer = ensureElement<HTMLDivElement>(
            '.order__buttons',
            this.container
        );
        this._paymentButtons = Array.from(
            this._paymentContainer.querySelectorAll('.button_alt')
        );

        this._paymentContainer.addEventListener('click', (e: MouseEvent) => {
            const target = e.target as HTMLButtonElement;
            this.setClassPaymentMethod(target.name);
            events.emit(Events.SELECT_PAYMENT, { target: target.name });
        });
    }

    setClassPaymentMethod(className: string): void {
        this._paymentButtons.forEach((btn) => {
            if (btn.name === className) {
                this.toggleClass(btn, 'button_alt-active', true);
            } else {
                this.toggleClass(btn, 'button_alt-active', false);
            }
        });
    }

    set payment(value: string) {
        this.setClassPaymentMethod(value);
    }

    set address(value: IPaymentType) {
        (this.container.elements.namedItem('address') as HTMLInputElement).value = value;
    }
}

export { DeliveryForm, IOrderDeliveryForm };