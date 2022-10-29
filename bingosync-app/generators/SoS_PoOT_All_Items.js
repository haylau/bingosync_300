bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
	"Potato Seeds",
	"Turnip Seeds",
	"Cucumber Seeds",
	"Onion Seeds",
	"Strawberry Seeds",
	"Garlic Seeds",
	"Zucchini Seeds",
	"Pumpkin Seeds",
	"Corn Seeds",
	"Tomato Seeds",
	"Red Pepper Seeds",
	"Eggplant Seeds",
	"Melon Seeds",
	"Green Pepper Seeds",
	"Pineapple Seeds",
	"Watermelon Seeds",
	"Spinach Seeds",
	"Carrot Seeds",
	"Okra Seeds",
	"Bok Choy Seeds",
	"Sweet Potato Seeds",
	"Chili Pepper Seeds",
	"Daikon Radish Seeds",
	"Burdock Seeds",
	"Broccoli Seeds",
	"Cabbage Seeds",
	"Napa Cabbage Seeds",
	"Leek Seeds",
	"Radish Seeds",
	"Fodder Seeds",
	"Tea Leaf Seeds",
	"Wheat Seedlings",
	"Bean Seeds",
	"Rice Seedlings",
	"Tulip Seeds",
	"Nemophila Seeds",
	"Pansy Seeds",
	"Buttercup Seeds",
	"Black Pansy Seeds",
	"Hibiscus Seeds",
	"Petunia Seeds",
	"Marigold Seeds",
	"Sunflower Seeds",
	"Lily Seeds",
	"Rose Seeds",
	"Mum Seeds",
	"Clematis Seeds",
	"Daisy Seeds",
	"Black Rose Seeds",
	"Cineraria Seeds",
	"Primrose Seeds",
	"Begonia Seeds",
	"Campanula Seeds",
	"Hellebore Seeds",
	"Potato",
	"Star Potato",
	"Turnip",
	"Giant Turnip",
	"Cucumber",
	"Onion",
	"Strawberry",
	"Golden Strawberry",
	"Garlic",
	"Zucchini",
	"Pumpkin",
	"Corn",
	"Mosaic Corn",
	"Tomato",
	"Giant Tomato",
	"Pepper",
	"Eggplant",
	"Round Eggplant",
	"Melon",
	"Jewel Melon",
	"Green Pepper",
	"Pineapple",
	"Watermelon",
	"Spinach",
	"Heart Spinach",
	"Carrot",
	"Okra",
	"Bok Choy",
	"Sweet Potato",
	"Giant Sweet Potato",
	"Chili Pepper",
	"Daikon Radish",
	"Fork-root Daikon",
	"Burdock",
	"Broccoli",
	"Cabbage",
	"Napa Cabbage",
	"Napa Cabbage",
	"Leek",
	"Giant Leek",
	"Radish",
	"Fodder",
	"Deluxe Fodder",
	"Tea Leaves",
	"Wheat",
	"Beans",
	"Rice",
	"Tulip",
	"Nemophila",
	"Pansy",
	"Buttercup",
	"Black Pansy",
	"Hibiscus",
	"Petunia",
	"Marigold",
	"Sunflower",
	"Lily",
	"Rose",
	"Mum",
	"Clematis",
	"Daisy",
	"Black Rose",
	"Cineraria",
	"Primrose",
	"Begonia",
	"Campanula",
	"Hellebore",
	"Coffee Seedling",
	"Cherry Seedling",
	"Orange Seedling",
	"Avocado Seedling",
	"Almond Seedling",
	"Lemon Seedling",
	"Coconut Seedling",
	"Banana Seedling",
	"Cacao Seedling",
	"Mango Seedling",
	"Peach Seedling",
	"Apple Seedling",
	"Grape Seedling",
	"Olive Seedling",
	"Coffee Bean[1]",
	"Cherry",
	"Orange",
	"Avocado",
	"Giant Avocado",
	"Almond",
	"Lemon",
	"Coconut",
	"Banana",
	"Cacao",
	"Mango",
	"Peach",
	"Golden Peach",
	"Apple",
	"Golden Apple",
	"Grapes[5]",
	"Olive",
	"Shiitake Spores",
	"Shimeji Spores",
	"Trumpet Spores",
	"Coral Spores",
	"Common Spores",
	"Matsutake Spores",
	"Shiitake Mushroom",
	"Shimeji Mushroom",
	"Trumpet Mushroom",
	"Coral Mushroom",
	"Common Mushroom",
	"Matsutake Mushroom",
	"Honey Hive",
	"Honeycomb Hive",
	"Worker Hive",
	"Royal Hive",
	"Honey",
	"Comb Honey",
	"Worker Jelly",
	"Royal Jelly",
	"Milk",
	"Milk +",
	"Goat Milk",
	"Goat Milk +",
	"Buffalo Milk",
	"Buffalo Milk +",
	"Egg",
	"Egg +",
	"Silkie Egg",
	"Silkie Egg +",
	"Wool",
	"Wool +",
	"Suffolk Wool",
	"Suffolk Wool +",
	"Alpaca Wool",
	"Alpaca Wool +",
	"Brown Alpaca Wool",
	"Brown Alpaca Wool +",
	"Rabbit Fur",
	"Rabbit Fur +",
	"Gray Rabbit Fur",
	"Gray Rabbit Fur +",
	"Pink Rabbit Fur",
	"Pink Rabbit Fur +",
	"Sardine",
	"Shishamo Smelt",
	"Horse Mackerel",
	"Dace",
	"Herring",
	"Cod",
	"Eel",
	"Sea Bass",
	"Yellow Perch",
	"Tilapia",
	"Catfish",
	"Snakehead",
	"Star Snapper",
	"Milkfish",
	"Sea Bream",
	"Flounder",
	"Salmon",
	"Mahi-mahi",
	"Oarfish",
	"Tuna",
	"Alligator Gar",
	"Monkfish[10]",
	"Giant Catfish",
	"Crayfish",
	"Whiskered Velvet Shrimp",
	"Giant Freshwater Prawn",
	"Giant Tiger Shrimp",
	"Lobster",
	"Rock Lobster",
	"Gazami Crab",
	"Blue Crab",
	"Horsehair Crab",
	"Snow Crab",
	"Common Squid",
	"Spear Squid",
	"Bigfin Reef Squid",
	"Cuttlefish",
	"Blood Clam",
	"Oyster",
	"Mussel",
	"Abalone",
	"Spotted Eagle Ray",
	"Halibut",
	"Giant Grouper",
	"Marlin",
	"Giant Squid",
	"Giant King Crab",
	"Sparkling Fish",
	"Shining Fish",
	"Aurora Fish",
	"Small Fish Bait",
	"Medium Fish Bait",
	"Large Fish Bait",
	"Squid Bait",
	"Shrimp Bait",
	"Crab Bait",
	"Guardian Bait",
	"Mysterious Bait",
	"Log",
	"Solid Log",
	"Supple Log",
	"Durable Log",
	"Mirage Log",
	"Sap",
	"Grass",
	"Flexible Grass",
	"Tough Grass",
	"Smooth Grass",
	"Mirage Grass",
	"Stone",
	"Iron Ore",
	"Silver Ore",
	"Gold Ore",
	"Orichalcum Ore",
	"Glass Rock",
	"Coal Lump",
	"Raw White Opal",
	"Raw Red Beryl",
	"Raw Ruby",
	"Raw Sapphire",
	"Raw Emerald",
	"Raw Diamond",
	"Wild Berry",
	"Royal Fern",
	"Butterbur",
	"Horsetail",
	"Chestnut",
	"Bamboo Shoot",
	"Oregano",
	"Sage",
	"Lemon Marigold",
	"Golden Rain Rosemary",
	"Lumber",
	"Solid Lumber",
	"Supple Lumber",
	"Durable Lumber",
	"Mirage Lumber",
	"Wood Charcoal",
	"Twine",
	"Thread",
	"Flexible Thread",
	"Tough Thread",
	"Smooth Thread",
	"Mirage Thread",
	"Woolen Yarn",
	"Suffolk Yarn",
	"Alpaca Yarn",
	"Brown Alpaca Yarn",
	"Rabbit Yarn",
	"Gray Rabbit Yarn",
	"Pink Rabbit Yarn",
	"Cloth",
	"Flexible Cloth",
	"Tough Cloth",
	"Smooth Cloth",
	"Mirage Cloth",
	"Woolen Cloth",
	"Suffolk Cloth",
	"Alpaca Cloth",
	"Brown Alpaca Cloth",
	"Rabbit Cloth",
	"Gray Rabbit Cloth",
	"Pink Rabbit Cloth",
	"Iron Ingot",
	"Silver Ingot",
	"Gold Ingot",
	"Orichalcum Ingot",
	"Refined Coal",
	"Glass",
	"White Opal",
	"Red Beryl",
	"Ruby",
	"Sapphire",
	"Emerald",
	"Diamond",
	"Rock Salt",
	"Peppercorn",
	"Sugarcane",
	"Salt",
	"Pepper",
	"Sugar",
	"Soy Sauce",
	"Vinegar",
	"Olive Oil",
	"Mixed Herbs",
	"Mixed Spices",
	"Coffee Powder",
	"Cocoa Powder",
	"Flour",
	"Butter",
	"Cheese",
	"Mayonnaise",
	"Yogurt",
	"Vegetable Salad",
	"Potato Salad",
	"Mixed Salad",
	"Yum Woon Sen",
	"Lyonnaise Potatoes",
	"Egg Salad",
	"Fruit Salad",
	"Small Fish Marinade",
	"Bean Salad",
	"Salad Pickles",
	"Mushroom Marinade",
	"Bhindi Masala",
	"Kinpira Gobo",
	"Caprese Salad",
	"Spinach Salad",
	"Rosolli",
	"Kimchi",
	"Shellfish Soup",
	"Mixed Soup",
	"Yellow Potage",
	"Green Potage",
	"Hot & Sour Soup",
	"Gazpacho",
	"Okra Soup",
	"Clam Chowder",
	"Acqua Pazza",
	"Bouillabaisse",
	"Tom Yum Goong",
	"Onion Soup",
	"Tteokguk[13]",
	"Sopa de Ajo",
	"Minestrone",
	"Kenchin-jiru",
	"Oarfish Soup",
	"Sour Cherry Soup",
	"Pot-au-Feu",
	"Borscht",
	"Lemon Soup",
	"Grilled Fish",
	"Fried Egg",
	"Vegetable Sandwich",
	"Curry Rice",
	"Egg Sandwich",
	"Omelet",
	"Mala Crayfish",
	"Shrimp Toast",
	"Okra Curry[17]",
	"Sea Bream Sashimi",
	"Chuka Soba",
	"Chili Shrimp",
	"Tempura",
	"Pescatore",
	"Unaju",
	"Baked Beans",
	"Pizza",
	"Kitsune Udon",
	"Neapolitan Pasta",
	"Chestnut Rice",
	"Boiled Fish",
	"Vegetable Pizza",
	"Ratatouille",
	"Calçots",
	"Sashimi Bowl",
	"Seafood Cataplana",
	"Brothy Fried Vegetables",
	"Jam Sandwich",
	"Boiled Vegetables",
	"French Toast",
	"Mixed Rice",
	"Tuna Sandwich",
	"Boiled Sweet Potatoes[21]",
	"Cream Sauce Pasta",
	"Gratin",
	"Carbonara",
	"Boquerones en Vinagre",
	"Quiche",
	"Mushroom Pie",
	"Fried Tuna Cutlet[25]",
	"Risi e Bisi",
	"Matsutake Rice",
	"Boo Paht Pong Karee",
	"Peperoncino Pasta",
	"Stew",
	"Mushroom Cabbage Rolls",
	"Tom Yum Pla",
	"Grilled Gar",
	"Seafood Pilaf Platter",
	"Tortilla Soup",
	"Marlin Sushi",
	"Cheese Fondue",
	"Halibut al Cartoccio",
	"Genovese Pasta",
	"Giant Seafood Pizza",
	"Kimchi Hot Pot",
	"Hot Pot",
	"Onigiri",
	"Mugwort Daifuku",
	"Oshiruko",
	"Strawberry Daifuku",
	"Chestnut Monaka",
	"Botamochi",
	"Pudding",
	"Pancakes",
	"Honey Yogurt",
	"Candied Sweet Potatoes[33]",
	"Mont Blanc",
	"Injeolmi Toast",
	"Maple Muffin",
	"Baked Apple",
	"Coffee Pudding",
	"Cookies",
	"Shortcake",
	"Fruitcake",
	"Cheesecake",
	"Almond Cookies",
	"Nut Muffin",
	"Chocolate Muffin",
	"Honey Pudding",
	"Chocolate Cake",
	"Sachertorte",
	"Chocolate Cookies",
	"Tiramisu",
	"Brownies",
	"Black Forest Cake",
	"Lamington",
	"Khaoniao Mamuang",
	"Panellets",
	"Honeyed Sweet Potatoes[38]",
	"Panna Cotta",
	"Tea",
	"Vegetable Juice",
	"Cooked White Rice",
	"Tomato Juice",
	"Herb Tea",
	"Bread",
	"Hot Milk",
	"Yogurt Drink",
	"Coffee",
	"Orange Juice",
	"Milk Tea",
	"Chai",
	"Strawberry Milk",
	"Apple Juice",
	"Cocoa",
	"Onion Bread",
	"Coconut Juice",
	"Grape Juice",
	"Banana Milk",
	"Cornbread",
	"Honey Milk Latte",
	"Honey Milk Cocoa",
	"Mango Juice",
	"Honey Lemon Juice",
	"Fruit au Lait",
	"Strawberry Jam",
	"Cherry Jam",
	"Orange Marmalade",
	"Watermelon Jam",
	"Melon Jam",
	"Pineapple Jam",
	"Lemon Jam",
	"Mango Jam",
	"Coconut Jam",
	"Banana Jam",
	"Peach Jam",
	"Apple Jam",
	"Grape Jam",
	"Floral Essence",
	"Fruit Essence",
	"Bouquet Essence",
	"Floral Perfume",
	"Fruit Perfume",
	"Bouquet Perfume",
	"Charming Perfume",
	"Springtime March",
	"Blazing Waltz",
	"Moonlight Nocturne",
	"Winter Bloom Rondo",
	"Earth Concerto",
	"Rainbow Bouquet",
	"Jewelry Ring",
	"Jewelry Locket",
	"Fashionable Bracelet",
	"Shiny Watch",
	"Confession Pendant",
	"Blue Feather",
	"Fulgurite",
	"Arthurite",
	"Desert Rose",
	"Okenite",
	"Gibeon Stone",
	"Parasite Stone",
	"Ambergris",
	"Cave Pearl",
	"Crystallized Amber",
	"Olive Crystal",
	"Antique Accessory",
	"Antique Mirror",
	"Antique Decoration",
	"Antique Monument",
	"Timeworn Coin",
	"Timeworn Fan",
	"Timeworn Scroll",
	"Timeworn Compass",
	"Timeworn Map",
	"Sparkling Spur",
	"Shiny Trophy Buckle",
	"Cow Helm",
	"Golden Horn",
	"Ancient Black Tome",
	"Ancient White Tome",
	"Glass Slipper",
	"Prehistoric Gear",
	"Ancient Shell Fossil",
	"Ancient Bug Fossil",
	"Dinosaur Fossil"
];