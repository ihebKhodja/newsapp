/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import '../styles/_ArticleItem.scss'

const ArticleItem = ({data}) => {

    let navigate = useNavigate();
     const handleClick= ()=>{
        navigate('/article',{state:{data}})
    }
    const imageUrl = data.urlToImage || 'https://via.placeholder.com/150';

    return (
        <div onClick={handleClick} className='card'>
            <img  src={imageUrl} />
            <div className='content'>
                <p>{data.title}</p>
                {/* <h3>{data.author}</h3> */}
                {/* <p>{data.source?.name ?? 'Default or No Source'}</p> */}
                {/* <p>{data.description}</p> */}
                {/* <button >Full Article</button> */}
            </div>
        </div>
       
  )
}

export default ArticleItem