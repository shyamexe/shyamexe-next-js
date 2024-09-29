
import React from 'react';

interface TitleComponentProps {
    title: string;
}

const TitleComponent = ({ title }: TitleComponentProps) => {
    return (
        <div className="flex items-center pt-20 pb-10">
            <div >
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 6.25V12.5C5 13.3292 5.316 14.124 5.879 14.7094C6.441 15.2958 7.204 15.625 8 15.625H18M18 15.625L14 19.7917M18 15.625L14 11.4583" stroke="#F2F4F7" strokeLinejoin="round" />
                </svg>

            </div>
            <h2 className="text-xl ">{title}</h2>
        </div>
    );
};

export default TitleComponent;
