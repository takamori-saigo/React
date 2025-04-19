interface IOrderForm {
    email: string;
    phone: string;
    address: string;
    payment: 'online' | 'offline';
    items: string[];
    total: number;
}