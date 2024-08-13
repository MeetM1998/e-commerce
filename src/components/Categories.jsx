import React from "react";

const Categories = () => {
  const categories = [
    {
      name: "Beauty & Personal Care",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/8/XN/NF/SB/157564005/beauty-personal-care-500x500.jpg",
    },
    {
      name: "Electronics",
      image:
        "https://thumbs.dreamstime.com/b/many-used-modern-e…loor-reuse-recycle-concept-top-view-153892434.jpg",
    },
    {
      name: "Books & Stationery",
      image:
        "https://as1.ftcdn.net/v2/jpg/00/34/70/32/1000_F_34703220_TiczZRk73LnvUcvt2J2qj57mKzwKAtBT.jpg",
    },
    {
      name: "Art & Handicraft",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/2/TY/LZ/SZ/93007892/handicraft-jpg-500x500.jpg",
    },
    {
      name: "Gifts & Toys",
      image:
        "https://99rupeestore.com/cdn/shop/collections/51VTbfwomoL._SL1500.jpg?v=1674908132",
    },
  ];

  return (
    <div className="mt-8 flex flex-col">
      <h2 className="text-2xl font-bold">Categories</h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 md:h-36 object-cover rounded-t-lg"
            />
            <h3 className="text-xl mt-2">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
