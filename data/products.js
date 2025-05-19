const products = [
  {
    id: 1,
    name: "La Roche-Posay Cleanser",
    slug: "la-roche-posay-cleanser",
    category: "health-personal-care",
    subcategory: "skin-care",
    image: "https://m.media-amazon.com/images/I/717F3ObzIeL._SX522_.jpg",
    affiliateLink: "https://amzn.to/4dnOed7",
    fallbackDescription: "A gentle lather that lifts away oil and impurities without stripping your skin. Balancing niacinamide, soothing thermal water, and barrier-loving ceramides come together in this silky wash made to comfort even the most sensitive complexions.",
    affiliateData: {
      source: "Amazon",
      asin: "B01N34XW93",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 2,
    name: "Thayers Rose Toner",
    slug: "thayers-rose-toner",
    category: "health-personal-care",
    subcategory: "skin-care",
    image: "https://m.media-amazon.com/images/I/61wkQbHSoHL._SX679_.jpg",
    affiliateLink: "https://amzn.to/4j7ioTj",
    fallbackDescription: "A soft sweep of rose and aloe that tones, soothes, and hydrates—without alcohol or drama. Pores look calmer, skin feels balanced, and your glow gets just a little more effortless with every use. Gentle, grounding, and quietly iconic.",
    affiliateData: {
      source: "Amazon",
      asin: "B007HD570Q",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 3,
    name: "CeraVe Moisturizing Cream",
    slug: "cerave-moisturizing-cream",
    category: "health-personal-care",
    subcategory: "skin-care",
    image: "https://m.media-amazon.com/images/I/61pIL2maVKL._SX679_.jpg",
    affiliateLink: "https://amzn.to/4mFuXbx",
    fallbackDescription: "Rich, fragrance-free hydration that melts into skin without a trace. Packed with ceramides and hyaluronic acid, this velvety cream softens dry spots and strengthens your skin’s barrier—leaving you calm, smooth, and quietly radiant all day.",
    affiliateData: {
      source: "Amazon",
      asin: "B00TTD9BRC",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 4,
    name: "Cliganic Jojoba Oil",
    slug: "cliganic-jojoba-oil",
    category: "health-personal-care",
    subcategory: "skin-care",
    image: "https://m.media-amazon.com/images/I/81eEcCjd6rL._SX679_.jpg",
    affiliateLink: "https://amzn.to/434YP9q",
    fallbackDescription: "Silky, weightless, and endlessly versatile—this cold-pressed jojoba glides on like a secret, sealing in moisture for skin, hair, and nails with a quiet kind of glow. Just one pure, organic ingredient. Nothing more, nothing less.",
    affiliateData: {
      source: "Amazon",
      asin: "B01A74442I",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 5,
    name: "CeraVe Daily Lotion",
    slug: "cerave-daily-lotion",
    category: "health-personal-care",
    subcategory: "skin-care",
    image: "https://m.media-amazon.com/images/I/71etIFqlwCL._SX679_.jpg",
    affiliateLink: "https://amzn.to/4jaL1ij",
    fallbackDescription: "This weightless hydrator melts in like a whisper, restoring balance with ceramides and hyaluronic acid. Fragrance-free and dermatologist-loved—it’s your skin’s quiet guardian, morning to night.",
    affiliateData: {
      source: "Amazon",
      asin: "B07RK4HST7",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 6,
    name: "NIVEA Cocoa Cream",
    slug: "nivea-cocoa-cream",
    category: "health-personal-care",
    subcategory: "skin-care",
    image: "https://m.media-amazon.com/images/I/61+6ztWgSTL._SX679_.jpg",
    affiliateLink: "https://amzn.to/44LaeMW",
    fallbackDescription: "Wrap your skin in rich cocoa butter and vitamin E for a glow that lingers. This velvety cream melts in deep—leaving you soft, radiant, and comforted from head to toe. A little indulgence for every dry spot you love.",
    affiliateData: {
      source: "Amazon",
      asin: "B01H6OYPU8",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 7,
    name: "Avalon Lavender Wash",
    slug: "avalon-lavender-wash",
    category: "health-personal-care",
    subcategory: "soap-body-cleansers",
    image: "https://m.media-amazon.com/images/I/618Ad4hEuzL._SX679_.jpg",
    affiliateLink: "https://amzn.to/44LDAKW",
    fallbackDescription: "A calming blend of lavender and botanicals turns your shower into a gentle ritual. This plant-based wash soothes dry skin with every drop—pure, hydrating, and quietly luxurious from start to finish.",
    affiliateData: {
      source: "Amazon",
      asin: "B0011DJICG",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 8,
    name: "Dove Anti-Stress Bar",
    slug: "dove-anti-stress-bar",
    category: "health-personal-care",
    subcategory: "soap-body-cleansers",
    image: "https://m.media-amazon.com/images/I/71Jig-H-5GL._SX679_.jpg",
    affiliateLink: "https://amzn.to/3GZUewC",
    fallbackDescription: "Infused with calming blue chamomile and creamy oat milk, this gentle bar melts stress away with every lather. Made with ¼ moisturizing cream and plant-based cleansers, it softens skin while soothing your senses—like a breath of quiet in your day.",
    affiliateData: {
      source: "Amazon",
      asin: "B09S7N94SZ",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 9,
    name: "Native Body Wash",
    slug: "native-body-wash",
    category: "health-personal-care",
    subcategory: "soap-body-cleansers",
    image: "https://m.media-amazon.com/images/I/41uqnlfSITL._SX679_.jpg",
    affiliateLink: "https://amzn.to/4dlIuQZ",
    fallbackDescription: "Creamy coconut meets warm vanilla in this skin-loving wash that turns your shower into a soft escape. Made with naturally derived cleansers and no sulfates or dyes—just clean ingredients, gentle suds, and a scent that lingers like a secret.",
    affiliateData: {
      source: "Amazon",
      asin: "B0B69528QC",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 10,
    name: "Dove Oat Milk Bar",
    slug: "dove-oat-milk-bar",
    category: "health-personal-care",
    subcategory: "soap-body-cleansers",
    image: "https://m.media-amazon.com/images/I/71+MEnecLnL._SX679_.jpg",
    affiliateLink: "https://amzn.to/4j7iMkw",
    fallbackDescription: "Juicy berries meet creamy oat milk in this dreamy, skin-softening bar that turns your shower into a little moment of dessert. Gentle, pH-balanced, and made to love on your skin — with no sulfates, no parabens, and just the good stuff.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CX5MX3CV",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 11,
    name: "Neutrogena Rainbath Gel",
    slug: "neutrogena-rainbath-gel",
    category: "health-personal-care",
    subcategory: "soap-body-cleansers",
    image: "https://m.media-amazon.com/images/I/61uE5uVcEEL._SX679_.jpg",
    affiliateLink: "https://amzn.to/3H0Aglc",
    fallbackDescription: "A warm, fragrant blend of herbs and spices swirls into a creamy lather that softens skin and soothes the senses. Clean-rinsing and ultra-versatile—it’s your daily dose of calm, comfort, and a little bit of spa energy.",
    affiliateData: {
      source: "Amazon",
      asin: "B0BNQWFWLF",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 12,
    name: "Dr. Bronner’s Bar Soap",
    slug: "dr-bronners-bar-soap",
    category: "health-personal-care",
    subcategory: "soap-body-cleansers",
    image: "https://m.media-amazon.com/images/I/71wTBVGMKzS._SX679_.jpg",
    affiliateLink: "https://amzn.to/44PCcXT",
    fallbackDescription: "A crisp, herbal cleanse that feels as grounding as it is refreshing. Made with organic oils and no synthetic anything, it lathers rich, rinses clean, and leaves skin soft, calm, and quietly invigorated. Pure care—head to toe.",
    affiliateData: {
      source: "Amazon",
      asin: "B001ET77OS",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 13,
    name: "Philips SatinShave",
    slug: "philips-satinshave",
    category: "health-personal-care",
    subcategory: "shave-hair-removal",
    image: "https://m.media-amazon.com/images/I/71hjwQI7uKL._SX679_.jpg",
    affiliateLink: "https://amzn.to/3YMNU1x",
    fallbackDescription: "Glides gently over skin, catching every hair while skipping the irritation. Whether you shave in the shower or on the fly, it’s a quiet little essential that travels well, feels effortless, and keeps your skin soft, smooth, and beautifully yours.",
    affiliateData: {
      source: "Amazon",
      asin: "B00K3FFIOA",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 14,
    name: "Nair Shower Cream",
    slug: "nair-shower-cream",
    category: "health-personal-care",
    subcategory: "shave-hair-removal",
    image: "https://m.media-amazon.com/images/I/71DB4lLVOXL._SX679_.jpg",
    affiliateLink: "https://amzn.to/3GWA1rl",
    fallbackDescription: "Glides on like lotion, rinses off like a dream. Infused with coconut oil and vitamin E, this gentle cream whisks away hair in minutes—leaving skin soft, smooth, and blissfully stubble-free.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CL18HCKS",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 15,
    name: "Billie Razor Kit",
    slug: "billie-razor-kit",
    category: "health-personal-care",
    subcategory: "shave-hair-removal",
    image: "https://m.media-amazon.com/images/I/61ZJOdt28sL._SX679_.jpg",
    affiliateLink: "https://amzn.to/44KyXB0",
    fallbackDescription: "This dreamy razor glides with five aloe-kissed blades and an easy-grip handle that feels like it was made just for you. Comes with a magnetic holder that keeps it dry, clean, and always within reach—because your shave should be as effortless as you are.",
    affiliateData: {
      source: "Amazon",
      asin: "B0BQP1WVT9",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 16,
    name: "Venus Smooth Swirl Razor",
    slug: "venus-smooth-swirl-razor",
    category: "health-personal-care",
    subcategory: "shave-hair-removal",
    image: "https://m.media-amazon.com/images/I/712LGQ-TkDL._SX679_.jpg",
    affiliateLink: "https://amzn.to/3FfUAP1",
    fallbackDescription: "Glides like silk, flexes like a dream. With five smoothing blades and a pivoting head that hugs every curve, this luxe razor brings effortless precision—and a finish so smooth, you'll forget stubble was ever a thing.",
    affiliateData: {
      source: "Amazon",
      asin: "B07MRV5H7S",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 17,
    name: "eos Shave Oil",
    slug: "eos-shave-oil",
    category: "health-personal-care",
    subcategory: "shave-hair-removal",
    image: "https://m.media-amazon.com/images/I/61NJWAgT7hL._SY879_.jpg",
    affiliateLink: "https://amzn.to/44JaPyA",
    fallbackDescription: "Wrap your skin in vanilla, caramel, and soft musk with this ultra-silky shave oil. Cushions every glide, calms every curve, and leaves you touchably smooth—head to toe. Cashmere-soft, bikini-area safe, and totally irresistible.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CPYQZR23",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 18,
    name: "Braun Silk-épil 7",
    slug: "braun-silk-epil-7",
    category: "health-personal-care",
    subcategory: "shave-hair-removal",
    image: "https://m.media-amazon.com/images/I/71tGMyYSEAL._SX679_.jpg",
    affiliateLink: "https://amzn.to/43gln5L",
    fallbackDescription: "Leaves skin smooth for weeks, not days. Glides gently in or out of the shower, catching even the tiniest hairs with ease. A soft, wide sweep—and it’s gone. Quietly powerful, for legs that feel as smooth as they look.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CWJF37L8",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 19,
    name: "LMNT Electrolyte Mix",
    slug: "lmnt-electrolyte-mix",
    category: "health-personal-care",
    subcategory: "vitamins-supplements",
    image: "https://m.media-amazon.com/images/I/71Pr1-qwwML._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4kuADDk",
    fallbackDescription: "Hydration that actually works—no sugar, no fillers, just pure electrolytes in craveable flavors. With sodium, magnesium, and potassium in balance, this mix is a salty little secret for feeling strong, clear, and fully charged.",
    affiliateData: {
      source: "Amazon",
      asin: "B084HQ4DYQ",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id:20,
    name: "GoMacro Oatmeal Bar",
    slug: "gomacro-oatmeal-bar",
    category: "health-personal-care",
    subcategory: "vitamins-supplements",
    image: "https://m.media-amazon.com/images/I/61BhKQWEPmL._SX679_PIbundle-12,TopRight,0,0_AA679SH20_.jpg",
    affiliateLink: "https://amzn.to/4ml13cc",
    fallbackDescription: "Soft-baked oats, melty chocolate chips, and plant-powered protein—like a cozy cookie made clean. This nut-free bar is your go-to for satisfying energy, snackable joy, and a sweet little pause that actually fuels you.",
    affiliateData: {
      source: "Amazon",
      asin: "B07TPYQHS9",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 21,
    name: "Nature Made B12",
    slug: "nature-made-b12",
    category: "health-personal-care",
    subcategory: "vitamins-supplements",
    image: "https://m.media-amazon.com/images/I/713dgE1NB6L._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3GZebUe",
    fallbackDescription: "A quiet daily boost for energy, mood, and clarity. These easy softgels help convert food into fuel and support your brain and blood health—so you feel more like yourself, all day long.",
    affiliateData: {
      source: "Amazon",
      asin: "B00DS5BGDY",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id:22,
    name: "OLLY Women’s Multivitamin",
    slug: "olly-womens-multivitamin",
    category: "health-personal-care",
    subcategory: "vitamins-supplements",
    image: "https://m.media-amazon.com/images/I/71F0tfs8m0L._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/435jiuL",
    fallbackDescription: "Berry-bright and packed with essentials, these daily gummies support energy, skin, immunity, and bone health—without the chalky vibe. A delicious little ritual that helps fill the gaps when life gets delightfully full.",
    affiliateData: {
      source: "Amazon",
      asin: "B014G4AY1A",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 23,
    name: "NatureWise Vitamin D3",
    slug: "naturewise-vitamin-d3",
    category: "health-personal-care",
    subcategory: "vitamins-supplements",
    image: "https://m.media-amazon.com/images/I/7162k36ybFL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4k4oG7o",
    fallbackDescription: "Tiny but mighty, these pure D3 softgels deliver a daily dose of sunshine—supporting strong bones, smooth muscle function, and immune resilience year-round. Clean, potent, and nestled in organic olive oil for optimal absorption.",
    affiliateData: {
      source: "Amazon",
      asin: "B00GB85JR4",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 24,
    name: "Garden of Life Vanilla Protein",
    slug: "garden-of-life-vanilla-protein",
    category: "health-personal-care",
    subcategory: "vitamins-supplements",
    image: "https://m.media-amazon.com/images/I/71ai4GsFlxL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4388wnC",
    fallbackDescription: "Silky, plant-powered, and surprisingly craveable—this organic blend delivers 22g of protein with a side of probiotics and enzymes. Smooth in texture, rich in vanilla, and kind to your gut, it’s your daily ritual for feeling strong and light.",
    affiliateData: {
      source: "Amazon",
      asin: "B007SYT7LO",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 25,
    name: "vH Essentials Wash",
    slug: "vh-essentials-wash",
    category: "health-personal-care",
    subcategory: "feminine-care",
    image: "https://m.media-amazon.com/images/I/51Tm5Jc9CVL._SX679_.jpg",
    affiliateLink: "https://amzn.to/43n0C8D",
    fallbackDescription: "A refreshing daily cleanse infused with tea tree oil, lavender, and prebiotics to gently balance pH and support intimate wellness—because feeling fresh should never feel complicated.",
    affiliateData: {
      source: "Amazon",
      asin: "B0072K2BMG",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 26,
    name: "Summer’s Eve Douche",
    slug: "summers-eve-douche",
    category: "health-personal-care",
    subcategory: "feminine-care",
    image: "https://m.media-amazon.com/images/I/71ymbx1Xu5L._SX679_.jpg",
    affiliateLink: "https://amzn.to/44J27jL",
    fallbackDescription: "A gentle cleanse with a boric acid complex designed to match your body’s natural chemistry—balancing, refreshing, and subtly scented for moments when you want to feel especially clean and quietly confident.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CLZ1KMGH",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 27,
    name: "Honey Pot Wash",
    slug: "honey-pot-wash",
    category: "health-personal-care",
    subcategory: "feminine-care",
    image: "https://m.media-amazon.com/images/I/61+Iy7DE0+L._SX679_.jpg",
    affiliateLink: "https://amzn.to/4356c0C",
    fallbackDescription: "A soothing, plant-based cleanse crafted for sensitive skin—infused with lavender, apple cider vinegar, and lactic acid to refresh, rebalance, and care for your most delicate places. Clean, calm, and just right for every day.",
    affiliateData: {
      source: "Amazon",
      asin: "B0BVDR7HXV",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 28,
    name: "Aloe Cadabra Lube",
    slug: "aloe-cadabra-lube",
    category: "health-personal-care",
    subcategory: "feminine-care",
    image: "https://m.media-amazon.com/images/I/71vRwf-IVHL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/45fFPX3",
    fallbackDescription: "A gentle, water-based formula infused with organic aloe to hydrate, soothe, and move with you. Unscented, pH-balanced, and free from anything harsh—just pure, plant-powered intimacy that feels as natural as it should.",
    affiliateData: {
      source: "Amazon",
      asin: "B0161J28AI",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 29,
    name: "Lume Deodorant Wipes",
    slug: "lume-deodorant-wipes",
    category: "health-personal-care",
    subcategory: "feminine-care",
    image: "https://m.media-amazon.com/images/I/713x8ohuprL._SX679_.jpg",
    affiliateLink: "https://amzn.to/3ZjiqQD",
    fallbackDescription: "Soft, skin-loving wipes with a crisp cucumber twist—clinically proven to nix odor for 24 hours. Gentle enough for everywhere, perfect for anywhere. Freshness that moves with you, and never oversteps.",
    affiliateData: {
      source: "Amazon",
      asin: "B08CMP263B",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 30,
    name: "Summer’s Eve Spray",
    slug: "summers-eve-spray",
    category: "health-personal-care",
    subcategory: "feminine-care",
    image: "https://m.media-amazon.com/images/I/71l6nBpIhNL._AC_SX679_PIbundle-3,TopRight,0,0_SH20_.jpg",
    affiliateLink: "https://amzn.to/4mnKDQf",
    fallbackDescription: "A barely-there burst of crisp, floral freshness that keeps you feeling clean, confident, and dry—no matter the pace of your day. Talc-free, pH-balanced, and gentle enough for wherever life takes you.",
    affiliateData: {
      source: "Amazon",
      asin: "B07KRTZW7D",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 31,
    name: "Conair LED Vanity Mirror",
    slug: "conair-led-vanity-mirror",
    category: "home-kitchen",
    subcategory: "decor",
    image: "https://m.media-amazon.com/images/I/61N7KHcq-KL._SX679_.jpg",
    affiliateLink: "https://amzn.to/4kmFJBd",
    fallbackDescription: "Bright, flattering light with 1x and 10x magnification makes this satin-finished mirror a daily ritual worth savoring. Three settings let you shift from soft morning glow to full glam precision—perfect for every angle, every mood.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CKTTW4FB",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 32,
    name: "Stoneware Serving Bowl",
    slug: "stoneware-serving-bowl",
    category: "home-kitchen",
    subcategory: "decor",
    image: "https://m.media-amazon.com/images/I/71A+4T0kO8L._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/43edFdT",
    fallbackDescription: "A wabi-sabi favorite with sculptural edges and a grounding glaze. Just as lovely holding snacks as it is sitting empty—quietly catching the eye from across the room.",
    affiliateData: {
      source: "Amazon",
      asin: "B0C71JJP5Q",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 33,
    name: "Chesapeake Lavender Candle",
    slug: "chesapeake-lavender-candle",
    category: "home-kitchen",
    subcategory: "decor",
    image: "https://m.media-amazon.com/images/I/71NXamJ3rjL._AC_SY879_.jpg",
    affiliateLink: "https://amzn.to/4k2UPfC",
    fallbackDescription: "Lavender, thyme, and soft candlelight swirl into a moment of calm. Poured in a frosted jar and infused with essential oils, it’s the kind of scent that quiets the room and softens the edges of the day.",
    affiliateData: {
      source: "Amazon",
      asin: "B07GH691SQ",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 34,
    name: "Umbra Luna Frame",
    slug: "umbra-luna-frame",
    category: "home-kitchen",
    subcategory: "decor",
    image: "https://m.media-amazon.com/images/I/71qdMjkPnsL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3ZreCwP",
    fallbackDescription: "A modern take on the gallery wall, this circular frame holds nine favorite moments in one bold silhouette. Clean lines, effortless swaps, and just enough drama to make your memories feel like art.",
    affiliateData: {
      source: "Amazon",
      asin: "B008N4NJ8U",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 35,
    name: "Yankee Candle – Home Sweet Home",
    slug: "yankee-candle-home-sweet-home",
    category: "home-kitchen",
    subcategory: "decor",
    image: "https://m.media-amazon.com/images/I/71zqo9BFowL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3HdgLG6",
    fallbackDescription: "A nostalgic blend of cinnamon, spice, and soft tea warmth—like coming home to something familiar and kind. Burns slow and steady, casting comfort for over 100 hours of golden glow.",
    affiliateData: {
      source: "Amazon",
      asin: "B000WUFVR0",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 36,
    name: "Tribesigns Corner Shelf",
    slug: "tribesigns-corner-shelf",
    category: "home-kitchen",
    subcategory: "decor",
    image: "https://m.media-amazon.com/images/I/717B9yjh5qL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/43hHadm",
    fallbackDescription: "Slips into corners with ease, offering six tiers of rustic beauty. A thoughtful spot for sun-loving plants, stacked reads, or small treasures that deserve to be seen and softly lit.",
    affiliateData: {
      source: "Amazon",
      asin: "B09FDS7HTL",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 37,
    name: "Best Choice Egg Chair",
    slug: "best-choice-egg-chair",
    category: "home-kitchen",
    subcategory: "furniture",
    image: "https://m.media-amazon.com/images/I/818UtRd2FpL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4jZTPIX",
    fallbackDescription: "Sink into this airy boho nest—woven for lazy afternoons, padded for cloudlike comfort, and built to live beautifully indoors or out. A dreamy perch for reading, sipping, or simply being.",
    affiliateData: {
      source: "Amazon",
      asin: "B094YZ9SQ7",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 38,
    name: "Tribesigns LED Coffee Table",
    slug: "tribesigns-led-coffee-table",
    category: "home-kitchen",
    subcategory: "furniture",
    image: "https://m.media-amazon.com/images/I/81765T+AVOL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4jdtRAK",
    fallbackDescription: "A rustic-modern standout with moody LED charm, this low-profile table anchors your space with warmth, texture, and a soft glow. Spacious, sturdy, and designed to invite connection—perfect for late-night chats or lazy weekend spreads.",
    affiliateData: {
      source: "Amazon",
      asin: "B0BS3T7RC5",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 39,
    name: "VIVO Corner Standing Desk",
    slug: "vivo-corner-standing-desk",
    category: "home-kitchen",
    subcategory: "furniture",
    image: "https://m.media-amazon.com/images/I/61kjJCCg+EL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/43lQhJU",
    fallbackDescription: "Designed for flow and function, this electric corner desk moves with you—offering seamless height adjustment, generous surface space, and clean, modern lines that make your workspace feel both focused and free.",
    affiliateData: {
      source: "Amazon",
      asin: "B09B2VDSYJ",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 40,
    name: "Serta Convertible Sofa",
    slug: "serta-convertible-sofa",
    category: "home-kitchen",
    subcategory: "furniture",
    image: "https://m.media-amazon.com/images/I/91jzM64fdML._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3F6Q59z",
    fallbackDescription: "With clean lines, plush comfort, and a hidden pull-out bed, this sofa transitions from stylish seating to cozy sleep space in seconds. A perfect blend of form, function, and quiet charm for any smaller space.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CHK81K9B",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 41,
    name: "Vasagle Farmhouse Nightstands",
    slug: "vasagle-farmhouse-nightstands",
    category: "home-kitchen",
    subcategory: "furniture",
    image: "https://m.media-amazon.com/images/I/716xgCxGnjL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3H1Mpq8",
    fallbackDescription: "With barn door charm and warm rustic tones, these nightstands add a cozy touch to any room. Open shelves, hidden storage, and reversible doors make them feel as thoughtful as they are timeless.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CHJ7DW35",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id:42,
    name: "Serta Executive Chair",
    slug: "serta-executive-chair",
    category: "home-kitchen",
    subcategory: "furniture",
    image: "https://m.media-amazon.com/images/I/41Exnr-3JPL._AC_US100_.jpg",
    affiliateLink: "https://amzn.to/43fmR05",
    fallbackDescription: "A chair that moves with you—literally. With dynamic lumbar support, cooling airflow, and plush layered foam, it brings ergonomic elegance to long days at your desk. Supportive, breathable, and quietly luxurious.",
    affiliateData: {
      source: "Amazon",
      asin: "B07645VL18",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 43,
    name: "Lane Linen Sheets",
    slug: "lane-linen-sheets",
    category: "home-kitchen",
    subcategory: "bed-bath",
    image: "https://m.media-amazon.com/images/I/81Ems7T0ZBL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3HdY59d",
    fallbackDescription: "Silky-soft and breathable, these 100% Egyptian cotton sheets wrap you in hotel-style comfort. With their luxe finish and tailored fit, they turn everyday rest into a quietly elevated ritual.",
    affiliateData: {
      source: "Amazon",
      asin: "B09B2GY6GS",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 44,
    name: "Casper Sleep Pillow",
    slug: "casper-sleep-pillow",
    category: "home-kitchen",
    subcategory: "bed-bath",
    image: "https://m.media-amazon.com/images/I/61oijjmB6QL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3YNzoqq",
    fallbackDescription: "Cool, breathable, and perfectly cushioned, this dual-layer design offers dreamy support without the bulk. Fluffy yet structured, it keeps its shape—and your sleep—effortlessly aligned.",
    affiliateData: {
      source: "Amazon",
      asin: "B07KRKFLCT",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 45,
    name: "Serta Down Comforter",
    slug: "serta-down-comforter",
    category: "home-kitchen",
    subcategory: "bed-bath",
    image: "https://m.media-amazon.com/images/I/81Wv8swJcOL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4ml62cM",
    fallbackDescription: "Fluffy yet breathable, this all-season feather and down blend wraps you in hotel-level comfort with a naturally soft cotton shell. Lightweight, cozy, and made to feel like the best part of your day.",
    affiliateData: {
      source: "Amazon",
      asin: "B082YL5ZT1",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 46,
    name: "Levtex Cream Quilt",
    slug: "levtex-cream-quilt",
    category: "home-kitchen",
    subcategory: "bed-bath",
    image: "https://m.media-amazon.com/images/I/814Xp5nv9uL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4ms47n5",
    fallbackDescription: "Softly stitched and effortlessly serene, this reversible cotton quilt wraps your bed in a layer of delicate texture and calm. It’s a simple, timeless piece that makes every corner feel quietly pulled together.",
    affiliateData: {
      source: "Amazon",
      asin: "B07NPZZQ1X",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 47,
    name: "Bedsure Cotton Duvet",
    slug: "bedsure-cotton-duvet",
    category: "home-kitchen",
    subcategory: "bed-bath",
    image: "https://m.media-amazon.com/images/I/719mjv+lSpL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4j4xKYA",
    fallbackDescription: "Cozy waffle texture meets breathable cotton in this duvet that brings a soft, relaxed elegance to your space. Light yet grounding—like sinking into quiet luxury.",
    affiliateData: {
      source: "Amazon",
      asin: "B08CXKP2GY",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 48,
    name: "Tempur-Pedic Symphony Pillow",
    slug: "tempur-pedic-symphony-pillow",
    category: "home-kitchen",
    subcategory: "bed-bath",
    image: "https://m.media-amazon.com/images/I/81S4OZJthtL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4jWCvo9",
    fallbackDescription: "Soft, supportive, and smartly dual-sided—this memory foam pillow adapts to your sleep style and keeps its shape like a dream.",
    affiliateData: {
      source: "Amazon",
      asin: "B07CMK551C",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 49,
    name: "FDW Zero Gravity Chairs",
    slug: "fdw-zero-gravity-chairs",
    category: "home-kitchen",
    subcategory: "garden-outdoor",
    image: "https://m.media-amazon.com/images/I/71zQqUjb0FL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3YMQDYN",
    fallbackDescription: "Recline with ease and let the day soften around you. With built-in cup holders and a fluid, weightless feel, these folding loungers turn any patch of sun into a personal escape.",
    affiliateData: {
      source: "Amazon",
      asin: "B07CWT7W85",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 50,
    name: "Blink Outdoor Floodlight",
    slug: "blink-outdoor-floodlight",
    category: "home-kitchen",
    subcategory: "garden-outdoor",
    image: "https://m.media-amazon.com/images/I/41B0SP8h2nL._SX522_.jpg",
    affiliateLink: "https://amzn.to/3H0P17S",
    fallbackDescription: "A soft wash of light, a quiet eye on your space. This smart floodlight blends seamlessly into the background—until you need it. Then it’s all clarity, presence, and calm control, right from your phone.",
    affiliateData: {
      source: "Amazon",
      asin: "0000000000",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 51,
    name: "Fiskars Pruning Shears",
    slug: "fiskars-pruning-shears",
    category: "home-kitchen",
    subcategory: "garden-outdoor",
    image: "https://m.media-amazon.com/images/I/712oOsznuxL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3S8zXHy",
    fallbackDescription: "Slip into the rhythm of pruning with shears that move as intuitively as your hands. With clean, confident cuts and a softly contoured grip, they make tending to blooms and branches feel like second nature.",
    affiliateData: {
      source: "Amazon",
      asin: "B00002N66H",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 52,
    name: "Yaheetech Fire Pit",
    slug: "yaheetech-fire-pit",
    category: "home-kitchen",
    subcategory: "garden-outdoor",
    image: "https://m.media-amazon.com/images/I/811M40GHHYL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4dvJRwM",
    fallbackDescription: "Rustic charm meets flickering warmth in this lightweight, stone-etched fire pit—your year-round invitation to stay out just a little longer.",
    affiliateData: {
      source: "Amazon",
      asin: "B0822LML82",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 53,
    name: "Fiskars Ergo Trowel",
    slug: "fiskars-ergo-trowel",
    category: "home-kitchen",
    subcategory: "garden-outdoor",
    image: "https://m.media-amazon.com/images/I/71JZ27DmN5L._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/43gLDNs",
    fallbackDescription: "Cuts through soil with quiet ease, pairing a polished blade with a naturally balanced grip. Built for everyday digging with just the right amount of grace.",
    affiliateData: {
      source: "Amazon",
      asin: "B004S0PGPM",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 54,
    name: "Keter Patio Storage Bench",
    slug: "keter-patio-storage-bench",
    category: "home-kitchen",
    subcategory: "garden-outdoor",
    image: "https://m.media-amazon.com/images/I/61K6xOf5GDL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3YOJ7wA",
    fallbackDescription: "Keeps essentials dry and tucked away with ease, while doubling as a bench with subtle charm. Clean lines, wood-grain texture, and a soft-close lid make it feel quietly elevated.",
    affiliateData: {
      source: "Amazon",
      asin: "B01HDPY7RG",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 55,
    name: "Simple Houseware Drawer Organizers",
    slug: "simple-houseware-drawer-organizers",
    category: "home-kitchen",
    subcategory: "storage-organization",
    image: "https://m.media-amazon.com/images/I/81RVQkMQcaL._AC_SX679_PIbundle-4,TopRight,0,0_SH20_.jpg",
    affiliateLink: "https://amzn.to/4j5iiv7",
    fallbackDescription: "Slip a little beauty into your everyday with these soft, foldable organizers — the perfect way to keep your prettiest things tucked neatly and close at hand.",
    affiliateData: {
      source: "Amazon",
      asin: "B01DYXHI0E",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 56,
    name: "Rubbermaid Brilliance Set",
    slug: "rubbermaid-brilliance-set",
    category: "home-kitchen",
    subcategory: "storage-organization",
    image: "https://m.media-amazon.com/images/I/818i3AJdNdL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4jWYsDM",
    fallbackDescription: "Tidy up your kitchen with these crystal-clear beauties — perfectly sealed, effortlessly stackable, and ready to make every meal feel a little more pulled-together.",
    affiliateData: {
      source: "Amazon",
      asin: "B079M8FPTW",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 57,
    name: "Utopia Home Wooden Hangers",
    slug: "utopia-home-wooden-hangers",
    category: "home-kitchen",
    subcategory: "storage-organization",
    image: "https://m.media-amazon.com/images/I/81qmhsAkmYL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4j7uZWz",
    fallbackDescription: "Elevate your closet with a little everyday luxury — slim, sturdy, and shaped to keep every piece draped just right, from silky dresses to your favorite tailored jacket.",
    affiliateData: {
      source: "Amazon",
      asin: "B01MPY18P3",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 58,
    name: "Simple Houseware Hanging Organizer",
    slug: "simple-houseware-hanging-organizer",
    category: "home-kitchen",
    subcategory: "storage-organization",
    image: "https://m.media-amazon.com/images/I/71d2zg7GAeL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/43u1sl9",
    fallbackDescription: "Slip a little extra calm into your mornings — five soft shelves and airy side pockets ready to keep your essentials tucked sweetly in place.",
    affiliateData: {
      source: "Amazon",
      asin: "B06XSS3466",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 59,
    name: "SONGMICS Storage Cubes",
    slug: "songmics-storage cubes",
    category: "home-kitchen",
    subcategory: "storage-organization",
    image: "https://m.media-amazon.com/images/I/81S5euv7YmL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3GSsc5Y",
    fallbackDescription: "Soft, foldable, and full of charm — these little cubes slip into your space like a secret weapon for keeping life light, lovely, and beautifully organized.",
    affiliateData: {
      source: "Amazon",
      asin: "B07SPR2HPT",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 60,
    name: "Sterilite Underbed Storage",
    slug: "sterilite-underbed-storage",
    category: "home-kitchen",
    subcategory: "storage-organization",
    image: "https://m.media-amazon.com/images/I/61-aGMXCofL._AC_SX679_PIbundle-4,TopRight,0,0_SH20_.jpg",
    affiliateLink: "https://amzn.to/44xhagr",
    fallbackDescription: "Tuck away the mess with a glide and a grin — these sleek bins slip under your bed, making space feel lighter, calmer, and a little more yours.",
    affiliateData: {
      source: "Amazon",
      asin: "B01MRZE720",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 61,
    name: "Bose QuietComfort Ultra",
    slug: "bose-quietcomfort-ultra",
    category: "electronics",
    subcategory: "headphones",
    image: "https://m.media-amazon.com/images/I/51yWZxN3vRL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3GRJd0e",
    fallbackDescription: "Sink into your own private world with plush comfort, dreamy sound, and a little extra magic that moves with you, wherever the day dares to wander.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CCZ1HQ39",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 62,
    name: "Apple AirPods 4",
    slug: "apple-airpods-4",
    category: "electronics",
    subcategory: "headphones",
    image: "https://m.media-amazon.com/images/I/61iBtxCUabL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4kfVVEn",
    fallbackDescription: "Light as a whisper and bold where it counts, these effortless little essentials tune every moment to your mood — with comfort, clarity, and just a hint of magic you can’t quite resist.",
    affiliateData: {
      source: "Amazon",
      asin: "B0DGHMNQ5Z",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 63,
    name: "Sony WH-1000XM4",
    slug: "sony-wh-1000xm4",
    category: "electronics",
    subcategory: "headphones",
    image: "https://m.media-amazon.com/images/I/61UgZSYRllL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4kiMm7N",
    fallbackDescription: "Slip into a world that moves to your rhythm — rich sound, pure calm, and a little spark of magic that makes every note feel like it’s meant just for you.",
    affiliateData: {
      source: "Amazon",
      asin: "B0863FR3S9",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 64,
    name: "Beats Studio Pro",
    slug: "beats-studio-pro",
    category: "electronics",
    subcategory: "headphones",
    image: "https://m.media-amazon.com/images/I/410uxmIR1wL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3Sydt2D",
    fallbackDescription: "Deep, velvety sound that wraps around you — designed to move with every moment and leave just a little more magic in the air.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CMZQNDR4",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 65,
    name: "Apple AirPods Pro 2",
    slug: "apple-airpods-pro-2",
    category: "electronics",
    subcategory: "headphones",
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3GSnbdE",
    fallbackDescription: "Crisp, soul-hugging sound and a fit so intuitive, it feels like they were made just for you — every note, every word, perfectly within reach.",
    affiliateData: {
      source: "Amazon",
      asin: "B0D1XD1ZV3",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 66,
    name: "Beats Studio Buds+",
    slug: "beats-studio-buds",
    category: "electronics",
    subcategory: "headphones",
    image: "https://m.media-amazon.com/images/I/51AN8ExPAVL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4mu1FMS",
    fallbackDescription: "Smooth, soulful sound that moves with you — crafted for moments when you want the world to melt away (or invite it in, just a little).",
    affiliateData: {
      source: "Amazon",
      asin: "B0CF6X7C8N",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 67,
    name: "Canon TS202 Printer",
    slug: "canon-ts202-printer",
    category: "electronics",
    subcategory: "office-electronics",
    image: "https://m.media-amazon.com/images/I/71udD7T7y8L._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3ZhLRmf",
    fallbackDescription: "A sweet little secret for crisp photos and everyday prints — compact enough to tuck anywhere, with just enough magic to make moments last.",
    affiliateData: {
      source: "Amazon",
      asin: "B078X1DQ2Y",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 68,
    name: "Skylight Wall Calendar",
    slug: "skylight-wall-calendar",
    category: "electronics",
    subcategory: "office-electronics",
    image: "https://m.media-amazon.com/images/I/71Kxk8es6dL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4j3qITU",
    fallbackDescription: "Bring a little effortless harmony to your days — color-coded plans, playful chore charts, and everything you love flowing beautifully in one place.",
    affiliateData: {
      source: "Amazon",
      asin: "B0C9V811L6",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 69,
    name: "Square Magstripe Reader",
    slug: "square-magstripe-reader",
    category: "electronics",
    subcategory: "office-electronics",
    image: "https://m.media-amazon.com/images/I/71ab6+31kEL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/43eOW7Z",
    fallbackDescription: "Slide, tap, and glow — the easiest little tool for turning every sweet moment into a payday, without missing a beat.",
    affiliateData: {
      source: "Amazon",
      asin: "B0DGTHLCGN",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 70,
    name: "AT&T Cordless Phone Set",
    slug: "att-cordless-phone-set",
    category: "electronics",
    subcategory: "office-electronics",
    image: "https://m.media-amazon.com/images/I/81vjTHTF9WL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4iYxgTC",
    fallbackDescription: "Clear conversations, fewer interruptions — a quietly powerful way to stay connected, with just a little more ease built into every call.",
    affiliateData: {
      source: "Amazon",
      asin: "B086QB7WZ1",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 71,
    name: "Brother Label Maker Bundle",
    slug: "brother-label-maker-bundle",
    category: "electronics",
    subcategory: "office-electronics",
    image: "https://m.media-amazon.com/images/I/71BmQHXHaxL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4jZUQB6",
    fallbackDescription: "Turn everyday organizing into a little art form with crisp fonts, playful frames, and labels that add a spark of beauty wherever they land.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CLHQ5GFQ",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 72,
    name: "HP OfficeJet Pro 9125e",
    slug: "hp-officejet-pro-9125e",
    category: "electronics",
    subcategory: "office-electronics",
    image: "https://m.media-amazon.com/images/I/61VwrrmZvdL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4kjuWIg",
    fallbackDescription: "Glide through workdays with effortless printing, scanning, and sharing — all wrapped in a sleek design that makes staying on top of everything feel just a little more beautiful.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CFM82NS2",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 73,
    name: "Kodak PIXPRO FZ45",
    slug: "kodak-pixpro-fz45",
    category: "electronics",
    subcategory: "camera-photo",
    image: "https://m.media-amazon.com/images/I/61sExYmoYdL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4keYaYD",
    fallbackDescription: "Capture the magic in every moment with an easy, one-touch design that turns everyday memories into something worth lingering over.",
    affiliateData: {
      source: "Amazon",
      asin: "B08THX6VRT",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 74,
    name: "Logitech Mevo Start",
    slug: "logitech-mevo-start",
    category: "electronics",
    subcategory: "camera-photo",
    image: "https://m.media-amazon.com/images/I/61u9M4MoHqL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4jV1hFo",
    fallbackDescription: "Create, connect, and capture life’s magic in crisp HD — wherever the story takes you, this little wonder moves with you like a secret sidekick.",
    affiliateData: {
      source: "Amazon",
      asin: "B0866PZN76",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 75,
    name: "NEEWER 18\" Ring Light",
    slug: "neewer-ring-light",
    category: "electronics",
    subcategory: "camera-photo",
    image: "https://m.media-amazon.com/images/I/615nlWeedUL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4deAS2A",
    fallbackDescription: "Light dances just the way you need it to — from dreamy selfies to polished shoots, this easy-to-love setup brings out your best angle every time.",
    affiliateData: {
      source: "Amazon",
      asin: "B01LXDNNBW",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 76,
    name: "GoPro HERO13",
    slug: "gopro-hero13",
    category: "electronics",
    subcategory: "camera-photo",
    image: "https://m.media-amazon.com/images/I/61HPHhv6n5L._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4k1PpBt",
    fallbackDescription: "Adventure looks even better in 5.3K — capture every wild, breathtaking moment with clarity and confidence built to keep up with you.",
    affiliateData: {
      source: "Amazon",
      asin: "B0DCM34GXX",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 77,
    name: "SanDisk Extreme 512GB",
    slug: "sandisk-extreme-512gb",
    category: "electronics",
    subcategory: "camera-photo",
    image: "https://m.media-amazon.com/images/I/716Qlc98JFL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/438MzmY",
    fallbackDescription: "Speed through every memory in brilliant 4K and 5K clarity — built to keep up with your boldest moments and everyday magic alike.",
    affiliateData: {
      source: "Amazon",
      asin: "B09X7C2GBC",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 78,
    name: "Canon EOS Rebel T7",
    slug: "canon-eos-rebel-t7",
    category: "electronics",
    subcategory: "camera-photo",
    image: "https://m.media-amazon.com/images/I/71ZYxtmYkPL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/44BaNbV",
    fallbackDescription: "Capture life’s edges and in-betweens with effortless clarity — designed to move with you, and frame every moment in its best light.",
    affiliateData: {
      source: "Amazon",
      asin: "B0101RW3QK",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 79,
    name: "Apple Watch Series 10",
    slug: "apple-watch-series-10",
    category: "electronics",
    subcategory: "wearable-technology",
    image: "https://m.media-amazon.com/images/I/61nAnMO04QL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3SCC3iQ",
    fallbackDescription: "A little brilliance for your wrist — blending effortless style, intuitive wellness insights, and the kind of connection that makes every day feel a little more your own.",
    affiliateData: {
      source: "Amazon",
      asin: "B0DGHHJ1PJ",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 80,
    name: "Google Pixel Watch 3",
    slug: "google-pixel-watch-3",
    category: "electronics",
    subcategory: "wearable-technology",
    image: "https://m.media-amazon.com/images/I/61-JMO7a6+L._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/43doxao",
    fallbackDescription: "Move through every moment with a little more rhythm — blending intuitive fitness insights, real-time readiness, and the effortless glow of feeling fully in sync with yourself.",
    affiliateData: {
      source: "Amazon",
      asin: "B0D91268TH",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 81,
    name: "Ray-Ban Meta Glasses",
    slug: "ray-ban-meta-glasses",
    category: "electronics",
    subcategory: "wearable-technology",
    image: "https://m.media-amazon.com/images/I/51GYi1kNaBL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4meyCN8",
    fallbackDescription: "Seamlessly capture the moment, slip into your soundtrack, or whisper a question to AI — all through iconic frames that move as effortlessly as you do.",
    affiliateData: {
      source: "Amazon",
      asin: "B0D4GN3QLG",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 82,
    name: "Garmin Venu 3S Smartwatch",
    slug: "garmin-venu-3s",
    category: "electronics",
    subcategory: "wearable-technology",
    image: "https://m.media-amazon.com/images/I/61oLm0rWyGL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/44CtDQ4",
    fallbackDescription: "Flow through your day with a watch that listens to your body — guiding your energy, sleep, movement, and moments of pause with a grace that feels almost intuitive.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CDC6Y617",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 83,
    name: "Samsung Galaxy Watch 7",
    slug: "samsung-galaxy-watch-7",
    category: "electronics",
    subcategory: "wearable-technology",
    image: "https://m.media-amazon.com/images/I/71SZNup1qrL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/44B4GV1",
    fallbackDescription: "Wake up to a little extra wisdom — from your energy to your heartbeat to your dreams — all wrapped around your wrist like a quiet, beautiful promise to move through life more effortlessly.",
    affiliateData: {
      source: "Amazon",
      asin: "B0D1YNVD88",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 84,
    name: "Fitbit Charge 6 Tracker",
    slug: "fitbit-charge-6-tracker",
    category: "electronics",
    subcategory: "wearable-technology",
    image: "https://m.media-amazon.com/images/I/61ZtqtvoD2L._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4daXXmW",
    fallbackDescription: "Quietly powerful and endlessly supportive, it slips into your rhythm — helping you move, rest, and recharge with a kind of intuitive grace you’ll wonder how you lived without.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CC62ZG1M",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 85,
    name: "Bose TV Speaker",
    slug: "bose-tv-speaker",
    category: "electronics",
    subcategory: "audio-home",
    image: "https://m.media-amazon.com/images/I/41Nl+gN2hvL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4jYeFJ2",
    fallbackDescription: "Slip into the story with a sound that's clear, warm, and just close enough to feel — all from a whisper-quiet design that blends effortlessly into your space.",
    affiliateData: {
      source: "Amazon",
      asin: "B088KRPCQJ",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 86,
    name: "Bose SoundLink Flex Speaker",
    slug: "bose-soundlink-flex-speaker",
    category: "electronics",
    subcategory: "audio-home",
    image: "https://m.media-amazon.com/images/I/7192Qca-fUL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3H4LLbh",
    fallbackDescription: "Big, beautiful sound you can slip into your hand — rugged enough for wild days, refined enough for slow, golden afternoons wherever life pulls you.",
    affiliateData: {
      source: "Amazon",
      asin: "B0D6WD2QSQ",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 87,
    name: "Samsung Sound Tower MX-ST40B",
    slug: "samsung-sound-towermxst40b",
    category: "electronics",
    subcategory: "audio-home",
    image: "https://m.media-amazon.com/images/I/81TSvpYhl0L._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/44xRosv",
    fallbackDescription: "Power up the moment with bold sound, playful lights, and just enough edge to turn any gathering — from rooftop sunsets to impromptu dance floors — into something unforgettable.",
    affiliateData: {
      source: "Amazon",
      asin: "B0B1N3WL69",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 88,
    name: "Sony S100F Soundbar",
    slug: "sony-s100f-soundbar",
    category: "electronics",
    subcategory: "audio-home",
    image: "https://m.media-amazon.com/images/I/510P8uQSOLL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4iY4GBQ",
    fallbackDescription: "Slim, clear, and quietly powerful — it wraps your space in rich, effortless sound, turning even small moments into something just a little more cinematic.",
    affiliateData: {
      source: "Amazon",
      asin: "B0797MY6JB",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 89,
    name: "Beats Pill Speaker",
    slug: "beats-pill-speaker",
    category: "electronics",
    subcategory: "audio-home",
    image: "https://m.media-amazon.com/images/I/71IsrpuSomL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4jPODr1",
    fallbackDescription: "Bold, beautiful sound you can carry anywhere — with deep bass, crisp highs, and a little extra magic that turns every playlist into a full-body mood.",
    affiliateData: {
      source: "Amazon",
      asin: "B0D4SX9RC6",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 90,
    name: "Sonos Era 100 Speaker",
    slug: "sonos-era-100-speaker",
    category: "electronics",
    subcategory: "audio-home",
    image: "https://m.media-amazon.com/images/I/71fAeaUTNvL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4384gDc",
    fallbackDescription: "Sleek, soulful, and endlessly easy — it slips into your space and fills every corner with sound so rich, it feels like the room is leaning in to listen with you.",
    affiliateData: {
      source: "Amazon",
      asin: "B0BW34LCB8",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 91,
    name: "Anrabess Summer Jumpsuit",
    slug: "anrabess-summer-jumpsuit",
    category: "clothing-shoes-jewelry",
    subcategory: "clothing",
    image: "https://m.media-amazon.com/images/I/61pAGVrHmxL._AC_SY879_.jpg",
    affiliateLink: "https://amzn.to/4dmV16Y",
    fallbackDescription: "Light, effortless, and a little bit flirty — made for sunlit afternoons, last-minute plans, and those golden hours when everything feels just right.",
    affiliateData: {
      source: "Amazon",
      asin: "B0D2XV8V92",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 92,
    name: "Trendy Queen Oversized Tee",
    slug: "trendy-queen-oversized-tee",
    category: "clothing-shoes-jewelry",
    subcategory: "clothing",
    image: "https://m.media-amazon.com/images/I/51Av+72suNL._AC_SY879_.jpg",
    affiliateLink: "https://amzn.to/3GNMJIZ",
    fallbackDescription: "Soft, airy, and made to move with you — a laid-back essential that slips from slow mornings to sunlit workouts without missing a beat.",
    affiliateData: {
      source: "Amazon",
      asin: "B0DS4DVTGP",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 93,
    name: "CRZ YOGA Butterluxe Shorts",
    slug: "crz-yoga-butterluxe-shorts",
    category: "clothing-shoes-jewelry",
    subcategory: "clothing",
    image: "https://m.media-amazon.com/images/I/712UUcaKsBL._AC_SY879_.jpg",
    affiliateLink: "https://amzn.to/3SCCfi5",
    fallbackDescription: "Soft as a second skin and made to move with you — perfect for slow stretches, sunlit walks, or simply lounging like you mean it.",
    affiliateData: {
      source: "Amazon",
      asin: "B0D8P5HXBK",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 94,
    name: "Sojos Retro Round Sunglasses",
    slug: "sojos-retro-round-sunglasses",
    category: "clothing-shoes-jewelry",
    subcategory: "clothing",
    image: "https://m.media-amazon.com/images/I/51aMx1iNf6L._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4dgPeQc",
    fallbackDescription: "A little vintage, a little glam — with softly tinted lenses that turn every sun-drenched moment into something worth remembering.",
    affiliateData: {
      source: "Amazon",
      asin: "B07QQPRXZ9",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 95,
    name: "Anrabess Linen Palazzo Pants",
    slug: "anrabess-linen-palazzo-pants",
    category: "clothing-shoes-jewelry",
    subcategory: "clothing",
    image: "https://m.media-amazon.com/images/I/61SwuZZg9aL._AC_SY879_.jpg",
    affiliateLink: "https://amzn.to/4dd9Rwv",
    fallbackDescription: "Breezy, flattering, and effortlessly graceful — made for sun-drenched mornings, long strolls, and every soft, unhurried moment in between.",
    affiliateData: {
      source: "Amazon",
      asin: "B0DQ1H4Q7S",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 96,
    name: "Dokotoo Waffle Knit Hoodie",
    slug: "dokotoo-waffle-knit-hoodie",
    category: "clothing-shoes-jewelry",
    subcategory: "clothing",
    image: "https://m.media-amazon.com/images/I/71X1uG8cVNL._AC_SY879_.jpg",
    affiliateLink: "https://amzn.to/3Z8s1tt",
    fallbackDescription: "Light, touchably soft, and just a little playful — the kind of easygoing layer you’ll reach for on beach mornings, lazy afternoons, and everywhere in between.",
    affiliateData: {
      source: "Amazon",
      asin: "B0DK57X7WB",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 97,
    name: "Cushionaire Lane Sandals",
    slug: "cushionaire-lane-sandals",
    category: "clothing-shoes-jewelry",
    subcategory: "shoes",
    image: "https://m.media-amazon.com/images/I/81suZ76XHpL._AC_SY695_.jpg",
    affiliateLink: "https://amzn.to/4maQloH",
    fallbackDescription: "Soft, effortless, and made to move with you — the kind of easygoing comfort that feels just as good chasing sunsets as it does slipping out for coffee.",
    affiliateData: {
      source: "Amazon",
      asin: "B07PMF9392",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 98,
    name: "Brooks Ghost 16 Shoes",
    slug: "brooks-ghost-16-shoes",
    category: "clothing-shoes-jewelry",
    subcategory: "shoes",
    image: "https://m.media-amazon.com/images/I/81ZLrMy6OVL._AC_SY695_.jpg",
    affiliateLink: "https://amzn.to/452IVgX",
    fallbackDescription: "Light, cushioned, and made to glide — they move with you like a quiet promise, turning every run (or ramble) into pure, easy joy.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CMP51Y45",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 99,
    name: "Shibever Wedge Sandals",
    slug: "shibever-wedge-sandals",
    category: "clothing-shoes-jewelry",
    subcategory: "shoes",
    image: "https://m.media-amazon.com/images/I/81OYlK3NArL._AC_SY695_.jpg",
    affiliateLink: "https://amzn.to/4dmRsh6",
    fallbackDescription: "Soft sparkle, easy lift — a dreamy little pair that slips on in seconds and makes every step feel a touch more graceful, a touch more golden.",
    affiliateData: {
      source: "Amazon",
      asin: "B0BZJ1PRDX",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 100,
    name: "Hey Dude Wendy Loafers",
    slug: "hey-dude-wendy-loafers",
    category: "clothing-shoes-jewelry",
    subcategory: "shoes",
    image: "https://m.media-amazon.com/images/I/512UvHJMpxL._AC_SX695_.jpg",
    affiliateLink: "https://amzn.to/43hhZrt",
    fallbackDescription: "Light as a laugh and endlessly easy, they’re made for days that wander — from slow mornings to spontaneous detours and everywhere your heart feels at home.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CBC921NW",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 101,
    name: "New Balance Arishi V4 Shoes",
    slug: "new-balance-arishi-v4-shoes",
    category: "clothing-shoes-jewelry",
    subcategory: "shoes",
    image: "https://m.media-amazon.com/images/I/71pPVYEKwHL._AC_SX695_.jpg",
    affiliateLink: "https://amzn.to/42UoEsK",
    fallbackDescription: "Soft, light, and made to move beautifully — from morning miles to everyday adventures, they’re the kind of easy comfort you’ll never want to take off.",
    affiliateData: {
      source: "Amazon",
      asin: "B0DF2BV857",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 102,
    name: "Reef Cushion Vista Sandals",
    slug: "reef-cushion-vista-sandals",
    category: "clothing-shoes-jewelry",
    subcategory: "shoes",
    image: "https://m.media-amazon.com/images/I/61sqCrQF+NL._AC_SY695_.jpg",
    affiliateLink: "https://amzn.to/4iZVH38",
    fallbackDescription: "Soft, sun-kissed, and effortlessly easy — built for slow mornings, barefoot afternoons, and every little moment that feels too good to rush.",
    affiliateData: {
      source: "Amazon",
      asin: "B078HRB65L",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 103,
    name: "Pavoi Wavy Huggie Hoops",
    slug: "pavoi-wavy-huggie-hoops",
    category: "clothing-shoes-jewelry",
    subcategory: "jewelry",
    image: "https://m.media-amazon.com/images/I/61BMVWHWCkL._AC_SY695_.jpg",
    affiliateLink: "https://amzn.to/4iZrVvC",
    fallbackDescription: "A soft twist on a classic — light, luminous, and just bold enough to catch the kind of glances that feel a little like fate.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CJBY6CFT",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 104,
    name: "Swarovski Hyperbola Bracelet",
    slug: "swarovski-hyperbola-bracelet",
    category: "clothing-shoes-jewelry",
    subcategory: "jewelry",
    image: "https://m.media-amazon.com/images/I/61aJGvIwTCL._AC_SY695_.jpg",
    affiliateLink: "https://amzn.to/452GCKP",
    fallbackDescription: "Delicate, luminous, and quietly dazzling — a soft shimmer wrapped around your wrist like a whispered reminder that some moments are infinite.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CPYSPW9W",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 105,
    name: "Pavoi Navette CZ Studs",
    slug: "pavoi-navette-cz-studs",
    category: "clothing-shoes-jewelry",
    subcategory: "jewelry",
    image: "https://m.media-amazon.com/images/I/610swOzOpEL._AC_SY695_.jpg",
    affiliateLink: "https://amzn.to/3SwqtWA",
    fallbackDescription: "Delicate, luminous, and quietly striking — little beams of light that catch just enough to feel like a secret only you were meant to wear.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CHFPMCGL",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 106,
    name: "Swarovski Una Angelic Necklace",
    slug: "swarovski-una-angelic-necklace",
    category: "clothing-shoes-jewelry",
    subcategory: "jewelry",
    image: "https://m.media-amazon.com/images/I/71PW7IhkqVL._AC_SY695_.jpg",
    affiliateLink: "https://amzn.to/44tAjjl",
    fallbackDescription: "Softly luminous with just the right shimmer — a timeless touch of elegance you can wear like a secret blessing, close to your heart.",
    affiliateData: {
      source: "Amazon",
      asin: "B0D8R6248L",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 107,
    name: "Coach Signature C Bangle",
    slug: "coach-signature-c-bangle",
    category: "clothing-shoes-jewelry",
    subcategory: "jewelry",
    image: "https://m.media-amazon.com/images/I/61i-VYAZhFL._AC_SY695_.jpg",
    affiliateLink: "https://amzn.to/4mbp9pP",
    fallbackDescription: "Sleek, effortless, and a little bit iconic — a glimmer of quiet confidence that slips on like it was always meant to be yours.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CK4Z482K",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 108,
    name: "Pavoi Pear Pendant Necklace",
    slug: "pavoi-pear-pendant-necklace",
    category: "clothing-shoes-jewelry",
    subcategory: "jewelry",
    image: "https://m.media-amazon.com/images/I/617MGRuAB-L._AC_SY695_.jpg",
    affiliateLink: "https://amzn.to/3S1yHWG",
    fallbackDescription: "A soft gleam that catches the light just right — delicate, dreamy, and made to slip into your everyday like it was always meant to be there.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CQKNMKKP",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 109,
    name: "Nautica Seaside Slim Wallet",
    slug: "nautica-seaside-slim-wallet",
    category: "clothing-shoes-jewelry",
    subcategory: "handbags",
    image: "https://m.media-amazon.com/images/I/71XV2q2rCkL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4khzsqx",
    fallbackDescription: "Streamlined, soft, and ready for anything — a graceful little catch-all that keeps your cards, cash, and moments flowing without missing a beat.",
    affiliateData: {
      source: "Amazon",
      asin: "B0DSQBSD6M",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 110,
    name: "Coach Brooklyn Shoulder Bag",
    slug: "coack-brooklyn-shoulder-bag",
    category: "clothing-shoes-jewelry",
    subcategory: "handbags",
    image: "https://m.media-amazon.com/images/I/71HwBtyRPdL._AC_SY695_.jpg",
    affiliateLink: "https://amzn.to/3GOT9rm",
    fallbackDescription: "Supple, understated, and beautifully effortless — a soft sweep of everyday elegance that moves with you through city days and wide-open weekends.",
    affiliateData: {
      source: "Amazon",
      asin: "B0DS6NHPHP",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 111,
    name: "Coach Essential Denim Wristlet",
    slug: "coach-essential-denim-wristlet",
    category: "clothing-shoes-jewelry",
    subcategory: "handbags",
    image: "https://m.media-amazon.com/images/I/81cWGzgT7eL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4iXQxoe",
    fallbackDescription: "Effortless, iconic, and just the right size — perfect for slipping out with only what you need and a little more freedom in your step.",
    affiliateData: {
      source: "Amazon",
      asin: "B0DS6P9741",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 112,
    name: "Kate Spade Bleecker Crossbody",
    slug: "kate-spade-bleecker-crossbody",
    category: "clothing-shoes-jewelry",
    subcategory: "handbags",
    image: "https://m.media-amazon.com/images/I/71nnlpzmfdL._AC_SY695_.jpg",
    affiliateLink: "https://amzn.to/3Syf5JK",
    fallbackDescription: "Sleek, structured, and sweetly compact — your go-to plus-one for city wanders, afternoon plans, and anywhere a little polish meets play.",
    affiliateData: {
      source: "Amazon",
      asin: "B0DQ2FSLJP",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 113,
    name: "The Sak Sequoia Hobo",
    slug: "the-sak-sequoia-hobo",
    category: "clothing-shoes-jewelry",
    subcategory: "handbags",
    image: "https://m.media-amazon.com/images/I/819RLIMH3oL._AC_SY695_.jpg",
    affiliateLink: "https://amzn.to/4k80YXq",
    fallbackDescription: "Earthy, easy, and beautifully made — this softly slouched carryall moves with you from quiet mornings to wide-open weekends with room for everything that matters.",
    affiliateData: {
      source: "Amazon",
      asin: "B0DWTXQJH2",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 114,
    name: "Michael Kors Ruthie Tote",
    slug: "michael-kors-ruthie-tote",
    category: "clothing-shoes-jewelry",
    subcategory: "handbags",
    image: "https://m.media-amazon.com/images/I/71vXDTg2BvL._AC_SY695_.jpg",
    affiliateLink: "https://amzn.to/44trtlD",
    fallbackDescription: "Refined yet relaxed, this softly structured staple brings effortless polish to workdays, weekends, and every beautifully full moment in between.",
    affiliateData: {
      source: "Amazon",
      asin: "B0DQ2C31ZC",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 115,
    name: "Michael Kors Pyper Watch",
    slug: "michael-kors-pyper-watch",
    category: "clothing-shoes-jewelry",
    subcategory: "watches",
    image: "https://m.media-amazon.com/images/I/61sD+r-tWtL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4jNifoV",
    fallbackDescription: "Minimal, elegant, and quietly magnetic — a timeless piece with just enough edge to make every glance at the time feel a little more composed.",
    affiliateData: {
      source: "Amazon",
      asin: "B07CJDP3LP",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 116,
    name: "Citizen Eco-Drive Rose Watch",
    slug: "citizen-eco-drive-rose-watch",
    category: "clothing-shoes-jewelry",
    subcategory: "watches",
    image: "https://m.media-amazon.com/images/I/71T1mA54k+L._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/44ybF0V",
    fallbackDescription: "Softly refined with just a hint of contrast — this light-powered beauty blends everyday ease with quiet elegance, no charging required.",
    affiliateData: {
      source: "Amazon",
      asin: "B0843D9D6R",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 117,
    name: "Anne Klein Bracelet Watch",
    slug: "anne-klein-bracelet-watch",
    category: "clothing-shoes-jewelry",
    subcategory: "watches",
    image: "https://m.media-amazon.com/images/I/714wcoFtAcL._AC_SY879_.jpg",
    affiliateLink: "https://amzn.to/436QT67",
    fallbackDescription: "Graceful and glinting with soft rose tones — a polished little piece that feels like jewelry, but quietly keeps time with you.",
    affiliateData: {
      source: "Amazon",
      asin: "B08G1WWN9G",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 118,
    name: "Anne Klein Diamond Bangle Watch",
    slug: "anne-klein-diamond-bangle-watch",
    category: "clothing-shoes-jewelry",
    subcategory: "watches",
    image: "https://m.media-amazon.com/images/I/61n7n++fe9L._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3YIzdN0",
    fallbackDescription: "Sleek, polished, and quietly striking — with a single diamond that catches just enough light to feel like a secret worth keeping.",
    affiliateData: {
      source: "Amazon",
      asin: "B09KYD4LG8",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 119,
    name: "Nine West Bracelet Watch",
    slug: "nine-west-bracelet-watch",
    category: "clothing-shoes-jewelry",
    subcategory: "watches",
    image: "https://m.media-amazon.com/images/I/81RZQixLiBL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/3FcmI5z",
    fallbackDescription: "A little shimmer, a lot of charm — golden, graceful, and made to slip into your day like it belongs there.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CGKG7JG1",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 120,
    name: "Nine West Gunmetal Watch",
    slug: "nine-west-gunmental-watch",
    category: "clothing-shoes-jewelry",
    subcategory: "watches",
    image: "https://m.media-amazon.com/images/I/6162cxKXOUL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/439zYjj",
    fallbackDescription: "Moody, modern, and effortlessly cool — a sleek little statement that whispers edge without ever raising its voice.",
    affiliateData: {
      source: "Amazon",
      asin: "B081J7FQF6",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 121,
    name: "e.l.f. Hydrating Concealer",
    slug: "elf-hydrating-concealer",
    category: "beauty-personal-care",
    subcategory: "makeup",
    image: "https://m.media-amazon.com/images/I/51boP0bIF4L._SX679_.jpg",
    affiliateLink: "https://amzn.to/3GRhE7b",
    fallbackDescription: "Soft, seamless, and quietly confident — melts into skin with a satin touch that brightens, smooths, and never asks for attention.",
    affiliateData: {
      source: "Amazon",
      asin: "B07ZQZVMRW",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 122,
    name: "Covergirl Skin Perfector Essence",
    slug: "covergirl-skin-perfector-essence",
    category: "beauty-personal-care",
    subcategory: "makeup",
    image: "https://m.media-amazon.com/images/I/71moxV34uAL._SX679_.jpg",
    affiliateLink: "https://amzn.to/43yFJYn",
    fallbackDescription: "A sheer, silky tint that melts into skin like skincare — smoothing, softening, and leaving you with that fresh-faced glow you didn’t even know you needed.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CK57VPWX",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 123,
    name: "e.l.f. Liquid Putty Primer",
    slug: "elf-liquid-putty-primer",
    category: "beauty-personal-care",
    subcategory: "makeup",
    image: "https://m.media-amazon.com/images/I/31fOSjRUmSL._SX300_SY300_QL70_FMwebp_.jpg",
    affiliateLink: "https://amzn.to/4547zha",
    fallbackDescription: "Silky, weightless, and smoothing in all the right ways — this skin-loving base blurs with ease and holds your look like a quiet little secret.",
    affiliateData: {
      source: "Amazon",
      asin: "B0C7WQ9GG5",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 124,
    name: "NYX Epic Ink Liner",
    slug: "nyx-epic-ink-liner",
    category: "beauty-personal-care",
    subcategory: "makeup",
    image: "https://m.media-amazon.com/images/I/617F0F8N5UL._SX679_.jpg",
    affiliateLink: "https://amzn.to/3YEh2ba",
    fallbackDescription: "Jet-black, effortlessly sharp, and totally waterproof — glides on smooth for a flick that stays fierce from first glance to final call.",
    affiliateData: {
      source: "Amazon",
      asin: "B074Y8LM6T",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 125,
    name: "L’Oréal Panorama Mascara",
    slug: "loreal-panorama-mascara",
    category: "beauty-personal-care",
    subcategory: "makeup",
    image: "https://m.media-amazon.com/images/I/61jB07W4xmL._SX679_.jpg",
    affiliateLink: "https://amzn.to/3RYLTLW",
    fallbackDescription: "Weightless, wide-eyed, and beautifully buildable — fans out every lash for that soft, stretched look that feels just a little cinematic.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CHWRY754",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 126,
    name: "e.l.f. Glow Reviver Lip Oil",
    slug: "elf-glow-reviver-lip-oil",
    category: "beauty-personal-care",
    subcategory: "makeup",
    image: "https://m.media-amazon.com/images/I/616YIg55gvL._SX679_.jpg",
    affiliateLink: "https://amzn.to/452k2C3",
    fallbackDescription: "Glossy, juicy, and kissed with just enough color — this silky oil wraps your lips in moisture, shine, and a little main-character energy.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CMJZ8G6Y",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 127,
    name: "Paul Mitchell Sectioning Clips",
    slug: "paul-mitchell-sectioning clips",
    category: "beauty-personal-care",
    subcategory: "hair-care",
    image: "https://m.media-amazon.com/images/I/71NynnbdshL._SX522_.jpg",
    affiliateLink: "https://amzn.to/4iWfqk8",
    fallbackDescription: "Lightweight, no-slip, and crease-free — the quiet little styling essentials that keep everything in place while you create the magic.",
    affiliateData: {
      source: "Amazon",
      asin: "B00HEPSFNI",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 128,
    name: "Shark SmoothStyle Comb",
    slug: "shark-smoothstyle-comb",
    category: "beauty-personal-care",
    subcategory: "hair-care",
    image: "https://m.media-amazon.com/images/I/61rZ4ujd+HL._SX679_.jpg",
    affiliateLink: "https://amzn.to/4jSR6RL",
    fallbackDescription: "From damp to dreamy in one elegant twist — smooths, shapes, and refreshes with bounce and shine, all without the heat drama.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CJG2Y4MW",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 129,
    name: "Nexxus Heat Protect Spray",
    slug: "nexxus-heat-protect-spray",
    category: "beauty-personal-care",
    subcategory: "hair-care",
    image: "https://m.media-amazon.com/images/I/712GP0QqZkL._SX679_.jpg",
    affiliateLink: "https://amzn.to/4jPvV2R",
    fallbackDescription: "Feather-light and quietly powerful — shields strands from high heat while softening, smoothing, and holding your style in place like it was always meant to be there.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CN9N41R2",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 130,
    name: "Kérastase Elixir Hair Oil",
    slug: "kerastase-elixir-hair-oil",
    category: "beauty-personal-care",
    subcategory: "hair-care",
    image: "https://m.media-amazon.com/images/I/51JZd3GDDtL._SX522_.jpg",
    affiliateLink: "https://amzn.to/4iUNCgl",
    fallbackDescription: "A few drops, endless glow — smooths, softens, and adds a radiant veil of shine while protecting against heat and frizz like it’s second nature.",
    affiliateData: {
      source: "Amazon",
      asin: "B0D2LWFF2P",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 131,
    name: "Native Cucumber Mint Set",
    slug: "native-cucumber-mint-set",
    category: "beauty-personal-care",
    subcategory: "hair-care",
    image: "https://m.media-amazon.com/images/I/51d9AnBJ5lL._SX679_.jpg",
    affiliateLink: "https://amzn.to/3YEegTi",
    fallbackDescription: "Clean, calm, and quietly refreshing — this crisp duo strengthens, softens, and simplifies your ritual with just what your hair actually needs (and nothing it doesn’t).",
    affiliateData: {
      source: "Amazon",
      asin: "B0CHK2ND7M",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 132,
    name: "Pantene Repair Mist",
    slug: "pantene-repair-mist",
    category: "beauty-personal-care",
    subcategory: "hair-care",
    image: "https://m.media-amazon.com/images/I/71n4nPTOefL._SX679_.jpg",
    affiliateLink: "https://amzn.to/4kd994G",
    fallbackDescription: "A few weightless spritzes soften, strengthen, and rebuild from within — leaving your hair smoother, silkier, and quietly more resilient with every day.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CT1K8N7L",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 133,
    name: "Philosophy Pure Grace",
    slug: "philosophy-pure-grace",
    category: "beauty-personal-care",
    subcategory: "fragrance",
    image: "https://m.media-amazon.com/images/I/61w1nqpW00L._SX522_.jpg",
    affiliateLink: "https://amzn.to/3EWIfzh",
    fallbackDescription: "Fresh as clean sheets in morning light — soft notes of water lily, greens, and musk linger just enough to feel quietly unforgettable.",
    affiliateData: {
      source: "Amazon",
      asin: "B08B7X7991",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 134,
    name: "Gucci Bloom",
    slug: "gucci-bloom",
    category: "beauty-personal-care",
    subcategory: "fragrance",
    image: "https://m.media-amazon.com/images/I/7134Ds7j4dL._SX679_.jpg",
    affiliateLink: "https://amzn.to/3GP0IOB",
    fallbackDescription: "Lush, feminine, and wildly floral — this garden-in-a-bottle opens with brightness and settles into something soft, sensual, and impossible to forget.",
    affiliateData: {
      source: "Amazon",
      asin: "B0757ZLMLZ",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 135,
    name: "Victoria’s Secret Bombshell Mist",
    slug: "victorias-secret-bombshell-mist",
    category: "beauty-personal-care",
    subcategory: "fragrance",
    image: "https://m.media-amazon.com/images/I/61sXl2Ss5HL._SX679_.jpg",
    affiliateLink: "https://amzn.to/3H4cXqD",
    fallbackDescription: "Bright, flirty, and just a little wild — a burst of passion fruit and peony with a soft orchid finish, made for spontaneous moments and skin that wants to be kissed by scent.",
    affiliateData: {
      source: "Amazon",
      asin: "B07JL7YGC7",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 136,
    name: "Marc Jacobs Perfect",
    slug: "marc-jacobs-perfect",
    category: "beauty-personal-care",
    subcategory: "fragrance",
    image: "https://m.media-amazon.com/images/I/61M6JULoCXL._SX679_.jpg",
    affiliateLink: "https://amzn.to/439rRDl",
    fallbackDescription: "Playful yet grounded — a soft swirl of rhubarb and almond milk wrapped in cozy cashmeran, like a wink in a bottle that knows exactly who she is.",
    affiliateData: {
      source: "Amazon",
      asin: "B08GKZ1233",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 137,
    name: "Armaf Club de Nuit",
    slug: "armaf-club-de-nuit",
    category: "beauty-personal-care",
    subcategory: "fragrance",
    image: "https://m.media-amazon.com/images/I/712aXEW8EeL._SX679_.jpg",
    affiliateLink: "https://amzn.to/4jQdz1V",
    fallbackDescription: "Bright citrus and soft rose melt into a sultry blend of vanilla and musk — a bold, feminine signature that lingers just the right way.",
    affiliateData: {
      source: "Amazon",
      asin: "B014AE59HU",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 138,
    name: "Donna Karan Cashmere Set",
    slug: "donna-karan-cashmere-set",
    category: "beauty-personal-care",
    subcategory: "fragrance",
    image: "https://m.media-amazon.com/images/I/71sMAQGobqL._SX522_.jpg",
    affiliateLink: "https://amzn.to/43bTT1g",
    fallbackDescription: "A sensual duo designed to wrap you in softness — with velvety jasmine, warm sandalwood, and a whisper of musk that lingers like a second skin. Perfect for everyday indulgence, even on the go.",
    affiliateData: {
      source: "Amazon",
      asin: "B0CPTFL32R",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 139,
    name: "OPI Cuticle Oil",
    slug: "opi-cuticle-oil",
    category: "beauty-personal-care",
    subcategory: "foot-hand-nail-care",
    image: "https://m.media-amazon.com/images/I/51kAJ7yCMrL._SX522_.jpg",
    affiliateLink: "https://amzn.to/3GQVnXm",
    fallbackDescription: "A silky daily ritual that softens, smooths, and restores — helping cuticles feel healthier and hands look effortlessly cared for. Just a drop a day for a touch of glow and growth.",
    affiliateData: {
      source: "Amazon",
      asin: "B0725XWF6R",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 140,
    name: "OPI Black Crème Polish",
    slug: "opi-black-creme-polish",
    category: "beauty-personal-care",
    subcategory: "foot-hand-nail-care",
    image: "https://m.media-amazon.com/images/I/517XfkaLU7S._SX522_.jpg",
    affiliateLink: "https://amzn.to/3YGtfw2",
    fallbackDescription: "Bold, moody, and endlessly chic — this deep noir lacquer adds an effortless edge to any look. Glides on smooth, dries fast, and stays flawless through it all.",
    affiliateData: {
      source: "Amazon",
      asin: "B000NG4778",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 141,
    name: "L’Occitane Shea Foot Cream",
    slug: "loccitane-shea-foot-cream",
    category: "beauty-personal-care",
    subcategory: "foot-hand-nail-care",
    image: "https://m.media-amazon.com/images/I/51uSc38FIWL._SX522_.jpg",
    affiliateLink: "https://amzn.to/4kdrdM4",
    fallbackDescription: "Velvety and calming, this rich blend of shea butter, lavender, and arnica melts into skin for deep hydration and that just-pampered feel — no spa required.",
    affiliateData: {
      source: "Amazon",
      asin: "B001GAOV2G",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 142,
    name: "OPI White Lace Polish",
    slug: "opi-white-lace-polish",
    category: "beauty-personal-care",
    subcategory: "foot-hand-nail-care",
    image: "https://m.media-amazon.com/images/I/51hQJvNMxNL._SX522_.jpg",
    affiliateLink: "https://amzn.to/3GQFCiY",
    fallbackDescription: "A whisper of soft white with a creamy finish — delicate, dreamy, and endlessly wearable. A polish that feels like fresh linen and quiet confidence.",
    affiliateData: {
      source: "Amazon",
      asin: "B004CA8TXE",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 143,
    name: "La Roche-Posay Hand Cream",
    slug: "la-roche-posay-hand-cream",
    category: "beauty-personal-care",
    subcategory: "foot-hand-nail-care",
    image: "https://m.media-amazon.com/images/I/61Qu-FBI0IL._SX522_.jpg",
    affiliateLink: "https://amzn.to/3ZaqCCI",
    fallbackDescription: "Softens without a trace — this ultra-soothing blend of shea butter and niacinamide wraps dry hands in a weightless veil of moisture that lasts through countless washes. Fragrance-free and beautifully bare.",
    affiliateData: {
      source: "Amazon",
      asin: " B00EYOSA9G",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 144,
    name: "OPI Top + Base Coat",
    slug: "opi-top-base-coat",
    category: "beauty-personal-care",
    subcategory: "foot-hand-nail-care",
    image: "https://m.media-amazon.com/images/I/81dx4AMd78L._SX522_.jpg",
    affiliateLink: "https://amzn.to/3F4jz7Q",
    fallbackDescription: "A power duo for polished perfection—this base-and-top coat set smooths, seals, and protects for a glossy, salon-fresh finish that actually lasts. The secret to your best mani yet.",
    affiliateData: {
      source: "Amazon",
      asin: "B07FMDH8K5",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 145,
    name: "BAGSMART Hanging Toiletry Bag",
    slug: "bagsmart-hanging-toiletry-bag",
    category: "beauty-personal-care",
    subcategory: "tools-accessories",
    image: "https://m.media-amazon.com/images/I/61gMY7ZvcrL._AC_SX679_.jpg",
    affiliateLink: "https://amzn.to/4dbLBLd",
    fallbackDescription: "A travel essential that keeps everything beautifully in place—this water-resistant organizer has clear panels, smart compartments, and a swivel hook that makes getting ready feel effortless anywhere.",
    affiliateData: {
      source: "Amazon",
      asin: "B07SL2RKJK",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 146,
    name: "Real Techniques Essentials Set",
    slug: "real-techniques-essentials-set",
    category: "beauty-personal-care",
    subcategory: "tools-accessories",
    image: "https://m.media-amazon.com/images/I/71bCyrY3jCL._SX679_.jpg",
    affiliateLink: "https://amzn.to/3GI94rw",
    fallbackDescription: "Five effortless favorites to sculpt, swirl, and soften every step of your routine. From dewy blends to delicate dustings, it’s the kind of set you’ll reach for every single day—like second nature, only prettier.",
    affiliateData: {
      source: "Amazon",
      asin: "B07FTXBNVL",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 147,
    name: "Buf-Puf Body Sponge",
    slug: "buf-puf-body-sponge",
    category: "beauty-personal-care",
    subcategory: "tools-accessories",
    image: "https://m.media-amazon.com/images/I/818VkpJ328L._SY879_.jpg",
    affiliateLink: "https://amzn.to/4df0Kf5",
    fallbackDescription: "A soft daily ritual for smoother, brighter skin. This dermatologist-developed sponge gently buffs away buildup—leaving your body refreshed, renewed, and perfectly primed for whatever comes next.",
    affiliateData: {
      source: "Amazon",
      asin: "B0725XFZCP",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 148,
    name: "Flawless Hair Remover",
    slug: "flawless-hair-remover",
    category: "beauty-personal-care",
    subcategory: "tools-accessories",
    image: "https://m.media-amazon.com/images/I/61Orj8GcsYL._SX679_.jpg",
    affiliateLink: "https://amzn.to/4iY3I8Y",
    fallbackDescription: "A whisper-soft touch for smooth, makeup-ready skin anytime. Discreetly designed and pain-free, this rose gold favorite sweeps away peach fuzz with a glide so gentle, it feels like nothing at all.",
    affiliateData: {
      source: "Amazon",
      asin: "B071KW9GTT",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 149,
    name: "Miracle Sponge Set",
    slug: "miracle-sponge-set",
    category: "beauty-personal-care",
    subcategory: "tools-accessories",
    image: "https://m.media-amazon.com/images/I/81XAS27-rdL._SX679_.jpg",
    affiliateLink: "https://amzn.to/3GQfeFT",
    fallbackDescription: "This best-loved sponge blends like a dream, leaving your skin with that fresh, dewy glow. Soft, seamless, and never streaky — a set designed to keep your routine effortless and always on point.",
    affiliateData: {
      source: "Amazon",
      asin: "B01JINOV5E",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 150,
    name: "SatinShave Electric Shaver",
    slug: "satinshave-electric-shaver",
    category: "beauty-personal-care",
    subcategory: "tools-accessories",
    image: "https://m.media-amazon.com/images/I/71hjwQI7uKL._SX679_.jpg",
    affiliateLink: "https://amzn.to/453a1EI",
    fallbackDescription: "Smooth skin, no fuss — this gentle, travel-ready shaver glides with or without water, keeping legs and curves silky soft wherever life takes you.",
    affiliateData: {
      source: "Amazon",
      asin: "B00K3FFIOA",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 151,
    name: "Angel Falls",
    slug: "angel-falls",
    category: "books",
    subcategory: "romance",
    image: "https://m.media-amazon.com/images/I/81UuHTH3M-L._SY522_.jpg",
    affiliateLink: "https://amzn.to/3Z6rlVt",
    fallbackDescription: "A tender, emotional story about the lengths we’ll go for the people we love. As past and present collide, it asks whether true devotion can withstand even the deepest of secrets.",
    affiliateData: {
      source: "Amazon",
      asin: "0345484274",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 152,
    name: "King of Wrath",
    slug: "king-of-wrath",
    category: "books",
    subcategory: "romance",
    image: "https://m.media-amazon.com/images/I/81cMua2TpUL._SY522_.jpg",
    affiliateLink: "https://amzn.to/437QJeJ",
    fallbackDescription: "A slow-burn romance fueled by power, pride, and unexpected vulnerability. Caught between duty and desire, two fierce souls collide—and discover that love is the one thing neither of them can control.",
    affiliateData: {
      source: "Amazon",
      asin: "1728289726",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 153,
    name: "Lights Out",
    slug: "lights-out",
    category: "books",
    subcategory: "romance",
    image: "https://m.media-amazon.com/images/I/81GnIlm7XlL._SY522_.jpg",
    affiliateLink: "https://amzn.to/3S0BdfL",
    fallbackDescription: "A dark, adrenaline-fueled romance where obsession blurs into protection. Twisting fantasy and danger together, it asks how far you're willing to go when desire and survival become one and the same.",
    affiliateData: {
      source: "Amazon",
      asin: "1638932239",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 154,
    name: "Say You'll Remember Me",
    slug: "say-youll-remember-me",
    category: "books",
    subcategory: "romance",
    image: "https://m.media-amazon.com/images/I/81jwQ3NZoiL._SY522_.jpg",
    affiliateLink: "https://amzn.to/3S0AU4B",
    fallbackDescription: "A heartfelt romance about second chances, pride, and the kind of connection that refuses to fade. Tender and honest, it reminds us that some bonds are too strong to leave behind.",
    affiliateData: {
      source: "Amazon",
      asin: "1538759195",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 155,
    name: "The Ritual",
    slug: "the-ritual",
    category: "books",
    subcategory: "romance",
    image: "https://m.media-amazon.com/images/I/714mmyjZN2L._SY522_.jpg",
    affiliateLink: "https://amzn.to/4mh4ell",
    fallbackDescription: "A dark, intoxicating story about power, betrayal, and the price of freedom. Twisting loyalty and love into dangerous territory, it pulls you deep into a world where survival demands more than trust—it demands surrender.",
    affiliateData: {
      source: "Amazon",
      asin: "B09TDPTDMB",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 156,
    name: "The Last Letter",
    slug: "last-letter",
    category: "books",
    subcategory: "romance",
    image: "https://m.media-amazon.com/images/I/81mrHyhbtTL._SY522_.jpg",
    affiliateLink: "https://amzn.to/3GJu7dj",
    fallbackDescription: "A heartfelt story of loss, loyalty, and unexpected love. Through grief and new beginnings, it reminds us how the deepest bonds can carry us through even the hardest chapters.",
    affiliateData: {
      source: "Amazon",
      asin: "1640635335",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 157,
    name: "The Lost Bookshop",
    slug: "lost-bookshop",
    category: "books",
    subcategory: "science-fiction-fantasy",
    image: "https://m.media-amazon.com/images/I/91Sy3S-198L._SY522_.jpg",
    affiliateLink: "https://amzn.to/3GKH06E",
    fallbackDescription: "A tender ode to the magic of stories and second chances. This novel invites you to believe in hidden chapters, unexpected connections, and the quiet power of finding yourself in the pages of a forgotten book.",
    affiliateData: {
      source: "Amazon",
      asin: "0008609217",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 158,
    name: "The Invisible Life of Addie LaRue",
    slug: "invisible-of-addie-larue",
    category: "books",
    subcategory: "science-fiction-fantasy",
    image: "https://m.media-amazon.com/images/I/91Ql48Y0mqL._SY522_.jpg",
    affiliateLink: "https://amzn.to/3RXcLf9",
    fallbackDescription: "A haunting, lyrical story about memory, identity, and the quiet ache of being unseen. Spanning centuries, it explores what it means to be forgotten—and what it takes to be remembered.",
    affiliateData: {
      source: "Amazon",
      asin: "0765387565",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 159,
    name: "The Serpent and the Wings of Night",
    slug: "serpent-and-wings-of-night",
    category: "books",
    subcategory: "science-fiction-fantasy",
    image: "https://m.media-amazon.com/images/I/51e3Iq7VBpL._SY445_SX342_PQ52_.jpg",
    affiliateLink: "https://amzn.to/4iT6qMZ",
    fallbackDescription: "A fierce tale of survival, sacrifice, and forbidden connection, set in a world where trust is deadly and love even more so. Darkly romantic and full of peril, it asks what you're willing to risk when the price of power is your heart.",
    affiliateData: {
      source: "Amazon",
      asin: "1250343178",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 160,
    name: "Zodiac Academy",
    slug: "zodiac-academy",
    category: "books",
    subcategory: "science-fiction-fantasy",
    image: "https://m.media-amazon.com/images/I/81YvbTRNa7L._SY522_.jpg",
    affiliateLink: "https://amzn.to/4kiv2jn",
    fallbackDescription: "A wild, high-octane dive into a magical world where power is brutal, alliances are shaky, and destiny plays dirty. Bold, chaotic, and unapologetically intense—this is survival with teeth.",
    affiliateData: {
      source: "Amazon",
      asin: "1916926258",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 161,
    name: "Quicksilver",
    slug: "quicksilver",
    category: "books",
    subcategory: "science-fiction-fantasy",
    image: "https://m.media-amazon.com/images/I/71l08B9yKJL._SY522_.jpg",
    affiliateLink: "https://amzn.to/4388J8L",
    fallbackDescription: "This is a placeholder description for the Science Fiction & Fantasy subcategory.",
    affiliateData: {
      source: "Amazon",
      asin: "1538775794",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 162,
    name: "Fourth Wing",
    slug: "fourth-wing",
    category: "books",
    subcategory: "science-fiction-fantasy",
    image: "https://m.media-amazon.com/images/I/91n7p-j5aqL._SY522_.jpg",
    affiliateLink: "https://amzn.to/4iPr9B7",
    fallbackDescription: "A fierce, high-stakes fantasy where survival means outsmarting enemies, dragons, and fate itself. Sharp, defiant, and full of tension, it’s a story about finding strength in what sets you apart.",
    affiliateData: {
      source: "Amazon",
      asin: "1649374046",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 163,
    name: "Pretty Girls",
    slug: "pretty-girls",
    category: "books",
    subcategory: "mystery-thriller-suspense",
    image: "https://m.media-amazon.com/images/I/61GH6AC2GzL._SY522_.jpg",
    affiliateLink: "https://amzn.to/4k9Axk2",
    fallbackDescription: "A raw and harrowing story of sisterhood fractured by trauma. As buried truths come to light, this thriller cuts deep—revealing just how far we’ll go to protect the ones we’ve already lost.",
    affiliateData: {
      source: "Amazon",
      asin: "0606396608",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 164,
    name: "The Silent Patient",
    slug: "silent-patient",
    category: "books",
    subcategory: "mystery-thriller-suspense",
    image: "https://m.media-amazon.com/images/I/91lslnZ-btL._SY522_.jpg",
    affiliateLink: "https://amzn.to/4ka90in",
    fallbackDescription: "An eerie, tightly woven mystery where silence conceals more than words ever could. As layers peel back, what emerges is a haunting study of motive, memory, and the danger of uncovering too much.",
    affiliateData: {
      source: "Amazon",
      asin: "1250301696",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 165,
    name: "The Boyfriend",
    slug: "the-boyfriend",
    category: "books",
    subcategory: "mystery-thriller-suspense",
    image: "https://m.media-amazon.com/images/I/71a-1c19XzL._SY522_.jpg",
    affiliateLink: "https://amzn.to/4m8WVMf",
    fallbackDescription: "A chilling descent into charm, suspicion, and survival. This fast-paced thriller keeps you questioning everyone—and wondering how well you really know the person beside you.",
    affiliateData: {
      source: "Amazon",
      asin: "1464231680",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 166,
    name: "Verity",
    slug: "verity",
    category: "books",
    subcategory: "mystery-thriller-suspense",
    image: "https://m.media-amazon.com/images/I/91SukbcXCpL._SY522_.jpg",
    affiliateLink: "https://amzn.to/3F3ejRX",
    fallbackDescription: "Dark, provocative, and impossible to put down. This psychological thriller blurs the line between truth and manipulation, pulling you deeper into its unsettling questions with every turn.",
    affiliateData: {
      source: "Amazon",
      asin: "1538739720",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 167,
    name: "The Frozen River",
    slug: "frozen-river",
    category: "books",
    subcategory: "mystery-thriller-suspense",
    image: "https://m.media-amazon.com/images/I/91UNc7u2XwL._SY522_.jpg",
    affiliateLink: "https://amzn.to/44Z21Vi",
    fallbackDescription: "A gripping blend of historical fiction and mystery, this novel follows a relentless woman seeking truth in a time when her voice wasn't meant to matter. Quietly powerful and deeply human.",
    affiliateData: {
      source: "Amazon",
      asin: "0385546874",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 168,
    name: "The Housemaid",
    slug: "the-housemaid",
    category: "books",
    subcategory: "mystery-thriller-suspense",
    image: "https://m.media-amazon.com/images/I/81AHTyq2wVL._SY522_.jpg",
    affiliateLink: "https://amzn.to/435jEQS",
    fallbackDescription: "A taut, unsettling thriller that peels back the illusion of perfection one secret at a time. This story draws you in with quiet tension and doesn't let go until the final, chilling reveal.",
    affiliateData: {
      source: "Amazon",
      asin: "1538742578",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 169,
    name: "Rich Dad Poor Dad",
    slug: "rich-dad-poor-dad",
    category: "books",
    subcategory: "self-help",
    image: "https://m.media-amazon.com/images/I/81BE7eeKzAL._SY522_.jpg",
    affiliateLink: "https://amzn.to/3Sqxyb5",
    fallbackDescription: "A foundational read on financial mindset, this book reframes how we think about money, risk, and independence. It challenges inherited beliefs and offers a lens for building lasting wealth outside the traditional path.",
    affiliateData: {
      source: "Amazon",
      asin: " 1612681123",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 170,
    name: "Thinking, Fast and Slow",
    slug: "thinking-fast-and-slow",
    category: "books",
    subcategory: "self-help",
    image: "https://m.media-amazon.com/images/I/319zc862DSL._SY445_SX342_PQ95_.jpg",
    affiliateLink: "https://amzn.to/4jMCD9V",
    fallbackDescription: "A lucid exploration of how we think—and how our thinking misleads us. This book sharpens your awareness of bias and gives you the tools to see your own mind more clearly.",
    affiliateData: {
      source: "Amazon",
      asin: "0374275637",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 171,
    name: "The Four Agreements",
    slug: "four-agreements",
    category: "books",
    subcategory: "self-help",
    image: "https://m.media-amazon.com/images/I/91rR9gMuOVL._SY522_.jpg",
    affiliateLink: "https://amzn.to/4m8kCnS",
    fallbackDescription: "A simple, enduring framework for living with clarity and integrity. These four commitments cut through mental noise and offer a steady path back to personal freedom.",
    affiliateData: {
      source: "Amazon",
      asin: "1934408654",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 172,
    name: "Man's Search for Meaning",
    slug: "mans-search-for-meaning",
    category: "books",
    subcategory: "self-help",
    image: "https://m.media-amazon.com/images/I/61anTwwNKiL._SY522_.jpg",
    affiliateLink: "https://amzn.to/3Zbyvb4",
    fallbackDescription: "A timeless reflection on suffering, resilience, and the quiet power of meaning. Viktor Frankl’s firsthand account of survival in the face of horror reveals how purpose sustains us when nothing else can.",
    affiliateData: {
      source: "Amazon",
      asin: "1663607982",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 173,
    name: "The Power of Now",
    slug: "power-of-now",
    category: "books",
    subcategory: "self-help",
    image: "https://m.media-amazon.com/images/I/71-zqlETKcL._SY522_.jpg",
    affiliateLink: "https://amzn.to/4mok3GW",
    fallbackDescription: "A clear, grounding invitation to step out of thought and into presence. This book helps you reconnect with the quiet awareness beneath the noise.",
    affiliateData: {
      source: "Amazon",
      asin: "1577311523",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 174,
    name: "The Mountain Is You",
    slug: "mountain-is-you",
    category: "books",
    subcategory: "self-help",
    image: "https://m.media-amazon.com/images/I/71AHFDEpkdL._SY522_.jpg",
    affiliateLink: "https://amzn.to/4iVKgcG",
    fallbackDescription: "A guide to breaking patterns of self-sabotage by facing the deeper emotional needs beneath them. Through inner excavation and radical self-honesty, it offers a path to becoming who you're truly meant to be.",
    affiliateData: {
      source: "Amazon",
      asin: "1949759946",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 175,
    name: "Dopamine Nation",
    slug: "dopamine-nation",
    category: "books",
    subcategory: "health-fitness-dieting",
    image: "https://m.media-amazon.com/images/I/81Jy2PU82kL._SY522_.jpg",
    affiliateLink: "https://amzn.to/4k9VZWb",
    fallbackDescription: "Explores how relentless overstimulation shapes our behavior—and offers a path to reclaim balance, discipline, and internal calm.",
    affiliateData: {
      source: "Amazon",
      asin: "152474672X",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 176,
    name: "Built from Broken",
    slug: "built-from-broken",
    category: "books",
    subcategory: "health-fitness-dieting",
    image: "https://m.media-amazon.com/images/I/91Y97oylPvL._SY522_.jpg",
    affiliateLink: "https://amzn.to/3EWMD18",
    fallbackDescription: "A practical, science-backed guide to healing joint pain, correcting imbalances, and building lasting strength from the inside out.",
    affiliateData: {
      source: "Amazon",
      asin: "1735728500",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 177,
    name: "The Complete Mediterranean Cookbook",
    slug: "complete-mediterranean-cookbook",
    category: "books",
    subcategory: "health-fitness-dieting",
    image: "https://m.media-amazon.com/images/I/51SMW-0A36L._SX342_SY445_PQ52_.jpg",
    affiliateLink: "https://amzn.to/43a89HN",
    fallbackDescription: "Savor the art of simple, vibrant cooking with 500 nourishing Mediterranean recipes—thoughtfully crafted to bring joy, ease, and everyday beauty to your table.",
    affiliateData: {
      source: "Amazon",
      asin: "1948703947",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 178,
    name: "Good Energy",
    slug: "good-energy",
    category: "books",
    subcategory: "health-fitness-dieting",
    image: "https://m.media-amazon.com/images/I/71yf71HxJqL._SY522_.jpg",
    affiliateLink: "https://amzn.to/4m2pAm3",
    fallbackDescription: "A science-backed guide to metabolic health, showing how energy at the cellular level shapes everything from mood to longevity—and how to reclaim it.",
    affiliateData: {
      source: "Amazon",
      asin: "0593712641",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 179,
    name: "The Body Keeps the Score",
    slug: "body-keeps-score",
    category: "books",
    subcategory: "health-fitness-dieting",
    image: "https://m.media-amazon.com/images/I/419o8aYbjZL._SY445_SX342_PQ52_.jpg",
    affiliateLink: "https://amzn.to/4iP3aSx",
    fallbackDescription: "A foundational book on trauma and recovery—showing how the body holds memory, and how healing must happen through both brain and nervous system.",
    affiliateData: {
      source: "Amazon",
      asin: "0670785938",
      price: "See link for current price",
      availability: "In stock"
    }
  },
  {
    id: 180,
    name: "Atomic Habits",
    slug: "atomic-habits",
    category: "books",
    subcategory: "health-fitness-dieting",
    image: "https://m.media-amazon.com/images/I/81ANaVZk5LL._SY522_.jpg",
    affiliateLink: "https://amzn.to/4iUP1DA",
    fallbackDescription: "A clear, actionable guide to habit change—built on systems, not willpower. Simple steps for real progress, grounded in behavioral science.",
    affiliateData: {
      source: "Amazon",
      asin: "0735211299",
      price: "See link for current price",
      availability: "In stock"
    }
  }
];

export default products;