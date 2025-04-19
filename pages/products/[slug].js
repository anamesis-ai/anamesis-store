import { useRouter } from "next/router";
import products from "../../data/products";

export default function ProductDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 dark:text-gray-300">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 px-6 pt-32 pb-12 transition-colors duration-300 max-w-4xl mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-72 object-cover rounded mb-6 shadow"
      />
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{product.description}</p>
      <a
        href={product.link}
        className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition"
      >
        View Product
      </a>
    </div>
  );
}
