import { Destination } from "@prisma/client";

type DataDestination = Omit<Destination, "id" | "createdAt" | "updatedAt">;

export let dataDestinations: DataDestination[] = [
  {
    name: "Kuta Beach",
    description: `Kuta Beach is a beach located in the southern part of Bali, Indonesia. It is one of the most famous beaches in Bali and a popular tourist destination throughout Indonesia.

Kuta Beach has soft white sand, large waves, and clear seawater, making it perfect for swimming and surfing. In addition, there are many cafes, restaurants, and shops selling various types of souvenirs and Balinese goods along the beach.

Kuta Beach is very crowded with tourists, especially during the holiday season. However, on the other hand, the beach is also quite famous for its high density of visitors and the bustle that occurs around the beach. Therefore, if you want to visit Kuta Beach, it is best to prepare yourself well and make sure to follow beach regulations to stay safe and comfortable during your vacation at Kuta Beach.`,
    shortDescription:
      "Kuta Beach is a beach located in the southern part of Bali, Indonesia. It is one of the most famous beaches in Bali and a popular tourist destination throughout Indonesia.",
    image: "",
    price: 2000000,
    rating: 5,
    city: "Denpasar",
    location: "Denpasar, Bali",
    latitude: -8.7079382,
    longitude: 115.1774426,
  },
  {
    name: "Lombok",
    description: `Lombok is an island located in the West Nusa Tenggara province of Indonesia, just east of Bali. It is known for its beautiful beaches, stunning landscapes, and rich culture.

One of the most popular destinations in Lombok is the Gili Islands, which are a group of three small islands off the northwest coast of Lombok. They are known for their crystal-clear waters, white sandy beaches, and vibrant marine life, making them a popular destination for snorkeling and diving.

Another popular destination in Lombok is Mount Rinjani, which is an active volcano and the second-highest mountain in Indonesia. It is a popular destination for hiking and trekking, offering breathtaking views of the surrounding landscape.

Lombok is also known for its beautiful beaches, such as Kuta Beach, which is a popular destination for surfing, swimming, and sunbathing. Senggigi Beach is another popular beach in Lombok, known for its long, curved stretch of white sand.

The island is also home to the indigenous Sasak people, who have a unique culture and way of life. Visiting the traditional Sasak villages is a great way to experience their culture and learn about their customs.

Other popular destinations in Lombok include Tanjung Aan Beach, Narmada Park, and the Pura Lingsar Temple. Lombok is easily accessible from Bali and other parts of Indonesia, with regular flights and ferry services available.`,
    shortDescription:
      "Lombok is an island located in the West Nusa Tenggara province of Indonesia, just east of Bali. It is known for its beautiful beaches, stunning landscapes, and rich culture.",
    image:
      "https://ik.imagekit.io/travelscope/andreas-dress-GhvpEtG5HMs-unsplash_2_.jpg",

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
      "https://ik.imagekit.io/travelscope/aldrin-rachman-pradana-UEwMB7Z1pKQ-unsplash_1_.jpg",

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
    
Some of the most popular places to visit in Raja Ampat include Wayag Island, Arborek Island, Misool Island, and Gam Island. Wayag Island is famous for its stunning panoramic views, while Arborek Island is known for its traditional Papuan culture and handicrafts. Misool Island offers world-class diving sites, and Gam Island is home to stunning beaches and crystal-clear waters.
    
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
    
In addition to its natural beauty, Parangtritis also has cultural and spiritual significance for the local community. It is believed to be the site where the legendary Nyai Loro Kidul, the Queen of the Southern Sea, resides. Many people believe that her spirit protects the local fishermen and brings good fortune to those who visit her.
    
Visitors to Parangtritis can also explore the nearby sand dunes, which are a popular destination for sandboarding and other outdoor activities. In addition, there are several small restaurants and food stalls that offer local cuisine, as well as shops selling traditional handicrafts and souvenirs.
    
Parangtritis can be easily reached by car or motorbike from Yogyakarta, which is located about 28 kilometers to the north. There are also public buses and minibusses that travel to the beach from Yogyakarta and nearby towns.`,
    shortDescription:
      "Parangtritis is a famous beach located on the southern coast of Yogyakarta in Indonesia. It is known for its stunning natural beauty, cultural significance, and spiritual atmosphere.",
    image:
      "https://ik.imagekit.io/travelscope/rahadiansyah-CgEaZ68d60c-unsplash_1_.jpg",

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
    
The beach is characterized by its soft white sand, crystal-clear waters, and granite rock formations that have been sculpted by the sea and wind over time. These rocks provide a unique backdrop to the beach and are popular spots for taking photos and exploring.
    
In addition to its natural beauty, Tanjung Tinggi Beach is a great place for swimming, sunbathing, and snorkeling. The waters are calm and clear, making it easy to see the diverse marine life that inhabits the area.
    
Tanjung Tinggi Beach has also gained popularity in recent years as the filming location for the Indonesian movie "Laskar Pelangi," which has brought more attention to the area and made it a must-visit destination for many tourists.
    
Visitors to Tanjung Tinggi Beach can also enjoy local food and drinks at nearby restaurants and food stalls, which serve a variety of seafood dishes and traditional Indonesian snacks.
    
Overall, Tanjung Tinggi Beach is a beautiful and unique destination that offers a mix of natural beauty, outdoor adventure, and cultural experiences. It's a great place to relax and enjoy the stunning scenery of Indonesia's Bangka Belitung province.`,
    shortDescription:
      "Tanjung Tinggi Beach is a beautiful beach located on the island of Belitung in the Bangka Belitung province of Indonesia. It is one of the most popular tourist destinations in the area, known for its stunning natural beauty and unique rock formations.",
    image:
      "https://ik.imagekit.io/travelscope/iniizah-fwzau7ekafA-unsplash_1_.jpg",
    price: 900000,
    rating: 4,
    city: "Belitung",
    location: "Belitung, Bangka Belitung",
    latitude: -2.55177,
    longitude: -2.55177,
  },
  {
    name: "Komodo National Park",
    description: `Komodo National Park is a UNESCO World Heritage Site located in the eastern part of Indonesia, between the islands of Sumbawa and Flores. The park is home to the famous Komodo dragons, the world's largest living lizard, as well as a diverse range of marine life, including dolphins, whales, and sea turtles. The park covers a total area of 1,817 square kilometers and comprises three major islands: Komodo, Rinca, and Padar, as well as many smaller islands.

In addition to the Komodo dragons, the park's terrestrial fauna includes Timor deer, wild boars, water buffalo, and various species of birds. The park's marine life is equally impressive, with over 1,000 species of fish, 260 species of coral, and many species of sharks, rays, and other marine creatures.

Visitors to the park can explore the islands and their natural beauty through various activities, such as hiking, diving, snorkeling, and wildlife watching. Some of the popular sites to visit include Komodo Island's Banugulung, which is the park's headquarters, Rinca Island's Loh Buaya, which is a great place to spot Komodo dragons, and Padar Island's famous viewpoint, which offers breathtaking panoramic views of the surrounding islands and sea.`,
    shortDescription:
      "Komodo National Park is a UNESCO World Heritage Site located in the eastern part of Indonesia, between the islands of Sumbawa and Flores. The park is home to the famous Komodo dragons, the world's largest living lizard, as well as a diverse range of marine life, including dolphins, whales, and sea turtles. The park covers a total area of 1,817 square kilometers and comprises three major islands: Komodo, Rinca, and Padar, as well as many smaller islands.",
    image: "",
    price: 3500000,
    rating: 4,
    city: "Lesser Sunda Island",
    location: "East Nusa Tenggara",
    latitude: -8.5653,
    longitude: 119.70023,
  },
  {
    name: "Labuan Bajo",
    description: `Labuan Bajo is a small town located on the western tip of the island of Flores in Indonesia, and it serves as the gateway to Komodo National Park. It is a popular destination for tourists who want to explore the park and its surrounding islands.

Despite its small size, Labuan Bajo has a range of facilities for tourists, including hotels, guesthouses, restaurants, and tour operators. The town has a relaxed and laid-back atmosphere, and visitors can enjoy stunning views of the sea and the nearby islands.

In addition to its proximity to Komodo National Park, Labuan Bajo also has several other attractions worth visiting, such as the Batu Cermin Cave, which is a limestone cave with impressive stalactites and stalagmites, and the traditional market, which is a great place to sample local cuisine and buy souvenirs.

Visitors to Labuan Bajo can also engage in various activities, such as snorkeling, diving, island hopping, and trekking. There are many tour operators in the town that offer a range of tour packages, including day trips and multi-day excursions to Komodo National Park and its surrounding islands.`,
    shortDescription:
      "Labuan Bajo is a small town located on the western tip of the island of Flores in Indonesia, and it serves as the gateway to Komodo National Park. It is a popular destination for tourists who want to explore the park and its surrounding islands.",
    image: "",
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

Cycling around the island: One of the best ways to explore the islands is by renting a bicycle and cycling around. It's a great way to get some exercise while enjoying the stunning scenery.

Sunset watching: The Gili Islands are known for their beautiful sunsets, and you can enjoy them from the beach or a rooftop bar while sipping on a cocktail.

Yoga and wellness: Many yoga studios and wellness centers offer classes and retreats on the islands, making it an excellent destination for those looking to relax and rejuvenate.

Overall, the Gili Islands are a great destination for those looking for a laid-back, tropical island getaway with plenty of activities to enjoy.`,
    shortDescription:
      "The Gili Islands are a group of three small islands located off the coast of Lombok, Indonesia. The islands are known for their beautiful beaches, clear waters, and laid-back atmosphere.",
    image: "",
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

History and architecture: Borobudur Temple is a masterpiece of Buddhist architecture and was built in the 9th century during the reign of the Sailendra Dynasty. The temple consists of nine stacked platforms, six square and three circular, topped by a central dome.

Sunrise view: One of the most popular things to do at Borobudur Temple is to watch the sunrise over the temple. It's an awe-inspiring experience that offers a unique perspective on the temple and its surroundings. You can book a sunrise tour that includes transport and a guide.

Temple tour: You can explore the temple complex on foot and learn about its history and significance from a knowledgeable guide. There are also audio guides available in several languages.

Temple etiquette: When visiting Borobudur Temple, it's important to dress modestly and respectfully. You should cover your shoulders and knees, and remove your shoes when entering the temple. It's also important to be quiet and respectful of the temple and its surroundings.

Museum visit: There is a museum located at the temple complex that showcases the history and significance of Borobudur Temple. It's a great way to learn more about the temple and its cultural importance.

Local village visit: You can also visit the nearby villages and see the local way of life. You can learn about traditional crafts and sample local food and drink.

Overall, a visit to Borobudur Temple is a must-do for anyone visiting Central Java. It's an awe-inspiring cultural and historical experience that offers a unique glimpse into the rich history and culture of Indonesia.`,
    shortDescription:
      "Borobudur Temple is a UNESCO World Heritage site located in Central Java, Indonesia. It is a stunning ancient Buddhist temple that dates back to the 9th century and is considered one of the most significant Buddhist monuments in the world.",
    image: "",
    price: 1000000,
    rating: 4,
    city: "Magelang",
    location: "Central Java",
    latitude: -7.607874,
    longitude: 110.203751,
  },
];
