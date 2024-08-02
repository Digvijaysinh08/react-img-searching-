import axios from "axios";
import React, { useState } from "react";
import { FaRobot, FaExclamationCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader"; // Import the Loader component

const Home = () => {
  const [images, setImages] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(''); // Add error state
  const navigate = useNavigate();

  const getImage = () => {
    if (prompt.trim() === '') {
      setError('Please fill in the query');
      return;
    }

    setLoading(true); // Set loading to true before the API request
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${prompt}&client_id=7GpqrgCsZYXoAXCi4eLDxelFTw4oMtjiur3e10B_lAk`
      )
      .then((response) => {
        setImages(response.data.results);
        setLoading(false); // Set loading to false after the API request
        navigate('/images', { state: { images: response.data.results } });
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setLoading(false); // Set loading to false if there's an error
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-600 px-4 sm:px-6 lg:px-8">
      {loading ? (
        <Loader /> // Display the Loader component while loading
      ) : (
        <div className="bg-white bg-opacity-40 backdrop-blur-lg p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg text-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col md:flex-row md:justify-between md:items-center transform transition-transform duration-300 hover:scale-105">
          <div className="flex flex-col items-center mb-6 md:mb-0 md:pr-8">
            <FaRobot
              size={80}
              className="text-yellow-500 mb-4 transition-transform duration-300 hover:scale-110"
            />
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4 text-gray-800">
              Image Maker
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
              AI Image Maker
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-600 lg:text-xl mb-4 lg:mb-6 xl:mb-8">
              Enter prompt to generate Image
            </p>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 transition-transform duration-300 hover:scale-105"
              rows="4"
              placeholder="Enrter the text"
              value={prompt}
              onChange={(e) => {
                setPrompt(e.target.value);
                setError(''); // Reset error when the user starts typing
              }}
            ></textarea>
            {error && (
              <div className="flex items-center text-red-500 mb-4">
                <FaExclamationCircle className="mr-2" />
                <span>{error}</span>
              </div>
            )}
            <button
              onClick={getImage}
              className="bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition-transform duration-300 hover:scale-105"
            >
              Generate Images
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
