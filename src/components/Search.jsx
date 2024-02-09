import { useState } from 'react';
import { useArticles } from '../hooks/useArticles'
import '../styles/_Search.scss'
import { useNavigate } from 'react-router-dom';
const Search = () => {
    const [query, setQuery]=useState('')
    const {getArticlesByFilter}=useArticles()
    const navigate= useNavigate()
    // const onChange
    const handleSearch = async(e) =>{
        e.preventDefault(); // Prevent form submission from reloading the page
        await getArticlesByFilter('q', query)
        setQuery('')
        navigate('/')
    }

  return (
    <div >
        <form  className='search-box' onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                />
            <button className='search-button' type="submit">
            <svg viewBox="0 0 32 32" width="16" height="16" className="search-icon">
            <path d="M27.414,24.586l-5.853-5.853C22.342,17.223,23,15.199,23,13c0-5.514-4.486-10-10-10S3,7.486,3,13s4.486,10,10,10
                c2.199,0,4.223-0.658,5.733-1.768l5.853,5.853c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293
                C27.805,25.609,27.805,25.004,27.414,24.586z M13,21c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S17.411,21,13,21z"/>
        </svg></button>
        </form>
    </div>
  )
}

export default Search