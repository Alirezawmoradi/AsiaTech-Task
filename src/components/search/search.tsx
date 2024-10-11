import {useSearchStore} from "../../stores/search-store/useSearchStore.ts";
import {useDebounce} from "../../hooks/search-hook/use-debounce.ts";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {BiSearch} from "react-icons/bi";
import {Input} from "../input/input.tsx";
import {SuggestLoading} from "../loading";

export const Search = () => {
    const {query, suggestions, loading} = useSearchStore();
    const {setQuery, getSuggestions} = useSearchStore((state) => state.actions);
    const debouncedSearch = useDebounce(query);
    const navigate = useNavigate();

    const inputRef = useRef<HTMLDivElement>(null);
    const [showSuggestion, setShowSuggestion] = useState<boolean>(false);

    useEffect(() => {
        if (debouncedSearch && debouncedSearch.trim() !== '') {
            getSuggestions(debouncedSearch);
            setShowSuggestion(true);
        } else {
            setShowSuggestion(false);
        }
    }, [debouncedSearch]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setShowSuggestion(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSearch = () => {
        if (query) {
            setShowSuggestion(false);
            navigate(`/details/${query}`);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setQuery(suggestion);
        setShowSuggestion(false);
        handleSearch();
    };

    return (
        <div className="relative" ref={inputRef}>
            <Input
                value={query}
                inputRef={inputRef}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch();
                }}
            />
            <BiSearch
                className="absolute right-4 top-1/2 transform hover:text-gray-600 transition-colors duration-500 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={handleSearch}/>
            {showSuggestion && suggestions && suggestions.length > 0 && (
                <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto scrollbar">
                    {loading ?
                            <SuggestLoading/>
                        :
                        suggestions.slice(0, 20).map((suggestion, index) => (
                            <li
                                key={index}
                                className="cursor-pointer p-2 hover:bg-gray-200"
                                onClick={() => handleSuggestionClick(suggestion.title)}
                            >
                                {suggestion.title}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};
