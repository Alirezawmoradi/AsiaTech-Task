export interface SearchResult {
    url: string;
    position: number;
    title: string;
    description: string;
}

export type Suggestion = Omit<SearchResult, 'url' | 'description'>

export interface SearchState {
    query: string;
    results: SearchResult[] | null;
    loading: boolean;
    error: string | null;
    suggestions: Suggestion[],


    actions: {
        setQuery: (query: string) => void;
        getResults: (query: string) => Promise<void>;
        getSuggestions: (query: string) => Promise<void>;
    };
}
