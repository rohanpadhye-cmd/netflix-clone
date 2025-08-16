# React Netflix UI Clone

This project is a personal endeavor to learn and practice React, focusing on UI development and API integration. It's a lightweight clone of the Netflix user interface, built with modern web technologies. The primary goal is to showcase a visually appealing and interactive movie browsing experience, without implementing any backend or video streaming functionalities.

## Technologies Used

*   **React:** The application is built using the React library, leveraging its component-based architecture for a modular and scalable codebase.
*   **React Router:** Used for handling client-side routing, enabling navigation between different pages of the application without a full page reload.
*   **React Hooks:** Utilizes React Hooks for state management and side effects, promoting cleaner and more concise code.
*   **Tailwind CSS:** The UI is styled with Tailwind CSS, a utility-first CSS framework that allows for rapid and custom styling.
*   **TMDB API:** The movie data is fetched from The Movie Database (TMDB) API to populate the UI with real movie information.

## Features

*   Browse different categories of movies, such as Trending, Popular, and Top Rated.
*   A clean and responsive UI that mimics the look and feel of Netflix.

## Future Plans (for further learning)

*   **Movie Detail Page:** Create a page to display detailed information about a selected movie or TV show.
*   **Search Functionality:** Implement a search feature to find movies and TV shows.
*   **State Management:** Explore more advanced state management solutions like Redux or Zustand.
*   **Animations:** Add more animations and transitions to enhance the user experience.

## Setup

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/Project-Name.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Create a `.env` file in the root of the project and add your TMDB API access token:
    ```
    REACT_APP_TMDB_ACCESS_TOKEN=your_access_token
    ```
4.  Start the development server
    ```sh
    npm start
    ```