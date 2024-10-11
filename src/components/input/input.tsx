import {BiSearch} from "react-icons/bi";
import {InputProps} from "./input.types.ts";
import * as React from "react";


export const Input: React.FC<InputProps> = ({
                                                value,
                                                placeholder = "Enter Search term...",
                                                inputRef,
                                                onChange,
                                                onKeyDown,
                                                onSearchIconClick,
                                            }) => {
    return (
        <div className="relative" ref={inputRef}>
            <input
                value={value}
                type="text"
                className="w-full h-10 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
                placeholder={placeholder}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <BiSearch
                className="absolute right-4 top-1/2 transform hover:text-gray-600 transition-colors duration-500 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={onSearchIconClick}
            />
        </div>
    );
};
