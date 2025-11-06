import React, { useState } from "react";

const MandiPage = () => {
  const [prices] = useState([
    { commodity: "ଧାନ (Paddy)", min_price: 2000, max_price: 2100 },
    { commodity: "ଗହମ୍ (Wheat)", min_price: 2200, max_price: 2300 },
    { commodity: "ଡାଲି (Pulses)", min_price: 7500, max_price: 8200 },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">🌾 ମଣ୍ଡି ଦର</h2>
      <div className="grid gap-3">
        {prices.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <b>{item.commodity}</b>
            <p>
              💰 ₹{item.min_price} - ₹{item.max_price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MandiPage;
