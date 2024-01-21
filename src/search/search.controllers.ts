import { Controller, Get, Query } from '@nestjs/common';
import generateDummyData from './data';

@Controller('search')
export class SearchController {
  @Get()
  search(
    @Query('location') location: string,
    @Query('dates') dates: string,
    @Query('guests') guests: number,
  ): string {
    const data = generateDummyData();
    console.log(data);

    return `Searching for location: ${location}, dates: ${dates}, guests: ${guests}, data:${data}`;
  }
}
