import axios from "axios";

const BASE_URL = 'https://duckduckgo8.p.rapidapi.com/';

export const httpServiceInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    params: {
        q: '',
        format: 'json',
        no_html: 1,
        no_redirect: 1,
        skip_disambig: 1,
    },
    headers: {
        'x-rapidapi-key': 'ce3f685c05msh620dcb5704c2742p16fc9fjsn12d70c93aa97',
        'x-rapidapi-host': 'duckduckgo8.p.rapidapi.com'
    }
});

// Used Api key in this file to make it testable ( it should define in .env file )
// Used RapidApi to have clean and better json response from fetching api
// ( notice : you should use vpn to fetch data in this application because of RapidApi Services )