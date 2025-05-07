import { Events, ILot, ILotCategory } from '../types';
import { Model } from '../components/base/Model';

class LotItem extends Model<ILot> {
    id: string;
    title: string;
    description: string;
    image: string;
    category: ILotCategory;
    price: number;
    isOrdered: boolean;

    placeInBasket(): void {
        this.isOrdered = true;
        this.emitChanges(Events.CHANGE_LOT_IN_BASKET, { isOrdered: this.isOrdered });
    }

    removeFromBasket(): void {
        this.isOrdered = false;
        this.emitChanges(Events.CHANGE_LOT_IN_BASKET, { isOrdered: this.isOrdered });
    }
}

export { LotItem };