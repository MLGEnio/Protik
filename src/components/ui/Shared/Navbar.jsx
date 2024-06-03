import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout actions here (e.g., clearing tokens, etc.)
        navigate("/"); // Navigate to the login page
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <div
                className='absolute top-10 right-14 bg-cover w-20 h-20 py-6 z-50'
                style={{ backgroundImage: `url(/avatars/img_6.png)` }}
                onClick={togglePopup}
            >
            </div>
            {showPopup && (
                <div className="absolute top-32 right-14 bg-white border rounded shadow-lg z-50 p-2">
                    <button onClick={handleLogout} className="text-[#B573EE]">
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
