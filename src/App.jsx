import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { ArticlesContextProvider } from './contexts/ArticlesContext'
import './App.scss'
import Home from './pages/Home'
import Article from './pages/Article'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Search from './components/Search'
import Footer from './components/Footer'

function App() {
  // console.log(import.meta.env.VITE_API_URL)

  return (
  <div className='app'>
      <Router>
        <ArticlesContextProvider> 
          <Navbar />
          <Categories />
          <Search />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article" element={<Article />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </ArticlesContextProvider>
      </Router>
  </div>
  )
}

export default App
