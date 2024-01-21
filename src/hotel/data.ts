// import * as casual from 'casual';
const today = new Date();
const oneDay = 24 * 60 * 60 * 1000; // one day in milliseconds

export interface DataInterface {
  id: number;
  location: string;
  title: string;
  guests: string;
  beds: number;
  baths: number;
  wifi: boolean;
  kitchen: boolean;
  free_parking: boolean;
  rating: number;
  reviews: number;
  price: number;
  hotel_image: string;
  dates: {
    startDate: string; // Tomorrow
    endDate: string; // 10 days from tomorrow
  };
}

export const locationsData: string[] = [
  'East Giuseppe',
  'Port Josefaton',
  'East Kavon',
  'Rudyberg',
  'Hickleland',
  'Lake Declan',
  'West Eldridge',
  'Lake Clevelandfurt',
  'South Emmanuellefurt',
  'New Conradstad',
  'New Forestborough',
  'South Elenorabury',
  'West Patriciabury',
  'Gulgowskishire',
  'Mateostad',
  'Conroyville',
  'Moenstad',
  'Lake Meaghan',
  'East Adela',
  'Nehaborough',
  'New Beaulahshire',
  'Bennettport',
  'Leslytown',
  'North Tyreek',
  'Lake Juniusfort',
  'Daughertyberg',
  'Rippinton',
  'Kendraborough',
  'Tommiechester',
  'Lonnieberg',
  'Kyrastad',
  'Schowaltermouth',
  'Horaceport',
  'South Antoinette',
  'Paytonview',
  'Port Johnnie',
  'Bergnaumstad',
  'Corenestad',
  'North Earnestineland',
  'Nigelfurt',
];

export const hotelData: DataInterface[] = [
  {
    id: 78,
    location: 'East Giuseppe',
    title: 'Est ut',
    guests: '3-6',
    beds: 3,
    baths: 3,
    wifi: true,
    kitchen: true,
    free_parking: true,
    rating: 4.3,
    reviews: 87,
    price: 384,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 42,
    location: 'Port Josefaton',
    title: 'Ipsam ullam sint',
    guests: '2-6',
    beds: 2,
    baths: 3,
    wifi: false,
    kitchen: true,
    free_parking: true,
    rating: 4.3,
    reviews: 189,
    price: 174,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 54,
    location: 'East Kavon',
    title: 'Excepturi eum enim',
    guests: '5-10',
    beds: 2,
    baths: 3,
    wifi: true,
    kitchen: false,
    free_parking: true,
    rating: 4.9,
    reviews: 67,
    price: 155,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 51,
    location: 'Rudyberg',
    title: 'Eos id',
    guests: '2-8',
    beds: 2,
    baths: 1,
    wifi: true,
    kitchen: true,
    free_parking: false,
    rating: 4.3,
    reviews: 42,
    price: 259,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 10,
    location: 'Hickleland',
    title: 'Enim optio vitae',
    guests: '2-8',
    beds: 4,
    baths: 2,
    wifi: false,
    kitchen: true,
    free_parking: true,
    rating: 3.3,
    reviews: 58,
    price: 221,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 82,
    location: 'Lake Declan',
    title: 'Nihil culpa',
    guests: '3-9',
    beds: 3,
    baths: 1,
    wifi: false,
    kitchen: true,
    free_parking: false,
    rating: 4.5,
    reviews: 100,
    price: 343,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 80,
    location: 'West Eldridge',
    title: 'Magni labore',
    guests: '4-10',
    beds: 4,
    baths: 1,
    wifi: false,
    kitchen: false,
    free_parking: false,
    rating: 4.3,
    reviews: 110,
    price: 248,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 6,
    location: 'Lake Clevelandfurt',
    title: 'Sed voluptas',
    guests: '4-7',
    beds: 2,
    baths: 2,
    wifi: false,
    kitchen: false,
    free_parking: false,
    rating: 4.7,
    reviews: 139,
    price: 247,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 86,
    location: 'South Emmanuellefurt',
    title: 'Blanditiis consectetur quia',
    guests: '4-7',
    beds: 2,
    baths: 2,
    wifi: true,
    kitchen: false,
    free_parking: true,
    rating: 3.8,
    reviews: 69,
    price: 161,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 93,
    location: 'New Conradstad',
    title: 'Dolore corrupti architecto',
    guests: '3-7',
    beds: 3,
    baths: 3,
    wifi: true,
    kitchen: false,
    free_parking: false,
    rating: 4.4,
    reviews: 152,
    price: 230,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 75,
    location: 'New Forestborough',
    title: 'Quo quia fugiat',
    guests: '3-7',
    beds: 4,
    baths: 1,
    wifi: true,
    kitchen: true,
    free_parking: false,
    rating: 4.6,
    reviews: 188,
    price: 268,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 85,
    location: 'South Elenorabury',
    title: 'Aspernatur facilis quibusdam',
    guests: '2-9',
    beds: 1,
    baths: 1,
    wifi: false,
    kitchen: false,
    free_parking: false,
    rating: 4.1,
    reviews: 66,
    price: 311,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 78,
    location: 'West Patriciabury',
    title: 'Iusto minus consectetur',
    guests: '1-9',
    beds: 3,
    baths: 2,
    wifi: true,
    kitchen: false,
    free_parking: true,
    rating: 3.1,
    reviews: 172,
    price: 125,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 65,
    location: 'Gulgowskishire',
    title: 'Ea numquam non',
    guests: '1-6',
    beds: 1,
    baths: 2,
    wifi: true,
    kitchen: false,
    free_parking: false,
    rating: 4.9,
    reviews: 110,
    price: 293,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 43,
    location: 'Mateostad',
    title: 'Eius harum reiciendis',
    guests: '4-8',
    beds: 3,
    baths: 2,
    wifi: false,
    kitchen: true,
    free_parking: false,
    rating: 3.5,
    reviews: 188,
    price: 396,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 22,
    location: 'Conroyville',
    title: 'Distinctio ut',
    guests: '3-6',
    beds: 2,
    baths: 1,
    wifi: false,
    kitchen: true,
    free_parking: false,
    rating: 3.3,
    reviews: 135,
    price: 289,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 5,
    location: 'Moenstad',
    title: 'Ut molestiae exercitationem',
    guests: '3-6',
    beds: 2,
    baths: 2,
    wifi: false,
    kitchen: false,
    free_parking: true,
    rating: 5,
    reviews: 189,
    price: 229,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 80,
    location: 'Lake Meaghan',
    title: 'Ducimus consequatur',
    guests: '3-7',
    beds: 4,
    baths: 1,
    wifi: false,
    kitchen: false,
    free_parking: true,
    rating: 4.2,
    reviews: 140,
    price: 327,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 66,
    location: 'East Adela',
    title: 'Totam sed',
    guests: '5-6',
    beds: 1,
    baths: 2,
    wifi: false,
    kitchen: false,
    free_parking: false,
    rating: 3.3,
    reviews: 125,
    price: 84,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 17,
    location: 'Nehaborough',
    title: 'Sit dolores',
    guests: '1-8',
    beds: 4,
    baths: 3,
    wifi: false,
    kitchen: true,
    free_parking: false,
    rating: 4.9,
    reviews: 40,
    price: 185,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 63,
    location: 'New Beaulahshire',
    title: 'Pariatur est',
    guests: '3-6',
    beds: 3,
    baths: 2,
    wifi: true,
    kitchen: true,
    free_parking: false,
    rating: 4.3,
    reviews: 131,
    price: 303,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 73,
    location: 'Bennettport',
    title: 'Non ullam',
    guests: '2-6',
    beds: 1,
    baths: 2,
    wifi: false,
    kitchen: false,
    free_parking: false,
    rating: 3.2,
    reviews: 183,
    price: 362,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 63,
    location: 'Leslytown',
    title: 'Veritatis accusantium magnam',
    guests: '2-7',
    beds: 1,
    baths: 1,
    wifi: true,
    kitchen: false,
    free_parking: false,
    rating: 4.9,
    reviews: 109,
    price: 233,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 45,
    location: 'North Tyreek',
    title: 'Laborum voluptatem quidem',
    guests: '3-9',
    beds: 4,
    baths: 2,
    wifi: true,
    kitchen: false,
    free_parking: true,
    rating: 5,
    reviews: 42,
    price: 220,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 62,
    location: 'Lake Juniusfort',
    title: 'Est iure',
    guests: '3-6',
    beds: 3,
    baths: 2,
    wifi: false,
    kitchen: true,
    free_parking: false,
    rating: 4.9,
    reviews: 26,
    price: 301,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 53,
    location: 'Daughertyberg',
    title: 'Quia dolor',
    guests: '3-8',
    beds: 2,
    baths: 2,
    wifi: false,
    kitchen: false,
    free_parking: true,
    rating: 3.7,
    reviews: 179,
    price: 151,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 94,
    location: 'Rippinton',
    title: 'Non ut aut',
    guests: '4-6',
    beds: 2,
    baths: 2,
    wifi: false,
    kitchen: false,
    free_parking: true,
    rating: 3.2,
    reviews: 26,
    price: 305,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 99,
    location: 'Kendraborough',
    title: 'Autem enim ut',
    guests: '1-7',
    beds: 2,
    baths: 2,
    wifi: false,
    kitchen: false,
    free_parking: false,
    rating: 4.1,
    reviews: 173,
    price: 156,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 50,
    location: 'Tommiechester',
    title: 'Ipsam non corrupti',
    guests: '1-7',
    beds: 2,
    baths: 3,
    wifi: false,
    kitchen: false,
    free_parking: false,
    rating: 4.1,
    reviews: 13,
    price: 331,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 53,
    location: 'Lonnieberg',
    title: 'Dolorem ratione nulla',
    guests: '4-9',
    beds: 4,
    baths: 3,
    wifi: false,
    kitchen: false,
    free_parking: false,
    rating: 5,
    reviews: 43,
    price: 107,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 96,
    location: 'Kyrastad',
    title: 'Quibusdam consequatur',
    guests: '5-9',
    beds: 2,
    baths: 2,
    wifi: false,
    kitchen: false,
    free_parking: false,
    rating: 4.2,
    reviews: 57,
    price: 183,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 87,
    location: 'Schowaltermouth',
    title: 'Et illo ab',
    guests: '4-6',
    beds: 4,
    baths: 3,
    wifi: true,
    kitchen: true,
    free_parking: false,
    rating: 3.3,
    reviews: 59,
    price: 313,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 81,
    location: 'Horaceport',
    title: 'Ex dolorum',
    guests: '5-7',
    beds: 3,
    baths: 3,
    wifi: false,
    kitchen: false,
    free_parking: false,
    rating: 3.3,
    reviews: 103,
    price: 154,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 90,
    location: 'South Antoinette',
    title: 'Minus atque',
    guests: '3-8',
    beds: 2,
    baths: 3,
    wifi: false,
    kitchen: false,
    free_parking: true,
    rating: 3.6,
    reviews: 104,
    price: 309,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 52,
    location: 'Paytonview',
    title: 'Sed explicabo',
    guests: '3-9',
    beds: 2,
    baths: 2,
    wifi: false,
    kitchen: false,
    free_parking: false,
    rating: 3.1,
    reviews: 133,
    price: 189,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 13,
    location: 'Port Johnnie',
    title: 'Officia optio omnis',
    guests: '3-7',
    beds: 1,
    baths: 1,
    wifi: false,
    kitchen: false,
    free_parking: false,
    rating: 5,
    reviews: 21,
    price: 319,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 34,
    location: 'Bergnaumstad',
    title: 'Perferendis et sunt',
    guests: '3-10',
    beds: 3,
    baths: 3,
    wifi: true,
    kitchen: true,
    free_parking: true,
    rating: 4.3,
    reviews: 193,
    price: 154,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 86,
    location: 'Corenestad',
    title: 'Officia sint',
    guests: '2-10',
    beds: 4,
    baths: 3,
    wifi: true,
    kitchen: true,
    free_parking: false,
    rating: 3.8,
    reviews: 120,
    price: 153,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 41,
    location: 'North Earnestineland',
    title: 'Aut aliquam nihil',
    guests: '3-6',
    beds: 2,
    baths: 2,
    wifi: false,
    kitchen: true,
    free_parking: false,
    rating: 3.8,
    reviews: 182,
    price: 163,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
  {
    id: 89,
    location: 'Nigelfurt',
    title: 'Ad dolorem',
    guests: '2-7',
    beds: 4,
    baths: 3,
    wifi: false,
    kitchen: true,
    free_parking: false,
    rating: 4.7,
    reviews: 185,
    price: 382,
    hotel_image: 'https://source.unsplash.com/800x600/?hotel',
    dates: {
      startDate: formatDate(new Date(today.getTime() + oneDay * 1)), // Tomorrow
      endDate: formatDate(new Date(today.getTime() + oneDay * 10)), // 10 days from tomorrow
    },
  },
];

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = date.getFullYear();
  return mm + '/' + dd + '/' + yyyy;
}
