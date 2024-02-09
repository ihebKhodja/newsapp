
# React NewsApp Frontend

## Features

- Dynamic News Article Display: Articles are fetched from the backend and displayed in a user-friendly forma
- Article Categorization: Users can filter news articles based on categories such as technology, business, sports, etc
- Search Functionality: Users can search for articles by keywords.
- Pagination between list of articles.
- Article page for details and link to source webpage.


## Prerequisites
Before running this project locally, ensure you have the following installed:

- Node.js
- npm 
## Installation

- Clone the repository

```bash
  git clone -b react-frontend https://github.com/ihebKhodja/newsapp.git
  cd newsapp
```
- Install dependencies
```bash
 npm Install
```
- Running the Application
```bash
  npm run dev
```
- Build the project
```bash
 npm run build
```
The project should be running now at http://localhost:5173/.


## Pages

The application consists of several pages, each responsible for rendering a specific part of the application.

### Home Page

- Location: `src/pages/Home.jsx`
- Description: The landing page of the application. Displays the latest news articles fetched from the API.

### Article  Page

- Location: `src/pages/Article.jsx`
- Description: Displays detailed information about a news article. This includes the full text, images, and other multimedia associated with the article.
