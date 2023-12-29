import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryController } from './inventory/inventory.controller';
import { InventoryService } from './inventory/inventory.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Grocery, GrocerySchema } from './schemas/inventory.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://pravya2022:PI6hLNs2qhGjdk3U@cluster0.jokxx.mongodb.net/cpoint5', {}),
    MongooseModule.forFeature([
      { name: Grocery.name, schema: GrocerySchema },
    ])
  ],
  controllers: [AppController, InventoryController],
  providers: [AppService, InventoryService],
})
export class AppModule { }

