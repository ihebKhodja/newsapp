/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import '../styles/_ArticleItem.scss'

const ArticleItem = ({data}) => {

    let navigate = useNavigate();
     const handleClick= ()=>{
        navigate('/article',{state:{data}}) // passing article data as a state to the article component 
    }
    const imageUrl = data.urlToImage || 'https://via.placeholder.com/150';

    return (
        <div onClick={handleClick} className='card'>
            <img  src={imageUrl} />
            <div className='content'>
                <p>{data.title}</p>
            </div>
        </div>
       
  )
}

export default ArticleItem