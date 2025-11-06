import React, { useState } from "react";

const CropPage = () => {
  const [image, setImage] = useState(null);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        📷 ଫସଲ ସହାୟତା
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="mb-4"
      />

      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="crop"
          className="w-64 mx-auto rounded shadow"
        />
      )}

      <button className="bg-green-600 text-white px-4 py-2 rounded mt-4">
        ଏଆଇ ବିଶ୍ଲେଷଣ
      </button>
    </div>
  );
};

export default CropPage;
