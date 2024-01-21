import { Module } from '@nestjs/common';
import { SearchController } from './search.controllers';

@Module({
  controllers: [SearchController],
})
export class SearchModule {}
