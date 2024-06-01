import React from 'react';

const Card = ({ image, title, date, tag }) => {
    return (
        <div className="relative max-w-xs rounded-lg overflow-hidden shadow-lg mx-3">
            <img src={image} alt={title} className="w-[300px] h-[250px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-between py-5 px-2 ">
                <div className="flex flex-col">
                    <h2 className="text-white text-xl font-bold">{title}</h2>
                    <p className="text-gray-300">{date}</p>
                </div>
                <span className="inline-block bg-purple-600 w-fit text-white text-xs font-semibold mt-2 px-2 py-1 rounded-full">
                    #{tag}
                </span>
            </div>
        </div>
    );
};

export default Card;
