const slugify = (str) =>
  str.toLowerCase().replace(/\s+/g, "-").replace(/[&]/g, "and").replace(/[,]/g, "");

const categories = [
  {
    id: 1,
    name: "Health & Personal Care",
    slug: "health-personal-care",
    description: "Supplements, hygiene, and daily essentials to help you feel your best.",
    image: "wellness.jpg",
    subcategories: [
      "Skin Care",
      "Soap & Body Cleansers",
      "Shave & Hair Removal",
      "Vitamins & Supplements",
      "Feminine Care"
    ]
  },
  {
    id: 2,
    name: "Home & Kitchen",
    slug: "home-kitchen",
    description: "Objects of comfort, ritual, and everyday ease—for the spaces that hold you.",
    image: "home.jpg",
    subcategories: [
      "Decor",
      "Furniture",
      "Bed & Bath",
      "Garden & Outdoor",
      "Storage & Organization"
    ]
  },
  {
    id: 3,
    name: "Electronics",
    slug: "electronics",
    description: "Smart tools for focus, creativity, and seamless everyday living.",
    image: "focus.jpg",
    subcategories: [
      "Headphones",
      "Office Electronics",
      "Camera & Photo",
      "Wearable Technology",
      "Audio & Home"
    ]
  },
  {
    id: 4,
    name: "Clothing, Shoes & Jewelry",
    slug: "clothing-shoes-jewelry",
    description: "Minimal pieces for self-expression, comfort, and quiet confidence.",
    image: "style.jpg",
    subcategories: [
      "Clothing",
      "Shoes",
      "Jewelry",
      "Handbags",
      "Watches"
    ]
  },
  {
    id: 5,
    name: "Beauty & Personal Care",
    slug: "beauty-personal-care",
    description: "Everyday beauty and body care—uncomplicated, soothing, and honest.",
    image: "care.jpg",
    subcategories: [
      "Makeup",
      "Hair Care",
      "Fragrance",
      "Foot, Hand & Nail Care",
      "Tools & Accessories"
    ]
  },
  {
    id: 6,
    name: "Books",
    slug: "books",
    description: "Books and ideas that move you, teach you, or bring you back to yourself.",
    image: "books.jpg",
    subcategories: [
      "Romance",
      "Science Fiction & Fantasy",
      "Mystery, Thriller & Suspense",
      "Self-Help",
      "Health, Fitness & Dieting"
    ]
  }
];

categories.forEach((cat) => {
  cat.slugifiedSubcategories = cat.subcategories.map(slugify);
});

export default categories;
