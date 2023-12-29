import { Body, Controller, Get, Post } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
    constructor(
        private inventoryService: InventoryService
    ) { }

    @Post()
    addItem(@Body() body) {
        return this.inventoryService.addItem(body)
    }

    @Get()
    readItem() {
        return this.inventoryService.readItems()
    }
}
