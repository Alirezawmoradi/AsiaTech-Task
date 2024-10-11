import {InputProps} from "./input.types.ts";
import * as React from "react";


export const Input: React.FC<InputProps> = ({
                                                value,
                                                placeholder = "Enter Search term...",
                                                inputRef,
                                                onChange,
                                                onKeyDown,
                                                className
                                            }) => {
    return (
        <div className="relative" ref={inputRef}>
            <input
                value={value}
                type="text"
                className={`w-full h-10 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg ${className}`}
                placeholder={placeholder}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    );
};
