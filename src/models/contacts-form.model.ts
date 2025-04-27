import { IEvents } from '../components/base/events';
import { Form } from './form.model';

interface IOrderContactsForm {
    email: string;
    phone: string;
}

class ContactsForm extends Form<IOrderContactsForm> {
    constructor(container: HTMLFormElement, events: IEvents) {
        super(container, events);
    }

    set phone(value: string) {
        (this.container.elements.namedItem('phone') as HTMLInputElement).value = value;
    }

    set email(value: string) {
        (this.container.elements.namedItem('email') as HTMLInputElement).value = value;
    }
}

export { IOrderContactsForm, ContactsForm };