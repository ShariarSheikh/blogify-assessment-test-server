import { Controller, Get, Query } from '@nestjs/common';
import { DataInterface, hotelData, locationsData } from './data';

//---------------------------------------------------------
interface ApiResponse<T> {
  status: number;
  data: T;
  message: string;
  total: number;
}
interface SearchQuery {
  location?: string;
  dates?: { startDate: string; endDate: string };
  guests?: number;
}
//---------------------------------------------------------

@Controller('search')
export class SearchController {
  //get all location
  @Get('locations')
  getAllLocations(): ApiResponse<string[]> {
    try {
      return {
        status: 200,
        data: locationsData,
        message: 'Success',
        total: locationsData.length,
      };
    } catch (error) {
      return {
        status: 500,
        data: [],
        message: 'Internal Server Error',
        total: 0,
      };
    }
  }

  // search api
  @Get()
  async search(
    @Query() searchQuery: SearchQuery,
  ): Promise<ApiResponse<DataInterface[]>> {
    try {
      const filteredData = this.filterListings(hotelData, searchQuery);
      return {
        status: 200,
        data: filteredData,
        message: 'Success',
        total: filteredData.length,
      };
    } catch (error) {
      return {
        status: 500,
        data: [],
        message: 'Internal Server Error',
        total: 0,
      };
    }
  }

  // filter method
  private filterListings(
    listings: DataInterface[],
    searchQuery: SearchQuery,
  ): DataInterface[] {
    return listings
      .filter((listing) => this.filterByLocation(listing, searchQuery.location))
      .filter((listing) => this.filterByDates(listing, searchQuery.dates))
      .filter((listing) => this.filterByGuests(listing, searchQuery.guests));
  }
  // filter by location
  private filterByLocation(listing: DataInterface, location?: string): boolean {
    return !location || listing.location === location;
  }

  // filter by dates
  private filterByDates(
    listing: DataInterface,
    dates?: { startDate: string; endDate: string },
  ): boolean {
    if (!dates || !dates.startDate || !dates.endDate) {
      return true;
    }

    const startDate = new Date(dates.startDate);
    const endDate = new Date(dates.endDate);

    const listingStartDate = new Date(listing.dates.startDate);
    const listingEndDate = new Date(listing.dates.endDate);

    return listingStartDate >= startDate && listingEndDate <= endDate;
  }

  // filter by guests
  private filterByGuests(listing: DataInterface, guests?: number): boolean {
    if (!guests || !listing.guests) {
      return true;
    }

    const [minGuests, maxGuests] = listing.guests.split('-').map(Number);
    return guests >= minGuests && guests <= maxGuests;
  }
}
