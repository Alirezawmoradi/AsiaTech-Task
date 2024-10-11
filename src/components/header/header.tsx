import * as React from "react";

export const Header: React.FC = () => {
    return (
        <header className="border-b border-gray-300 border-opacity-5 flex">
            <div className="container xl:flex items-center justify-center">
                <h1 className='xl:text-3xl md:text-2xl font-bold text-gray-300'>AsiaTech Frontend Task</h1>
            </div>
        </header>
    )
}