/* eslint-disable react/prop-types */
import ArticleItem from '../components/ArticleItem'

const ArticleList = ({list}) => {
  return (
    <div className='article-list' style={{ height: '10rem' }}> 
    
            { Array.isArray(list) ? list.map((item, index)=>{
                return  <ArticleItem key={index} data={item} /> })
                : null
            }       
    </div>
  )
}

export default ArticleList