import React from "react";

function FeaturedProducts() {
  const products = [
    {
      name: "Smartphone",
      price: "$499",
      image:
        "https://images.news18.com/ibnlive/uploads/2021/10/apple-iphone-13-pro-review-164231980316x9.jpeg",
    },
    {
      name: "Handmade Vase",
      price: "$59",
      image:
        "https://m.media-amazon.com/images/I/61pnSPoZuLL._AC_UF894,1000_QL80_.jpg",
    },
    {
      name: "Laptop",
      price: "$999",
      image:
        "https://static.digit.in/default/63043a830597c650a77e5b892de23c519eb5100e.jpeg",
    },
    {
      name: "Cookware Set",
      price: "$199",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShUTBWMq3kVj_J1aloYYTeh0-D9L8izWVUAw&s",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-50 object-cover rounded-t-lg"
            />
            <h3 className="text-xl mt-2">{product.name}</h3>
            <div className="flex justify-between items-center">
            <p className="text-lg font-bold text-green-500">{product.price}</p>
            <button className="mt-2 bg-[#FF6F61] text-white p-2 rounded hover:bg-[#FF5A4F]">
              Quick View
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
