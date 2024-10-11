import {create} from "zustand";
import {httpServiceInstance} from "../../core/http-service.ts";
import {SearchState} from "./search.types.ts";

export const useSearchStore = create<SearchState>((set) => ({
    query: '',
    results: null,
    loading: false,
    error: null,
    suggestions: [],

    actions: {
        setQuery: (query: string) => set({query}),
        getResults: async (query: string) => {
            set({loading: true, error: null});
            try {
                const response = await httpServiceInstance.get('', {
                    params: {q: query},
                });
                set({results: response.data.results || response.data});
                console.log('results', response.data);
            } catch (error) {
                set({error: 'Error'});
            } finally {
                set({loading: false});
            }
        },
        getSuggestions: async (query: string) => {
            set({loading: true, error: null});
            try {
                const response = await httpServiceInstance.get('', {
                    params: {q: query},
                });
                set({suggestions: response.data.results || response.data});
            } catch (error) {
                set({error: 'Error'});
            } finally {
                set({loading: false});
            }
        }
    },
}));