import React from 'react';

const Card = ({ title }) => {
    return(
        <div className="p-1 text-center text-lg" style={{borderTop: '1px solid #B573EE'}}>
            {title}
        </div>
    )
}

export default Card;