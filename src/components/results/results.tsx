import {useSearchStore} from "../../stores/search-store/useSearchStore.ts";
import {useEffect} from "react";
import {Loading} from "../loading";
import {useParams} from "react-router-dom";

export const Results = () => {
    const {query: urlQuery} = useParams<{ query: string }>();
    const {query, loading, results} = useSearchStore();
    const {getResults, setQuery} = useSearchStore((state) => state.actions);

    useEffect(() => {
        if (urlQuery && urlQuery !== query) {
            setQuery(urlQuery);
        }
    }, [urlQuery]);

    useEffect(() => {
        if (query !== '') {
            getResults(`q=${query}&num=40`)
        }
    }, [query]);
    return (
        <div className="sm:px-56 flex flex-col justify-between space-y-6">
            {loading ?
                <Loading/>
                :
                <>
                    <div className='flex flex-wrap gap-10'>
                        {Array.isArray(results) && results.length > 0 ? (
                            results.map(({url, title}, position) => (
                                <div key={position} className="md:w-2/5 w-full">
                                    <a href={url} target="_blank" rel="noreferrer">
                                        <p className="text-lg hover:underline text-blue-400">{title}</p>
                                        <p className="text-sm text-gray-400">{url.length > 30 ? url.substring(0, 30) : url}</p>
                                    </a>
                                </div>
                            ))
                        ) : (
                            <p>No results found.</p>
                        )}
                    </div>
                </>
            }
        </div>
    )
}