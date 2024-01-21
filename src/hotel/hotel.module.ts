import { Module } from '@nestjs/common';
import { SearchController } from './hotel.controllers';

@Module({
  controllers: [SearchController],
})
export class HotelModule {}
