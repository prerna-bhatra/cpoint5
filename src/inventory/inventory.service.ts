import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Grocery } from 'src/schemas/inventory.schema';

@Injectable()
export class InventoryService {
    constructor(
        @InjectModel('Grocery') private readonly groceryModel: Model<Grocery>

    ) {

    }

    async addItem({
        name,
        price,
        quantity
    }) {
        try {

            console.log("ADD ITEM");

            const item = new this.groceryModel({
                name,
                price,
                quantity
            })

            const saveItem = await item.save();
            // console.log({ saveItem });
            return saveItem

        } catch (error) {
            throw error;
        }

    }

    async readItems() {
        try {
            const items = await this.groceryModel.find();
            // console.log({ items });

            return items

        } catch (error) {
            throw error;
        }
    }
}
