import React from "react";

const NearbyStores = () => {
  const stores = [
    {
      name: "Apple Store",
      address: "7,8,9, Raspan Arcade, Ahmedabad",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipO89zXM8CfJdY-6nxE4m1vR8h13WE-ozXa3lCWO=s680-w680-h510",
    },
    {
      name: "Steel & Crockery Store",
      address: "Nr.Govind park Society, Surat",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOmmOtBVY3A3DOvZjJHClOdDgkRF46ddwTYi4yC=s680-w680-h510",
    },
    {
      name: "D-Mart",
      address: "101,River Park Society, Singanpor, Surat",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipP64h71H0U_Hv03hKn8JH0WGfUD9_cFHScwUH_h=s680-w680-h510",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Nearby Stores</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stores.map((store, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={store.image}
              alt={store.name}
              className="w-full h-50 object-cover rounded-t-lg"
            />
            <h3 className="text-xl mt-2">{store.name}</h3>
            <div className="flex justify-between items-center">
              <p className="text-sm">{store.address}</p>
              <button className="mt-2 bg-[#FF6F61] text-white p-2 rounded hover:bg-[#FF5A4F]">
                View on Map
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyStores;
