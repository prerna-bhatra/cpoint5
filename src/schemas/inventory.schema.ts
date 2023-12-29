// src/grocery/grocery.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GroceryDocument = Grocery & Document;

@Schema()
export class Grocery {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    quantity: number;
}

export const GrocerySchema = SchemaFactory.createForClass(Grocery);
