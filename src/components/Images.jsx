import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const Images = () => {
  const location = useLocation();
  const images = location.state?.images || [];

  return (
    <div className="min-h-screen  bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-600 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Images</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg relative h-80"
            >
              <img
                src={image.urls.small}
                alt={image.alt_description}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <button
                onClick={() => alert('Edit functionality not implemented yet')}
                className="absolute botum-4 right-4 text-blue-500 hover:text-blue-700 transition-transform duration-300"
              >
                <FaEdit size={24} />
              </button>
              <Link
                to={`/banners/${image.id}`}
                className="block mt-4 text-blue-600 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-700">No images to display.</p>
        )}
      </div>
    </div>
  );
};

export default Images;
