# Search Engine Task
## Project Overview

This project implements a search engine using React, Tailwind CSS, TypeScript, and Vite. It allows users to search for a query and get results from the DuckDuckGo API. The project features two main pages:
1. **Search Page :** Users can input a query and view search suggestions. Clicking on a suggestion or hitting the search icon navigates to the results page.
2.  **Details Page :** Displays the search results based on the query entered on the search page. Users can click on the results to navigate to external sites.
   
The search suggestions and results are fetched via the **RapidAPI** platform for a cleaner and more structured response from the DuckDuckGo API.

## Features

- **Debounced Search Input :** Search results are fetched after a small delay while typing, ensuring minimal API calls and optimal performance.
- **Search Suggestions :** Provides suggestions similar to Google Search based on user input.
- **Search Results :** Displays a list of search results with clickable titles that link to external URLs.
- **Loading States :** Both the suggestion list and search results show loading indicators while data is being fetched.

## Tech Stack
- **Frontend :** React, TypeScript
- **State Management :** Zustand
- **Styling :** Tailwind CSS
- **Routing :**  React Router Dom
- **HTTP Client :** Axios
- **API :** DuckDuckGo API (via RapidAPI)

## Project Structure
- ```bash 
   src/
   │
   ├── components/        # Reusable components (Search input, Results, Loading indicators)
   ├── hooks/             # Custom hooks for debounced search and fetching data
   ├── layouts/           # Main layout structure
   ├── pages/             # SearchPage and DetailPage
   ├── stores/            # Zustand store for search state management
   ├── routes/            # React Router Dom for creating routes
   └── core/
         └── http-service.ts  # Axios instance configured to interact with the DuckDuckGo API via RapidAPI

## How to Run the Project
### Prerequisites
- Node.js and npm installed on your machine
- A VPN is required to access RapidAPI


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Alirezawmoradi/AsiaTech-Task

2. Install dependencies:

   ```bash
   npm install

3. Start the application:

   ```bash
   npm run dev

4. Open http://localhost:5173 in your browser to see the app in action.

## Api Usage

The project fetches search data from DuckDuckGo via RapidAPI.
### Important Note
Due to geographical restrictions, RapidAPI require the use of a VPN for stable access. Be sure to have this in mind during usage. The API key is pre-configured in the project for ease of use during testing.

## Conclusion
This project showcases the implementation of a functional search engine with a clean architecture and modern frontend technologies. The focus was on creating a user-friendly interface with optimized API calls, dynamic suggestions, and responsive design.

## License
This project is open-source and available under the [MIT license](https://opensource.org/licenses/MIT).


