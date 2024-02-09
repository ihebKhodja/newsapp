import { useState, useEffect, useContext } from 'react'
import { useArticles } from '../hooks/useArticles'
import { ArticlesContext } from '../contexts/ArticlesContext'
import ArticleList from '../components/ArticleList'
import Pagination from '../components/Pagination'


const Home = () => {
    const [loading, setLoading]=useState(true)
    const {getArticles}=useArticles()
    const {...state}=useContext(ArticlesContext)
    const [currentPage, setCurrentPage]=useState(1)
    const [articlesPerPage]=useState(30)
    
    useEffect(() => {
        const fetchArticles = async () => {
                await getArticles(); // Assuming getArticles is an async operation
                setLoading(false);
        };
        fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Pagination logic 
    // getting the current articles forn each page
    const indexOfLastArticle=currentPage * articlesPerPage;
    const indexOfFirstArticle= indexOfLastArticle - articlesPerPage;
    const currentArticles = state.articlesList.slice(indexOfFirstArticle, indexOfLastArticle)
    // 
    const paginate= (pageNumber)=> setCurrentPage(pageNumber)

  return (
    
    <div className='wrapper'>
    {
        loading ? <div className="loader"></div>

        :
        <div className='home-content'>

            <h4>{state.category}</h4>

            <ArticleList list={currentArticles} />

            <Pagination articlesPerPage={articlesPerPage} totalArticles={state.articlesList.length} paginate={paginate} />
        </div>
    }
    </div>
  )
}

export default Home