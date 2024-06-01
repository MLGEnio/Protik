// src/components/User.jsx
import React from 'react';

const Card = ({ title, filter, setFilter }) => {
    return (
        <div className="relative flex flex-col items-center">
            <button
                className={`bg-gray-800 mr-2 text-white py-1 px-4 rounded-full hover:bg-gray-700 focus:bg-[#B573EE] ${filter === title ? 'bg-gray-700' : ''}`}
                onClick={() => setFilter(title)}
            >
                {title}
            </button>
        </div>
    );
};

export default Card;
