import { useEffect, useState } from "react";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6 text-[#032F30]">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
            <div className="flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-md w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-[#032F30] text-center">{product.title}</h3>
            <p className="mt-2 text-gray-600 text-center">{product.description}</p>
            <p className="text-center font-bold mt-2 text-[#032F30]">${product.price}</p>
            <button className="bg-[#0C969C] text-white px-4 py-2 mt-auto rounded-lg self-center">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
