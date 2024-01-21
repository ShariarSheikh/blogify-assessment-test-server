import * as casual from 'casual';

export default function generateDummyData() {
  const listings = Array.from({ length: 40 }, () => {
    return {
      id: casual.integer(1, 100),
      location: casual.city,
      title: casual.title,
      guests: `${casual.integer(1, 5)}-${casual.integer(6, 10)}`,
      beds: casual.integer(1, 4),
      baths: casual.integer(1, 3),
      wifi: casual.boolean,
      kitchen: casual.boolean,
      free_parking: casual.boolean,
      rating: parseFloat(casual.double(3, 5).toFixed(1)),
      reviews: casual.integer(10, 200),
      price: casual.integer(80, 400),
      hotel_image: `https://example.com/hotel_image${casual.integer(1, 40)}.jpg`,
    };
  });

  return { listings };
}
