import { Destination } from "@prisma/client";

type DataDestination = Omit<Destination, "id" | "createdAt" | "updatedAt">;

export let dataDestinations: DataDestination[] = [
  {
    name: "Kuta Beach",
    description: `Kuta Beach is a beach located in the southern part of Bali, Indonesia. It is one of the most famous beaches in Bali and a popular tourist destination throughout Indonesia. Kuta Beach has soft white sand, large waves, and clear seawater, making it perfect for swimming and surfing. In addition, there are many cafes, restaurants, and shops selling various types of souvenirs and Balinese goods along the beach.

Kuta Beach is very crowded with tourists, especially during the holiday season. However, on the other hand, the beach is also quite famous for its high density of visitors and the bustle that occurs around the beach. Therefore, if you want to visit Kuta Beach, it is best to prepare yourself well and make sure to follow beach regulations to stay safe and comfortable during your vacation at Kuta Beach.`,
    shortDescription:
      "Kuta Beach is a beach located in the southern part of Bali, Indonesia. It is one of the most famous beaches in Bali and a popular tourist destination throughout Indonesia.",
    image:
      "https://ik.imagekit.io/travelscope/katerina-markush-fXu85a9PXsM-unsplash__1_.jpg",
    price: 2000000,
    rating: 5,
    city: "Denpasar",
    location: "Denpasar, Bali",
    latitude: -8.7079382,
    longitude: 115.1774426,
  },
  {
    name: "Lombok",
    description: `Lombok is an island located in the West Nusa Tenggara province of Indonesia, just east of Bali. It is known for its beautiful beaches, stunning landscapes, and rich culture. Lombok is also known for its beautiful beaches, such as Kuta Beach, which is a popular destination for surfing, swimming, and sunbathing. Senggigi Beach is another popular beach in Lombok, known for its long, curved stretch of white sand.

The island is also home to the indigenous Sasak people, who have a unique culture and way of life. Visiting the traditional Sasak villages is a great way to experience their culture and learn about their customs.

Other popular destinations in Lombok include Tanjung Aan Beach, Narmada Park, and the Pura Lingsar Temple. Lombok is easily accessible from Bali and other parts of Indonesia, with regular flights and ferry services available.`,
    shortDescription:
      "Lombok is an island located in the West Nusa Tenggara province of Indonesia, just east of Bali. It is known for its beautiful beaches, stunning landscapes, and rich culture.",
    image:
      "https://ik.imagekit.io/travelscope/kilian-karger-1lleW-UW1So-unsplash__1_.jpg",

    price: 1200000,
    rating: 5,
    city: "Lombok",
    location: "West Nusa Tenggara",
    latitude: -8.650979,
    longitude: 116.324944,
  },
  {
    name: "Mount Bromo",
    description: `Mount Bromo, also known as Gunung Bromo, is an active volcano located in East Java, Indonesia. It is part of the Bromo Tengger Semeru National Park and is one of the most popular tourist destinations in Indonesia.
    
Mount Bromo stands at a height of 2,329 meters (7,641 feet) and is known for its breathtaking views and unique landscape. The volcano is surrounded by a sea of sand, which stretches for about 10 square kilometers (4 square miles), and is surrounded by steep cliffs. Visitors can climb up to the crater of the volcano and take in the stunning views of the surrounding landscape.
    
Overall, Mount Bromo is a must-visit destination for nature lovers and adventure seekers visiting Indonesia.`,
    shortDescription:
      "Mount Bromo, also known as Gunung Bromo, is an active volcano located in East Java, Indonesia. It is part of the Bromo Tengger Semeru National Park and is one of the most popular tourist destinations in Indonesia.",
    image:
      "https://ik.imagekit.io/travelscope/levi-ari-pronk-u9ahlW6JHOI-unsplash__1_.jpg",

    price: 1000000,
    rating: 4,
    city: "Malang",
    location: "East Java",
    latitude: -7.942494,
    longitude: 112.953011,
  },
  {
    name: "Raja Ampat",
    description: `Raja Ampat is a popular tourist destination located in West Papua Province, Indonesia. It is a group of islands known for their stunning natural beauty, pristine beaches, and breathtaking underwater scenery.
    
The islands are located in the heart of the Coral Triangle, which is considered the most biodiverse marine habitat on Earth. Visitors to Raja Ampat can enjoy activities such as diving, snorkeling, island-hopping, bird-watching, and cultural tours.
    
To reach Raja Ampat, visitors can take a flight to Sorong, the closest major city on the mainland. From there, they can take a ferry or speedboat to the islands. It's important to note that Raja Ampat is a protected area, and visitors are required to obtain a permit from the local authorities to enter the islands.
    `,
    shortDescription:
      "Raja Ampat is a popular tourist destination located in West Papua Province, Indonesia. It is a group of islands known for their stunning natural beauty, pristine beaches, and breathtaking underwater scenery.",
    image:
      "https://ik.imagekit.io/travelscope/aziz-homaily-il2k5eKncbY-unsplash_1_.jpg",

    price: 1100000,
    rating: 4,
    city: "Sorong",
    location: "West Papua",
    latitude: -1.032047,
    longitude: 130.505219,
  },
  {
    name: "Parangtritis",
    description: `Parangtritis is a famous beach located on the southern coast of Yogyakarta in Indonesia. It is known for its stunning natural beauty, cultural significance, and spiritual atmosphere.
    
Parangtritis Beach is a popular destination for surfing, swimming, and sunbathing, and is particularly popular among local visitors. The beach is also famous for its beautiful sunset views, which are said to be especially stunning during the dry season from May to September.
    
Visitors to Parangtritis can also explore the nearby sand dunes, which are a popular destination for sandboarding and other outdoor activities. In addition, there are several small restaurants and food stalls that offer local cuisine, as well as shops selling traditional handicrafts and souvenirs.
    
Parangtritis can be easily reached by car or motorbike from Yogyakarta, which is located about 28 kilometers to the north. There are also public buses and minibusses that travel to the beach from Yogyakarta and nearby towns.`,
    shortDescription:
      "Parangtritis is a famous beach located on the southern coast of Yogyakarta in Indonesia. It is known for its stunning natural beauty, cultural significance, and spiritual atmosphere.",
    image:
      "https://ik.imagekit.io/travelscope/rahadiansyah-HG541IrX9a4-unsplash__1_.jpg",

    price: 500000,
    rating: 5,
    city: "Yogyakarta",
    location: "Yogyakarta Special Region",
    latitude: -8.00769,
    longitude: 110.317741,
  },
  {
    name: "Tanjung Tinggi Beach",
    description: `Tanjung Tinggi Beach is a beautiful beach located on the island of Belitung in the Bangka Belitung province of Indonesia. It is one of the most popular tourist destinations in the area, known for its stunning natural beauty and unique rock formations.
    
Tanjung Tinggi Beach has also gained popularity in recent years as the filming location for the Indonesian movie "Laskar Pelangi," which has brought more attention to the area and made it a must-visit destination for many tourists. Visitors to Tanjung Tinggi Beach can also enjoy local food and drinks at nearby restaurants and food stalls, which serve a variety of seafood dishes and traditional Indonesian snacks.
    
Overall, Tanjung Tinggi Beach is a beautiful and unique destination that offers a mix of natural beauty, outdoor adventure, and cultural experiences. It's a great place to relax and enjoy the stunning scenery of Indonesia's Bangka Belitung province.`,
    shortDescription:
      "Tanjung Tinggi Beach is a beautiful beach located on the island of Belitung in the Bangka Belitung province of Indonesia. It is one of the most popular tourist destinations in the area, known for its stunning natural beauty and unique rock formations.",
    image:
      "https://ik.imagekit.io/travelscope/dwi-damarpilau-PXeIODx6AfQ-unsplash__1_.jpg",
    price: 900000,
    rating: 4,
    city: "Belitung",
    location: "Belitung, Bangka Belitung",
    latitude: -2.55177,
    longitude: 107.714951,
  },
  {
    name: "Komodo National Park",
    description: `Komodo National Park is a UNESCO World Heritage Site located in the eastern part of Indonesia, between the islands of Sumbawa and Flores. The park is home to the famous Komodo dragons, the world's largest living lizard, as well as a diverse range of marine life, including dolphins, whales, and sea turtles. The park covers a total area of 1,817 square kilometers and comprises three major islands: Komodo, Rinca, and Padar, as well as many smaller islands.

In addition to the Komodo dragons, the park's terrestrial fauna includes Timor deer, wild boars, water buffalo, and various species of birds. The park's marine life is equally impressive, with over 1,000 species of fish, 260 species of coral, and many species of sharks, rays, and other marine creatures.

Visitors to the park can explore the islands and their natural beauty through various activities, such as hiking, diving, snorkeling, and wildlife watching. Some of the popular sites to visit include Komodo Island's Banugulung, which is the park's headquarters, Rinca Island's Loh Buaya, which is a great place to spot Komodo dragons, and Padar Island's famous viewpoint, which offers breathtaking panoramic views of the surrounding islands and sea.`,
    shortDescription:
      "Komodo National Park is a UNESCO World Heritage Site located in the eastern part of Indonesia, between the islands of Sumbawa and Flores. The park is home to the famous Komodo dragons, the world's largest living lizard, as well as a diverse range of marine life, including dolphins, whales, and sea turtles. The park covers a total area of 1,817 square kilometers and comprises three major islands: Komodo, Rinca, and Padar, as well as many smaller islands.",
    image:
      "https://ik.imagekit.io/travelscope/altraz-8xxwWKyDs5E-unsplash__1_.jpg",
    price: 3500000,
    rating: 4,
    city: "Lesser Sunda Island",
    location: "East Nusa Tenggara",
    latitude: -8.527716,
    longitude: 119.4833198,
  },
  {
    name: "Labuan Bajo",
    description: `Labuan Bajo is a small town located on the western tip of the island of Flores in Indonesia, and it serves as the gateway to Komodo National Park. It is a popular destination for tourists who want to explore the park and its surrounding islands.

Despite its small size, Labuan Bajo has a range of facilities for tourists, including hotels, guesthouses, restaurants, and tour operators. The town has a relaxed and laid-back atmosphere, and visitors can enjoy stunning views of the sea and the nearby islands.

Visitors to Labuan Bajo can also engage in various activities, such as snorkeling, diving, island hopping, and trekking. There are many tour operators in the town that offer a range of tour packages, including day trips and multi-day excursions to Komodo National Park and its surrounding islands.`,
    shortDescription:
      "Labuan Bajo is a small town located on the western tip of the island of Flores in Indonesia, and it serves as the gateway to Komodo National Park. It is a popular destination for tourists who want to explore the park and its surrounding islands.",
    image:
      "https://ik.imagekit.io/travelscope/fifani-cahyadi-eijoSN8sahA-unsplash__1_.jpg",
    price: 5500000,
    rating: 4,
    city: "Flores",
    location: "Flores, East Nusa Tenggara",
    latitude: -8.46292,
    longitude: 119.873619,
  },
  {
    name: "Gili Island",
    description: `The Gili Islands are a group of three small islands located off the coast of Lombok, Indonesia. The islands are known for their beautiful beaches, clear waters, and laid-back atmosphere. Here are some of the things to do in the Gili Islands:

Snorkeling and diving: The Gili Islands are famous for their clear waters and rich marine life, making them an excellent destination for snorkeling and diving. You can rent equipment or join a guided tour to explore the underwater world.

Relaxing on the beach: The islands have beautiful white sand beaches where you can lounge and soak up the sun. You can also go for a swim in the crystal clear waters.

Island hopping: You can explore the three islands, Gili Trawangan, Gili Meno, and Gili Air, by hopping on a boat or walking around the islands. Each island has its unique vibe and attractions.

Cycling around the island: One of the best ways to explore the islands is by renting a bicycle and cycling around.`,
    shortDescription:
      "The Gili Islands are a group of three small islands located off the coast of Lombok, Indonesia. The islands are known for their beautiful beaches, clear waters, and laid-back atmosphere.",
    image:
      "https://ik.imagekit.io/travelscope/andrea-huls-pareja-ADgssHQ6ceI-unsplash__1_.jpg",
    price: 2000000,
    rating: 4,
    city: "Lombok",
    location: "Northwest Lombok",
    latitude: -8.60995,
    longitude: 116.10504,
  },
  {
    name: "Borobudur Temple",
    description: `Borobudur Temple is a UNESCO World Heritage site located in Central Java, Indonesia. It is a stunning ancient Buddhist temple that dates back to the 9th century and is considered one of the most significant Buddhist monuments in the world. Here are some things to know and do when visiting Borobudur Temple:

History and architecture: Borobudur Temple is a masterpiece of Buddhist architecture and was built in the 9th century during the reign of the Sailendra Dynasty. The temple consists of nine stacked platforms, six square and three circular, topped by a central dome.`,
    shortDescription:
      "Borobudur Temple is a UNESCO World Heritage site located in Central Java, Indonesia. It is a stunning ancient Buddhist temple that dates back to the 9th century and is considered one of the most significant Buddhist monuments in the world.",
    image:
      "https://ik.imagekit.io/travelscope/mario-la-pergola-WTGV6qBOzro-unsplash__1_.jpg",
    price: 1000000,
    rating: 4,
    city: "Magelang",
    location: "Central Java",
    latitude: -7.607874,
    longitude: 110.203751,
  },
];
