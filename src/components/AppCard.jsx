import React from 'react';
import { Link } from "react-router";
import DownloadIcon from "../assets/icon-downloads.png"
import RatingsIcon from "../assets/icon-ratings.png"

const formatNumber = (num) => {
  if (num >= 1e9) return (num / 1e9).toFixed(1) + "B";
  if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
  if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
  return num;
};

const AppCard = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;

  return (
    <Link to={`/apps/${id}`}>
      <div className="p-4 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 bg-white">
        
        {/* Image */}
        <div className="bg-gray-100 p-6 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-2/3 object-contain rounded-xl"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-3">
            {title}
          </h2>

          <div className="flex justify-between items-center text-sm">
            
            {/* Downloads */}
            <div className="flex items-center gap-1 text-green-600 bg-gray-100 p-2 rounded-lg">
              <span>
                <img className='h-6' src={DownloadIcon} alt="" />
              </span>
              <span>{formatNumber(downloads)}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-orange-500 bg-gray-100 p-2 rounded-lg">
              <span>
                <img className='h-6' src={RatingsIcon} alt="" />
              </span>
              <span>{ratingAvg}</span>
            </div>

          </div>
        </div>

      </div>
    </Link>
  );
};

export default AppCard;