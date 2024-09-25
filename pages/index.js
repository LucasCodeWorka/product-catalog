// pages/index.js
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api4-eta.vercel.app/estoque");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Inicialmente, os produtos filtrados são todos os produtos
      } catch (error) {
        console.error("Falha ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (newFilters) => {
    const filtered = products.filter(product => {
      return Object.keys(newFilters).every(key => {
        return product[key].toString().toLowerCase().includes(newFilters[key].toLowerCase());
      });
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex">
      <Sidebar onFilterChange={handleFilterChange} />
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
        {filteredProducts.map((product) => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </div>
    </div>
  );
}
