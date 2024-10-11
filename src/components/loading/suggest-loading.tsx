import * as React from "react";

export const SuggestLoading: React.FC = () => {
    return (
        <div className="flex justify-center items-center p-4">
            <div
                className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full"></div>
        </div>
    );
};
