

const tours = [
  {
    category: "Mountain",
    types: [
      {
        name: "Himachal",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna id dolor elementum ultrices.",
        image: "/uploads/image-1716874126098.jpg",
        price: 5000,
        rating: 5,
        reviews: 100,
        location: "Himachal Pradesh",
        days: 5,
        nights: 4,
        title: "Mountain",
        inclusions: [
          "Meal as per hotel Plan and drinks free too",
          "Return airport and round trip transfers",
          "Accommodation on twin sharing basis",
          "Enjoy Brussels day tours. Overnight Brussels",
        ],
        tourPlan: [
          {
            day: 1,
            name: "City Highlights",
            description:
              "Visit the city's main landmarks including museums, parks, and historical sites.",
          },
          {
            day: 2,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
          },
          {
            day: 3,
            name: "Cultural Experience",
            description:
              "Explore the local culture through food, music, and art.",
          },
        ],
        availableFrom: new Date('2024-06-01'),
        availableTill: new Date('2024-09-30'),
      },
      {
        name: "Ladakh",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna id dolor elementum ultrices.",
        image: "/uploads/image-1716874126098.jpg",
        price: 10000,
        rating: 4.8,
        reviews: 120,
        location: "Jammu and Kashmir",
        days: 6,
        nights: 5,
        title: "Mountain",
        inclusions: [
          "Accommodation in traditional Ladakhi homes",
          "Guided trekking expeditions",
          "Visits to monasteries and cultural sites",
          "Meals provided",
        ],
        tourPlan: [
          {
            day: 1,
            name: "Arrival and Acclimatization",
            description:
              "Arrive in Ladakh and spend the day acclimatizing to the altitude.",
          },
          {
            day: 2,
            name: "Monastery Visits",
            description:
              "Visit ancient monasteries and learn about Ladakhi culture and religion.",
          },
          {
            day: 3,
            name: "Trekking Expedition",
            description:
              "Embark on a multi-day trek through the stunning Ladakhi landscape.",
          },
        ],
        availableFrom: new Date('2024-06-15'),
        availableTill: new Date('2024-09-15'),
      },
      {
        name: "Kashmir",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna id dolor elementum ultrices.",
        image: "/uploads/image-1716874126098.jpg",
        price: 15000,
        rating: 4.5,
        reviews: 80,
        location: "Jammu and Kashmir",
        days: 7,
        nights: 6,
        title: "Mountain",
        inclusions: [
          "Accommodation in traditional Ladakhi homes",
          "Guided Trekking expeditions",
          "Visits to monasteries and cultural sites",
          "Meals provided",
        ],
        tourPlan: [
          {
            day: 1,
            name: "Arrival and Acclimatization",
            description:
              "Arrive in Ladakh and spend the day acclimatizing to the altitude.",
          },
          {
            day: 2,
            name: "Monastery Visits",
            description:
              "Visit ancient monasteries and learn about Ladakhi culture and religion.",
          },
        ],
        availableFrom: new Date('2024-05-01'),
        availableTill: new Date('2024-10-31'),
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna id dolor elementum ultrices.",
  },
  {
    category: "Beach",
    types: [
      {
        name: "Goa",
        description:
          "Enjoy the sun, sand, and sea in the tropical paradise of Goa.",
        image: "/uploads/image-1716874126098.jpg",
        price: 6000,
        rating: 4.7,
        reviews: 90,
        location: "Goa, India",
        days: 8,
        nights: 7,
        title: "Beach",
        inclusions: [
          "Accommodation in beachfront resorts",
          "Water sports activities",
          "Beachside bonfire dinners",
          "Excursions to nearby attractions",
        ],
        tourPlan: [
          {
            day: 1,
            name: "Beach Relaxation",
            description: "Spend the day relaxing on the sandy beaches of Goa.",
          },
          {
            day: 2,
            name: "Water Sports",
            description:
              "Indulge in thrilling water sports activities like parasailing and jet skiing.",
          },
          {
            day: 3,
            name: "Cultural Exploration",
            description:
              "Explore the rich cultural heritage of Goa through its churches and temples.",
          },
        ],
        availableFrom: new Date('2024-11-01'),
        availableTill: new Date('2025-03-31'),
      },
      {
        name: "Maldives",
        description:
          "Experience the beauty of the tropical paradise of Maldives.",
        image: "/uploads/image-1716874126098.jpg",
        price: 12000,
        rating: 4.5,
        reviews: 80,
        location: "Maldives, India",
        days: 5,
        nights: 4,
        title: "Beach",
        inclusions: [
          "Accommodation in 5-star hotels",
          "Water sports activities",
          "Beachside bonfire dinners",
          "Excursions to nearby attractions",
        ],
        tourPlan: [
          {
            day: 1,
            name: "Beach Relaxation",
            description:
              "Spend the day relaxing on the sandy beaches of Maldives.",
          },
          {
            day: 2,
            name: "Water Sports",
            description:
              "Indulge in thrilling water sports activities like parasailing and jet skiing.",
          },
          {
            day: 3,
            name: "Cultural Exploration",
            description:
              "Explore the rich cultural heritage of Maldives through its churches and temples.",
          },
        ],
        availableFrom: new Date('2024-12-01'),
        availableTill: new Date('2025-02-28'),
      },
      {
        name: "Phuket",
        description:
          "Explore the stunning beaches and lively nightlife of Phuket.",
        image: "/uploads/image-1716874126098.jpg",
        price: 18000,
        rating: 4.5,
        reviews: 80,
        location: "Phuket, Thailand",
        days: 6,
        nights: 5,
        title: "Beach",
        inclusions: [
          "Accommodation in beachfront resorts",
          "Island-hopping tours",
          "Thai cooking classes",
          "Night market visits",
        ],
        tourPlan: [
          {
            day: 1,
            name: "Beach Relaxation",
            description: "Relax and unwind on the beautiful beaches of Phuket.",
          },
          {
            day: 2,
            name: "Island-hopping Adventure",
            description: "Explore nearby islands and discover hidden coves.",
          },
          {
            day: 3,
            name: "Cultural Exploration",
            description:
              "Experience Thai culture through visits to temples and markets.",
          },
        ],
        availableFrom: new Date('2024-10-01'),
        availableTill: new Date('2025-03-31'),
      },
    ],
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    category: "Desert",
    types: [
      {
        name: "Sahara-Desert",
        description: "Experience the vastness and beauty of the Sahara Desert.",
        image: "/uploads/image-1716874126098.jpg",
        price: 7000,
        rating: 4.9,
        reviews: 110,
        location: "North Africa",
        title: "Desert",
        days: 8,
        nights: 7,
        inclusions: [
          "Accommodation in desert camps",
          "Camel trekking across sand dunes",
          "Sunset and sunrise viewing",
          "Traditional desert meals",
        ],
        tourPlan: [
          {
            day: 1,
            name: "Arrival and Desert Camp",
            description:
              "Arrive in the Sahara and settle into your desert camp.",
          },
          {
            day: 2,
            name: "Camel Trekking",
            description:
              "Embark on a camel trek across the desert, exploring its vast landscapes.",
          },
          {
            day: 3,
            name: "Oasis Visit",
            description: "Visit lush oases nestled amidst the desert sands.",
          },
        ],
        availableFrom: new Date('2024-03-01'),
        availableTill: new Date('2024-05-31'),
      },
      {
        name: "Gobi Desert",
        description: "Experience the beauty and majesty of the Gobi Desert.",
        image: "/uploads/image-1716874126098.jpg",
        price: 14000,
        rating: 4.7,
        reviews: 90,
        location: "South Asia",
        title: "Desert",
        days: 5,
        nights: 4,
        inclusions: [
          "Accommodation in desert lodges",
          "Water sports activities",
          "Cultural tours",
          "Sunset and sunrise viewing",
        ],
        tourPlan: [
          {
            day: 1,
            name: "Arrival and Desert Camp",
            description:
              "Arrive in the Gobi Desert and settle into your desert camp.",
          },
          {
            day: 2,
            name: "Water Sports",
            description:
              "Experience water sports activities like parasailing and jet skiing.",
          },
        ],
        availableFrom: new Date('2024-04-01'),
        availableTill: new Date('2024-06-30'),
      },
    ],
    description:
      "Sed et urna id dolor elementum ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    category: "Camping",
    types: [
      {
        name: "Camping",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna id dolor elementum ultrices.",
        image: "/uploads/image-1716874126098.jpg",
        price: 8000,
        rating: 4.9,
        reviews: 110,
        location: "North Africa",
        title: "Camping",
        days: 3,
        nights: 2,
        inclusions: [
          "Accommodation in desert lodges",
          "Water sports activities",
          "Cultural tours",
          "Sunset and sunrise viewing",
        ],
        tourPlan: [
          {
            day: 1,
            name: "Arrival and Camp",
            description: "Arrive in the desert and settle into your camp.",
          },
          {
            day: 2,
            name: "Camping Activities",
            description:
              "Explore the desert's natural beauty and enjoy outdoor activities.",
          },
        ],
        availableFrom: new Date('2024-05-01'),
        availableTill: new Date('2024-09-30'),
      },
    ],
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];

export default tours;
