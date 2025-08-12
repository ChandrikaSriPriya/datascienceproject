import React from 'react';

const Badge = ({ text, color }) => {
    return (
        <span className={`inline-flex items-center px-3 py-1 text-sm font-medium ${color} rounded-full`}>
            {text}
        </span>
    );
};

export default Badge;