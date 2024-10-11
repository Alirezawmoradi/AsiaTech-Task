import {ChangeEvent, KeyboardEvent, RefObject} from "react";

export interface InputProps {
    value: string;
    placeholder?: string;
    inputRef: RefObject<HTMLDivElement>;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    className?: string;
}