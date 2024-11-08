import React from "react";
import ProductCard from "../cards/product-card/product-card";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

const RelatedProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products?limit=3");
  const similiarProducts: Product[] = await response.json();

  return (
    <section className="w-full mt-20 flex flex-col gap-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
        Similiar products
      </h2>
      <div className="grid justify-center gap-4 grid-rows-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {similiarProducts.map((product) => (
          <ProductCard
            id={product.id}
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
