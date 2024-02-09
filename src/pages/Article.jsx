import { useLocation } from 'react-router-dom';
import '../styles/_Article.scss'
const Article = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Access data passed through state
  let ts = new Date(data.published_at); // converting timeStamp format to Date 
  const imageUrl = data.urlToImage || 'https://via.placeholder.com/150'; // in case imageurl is null from database

  return (
    <div className='article'>
        <h1>{data.title}</h1>
        <div className='info'>
          <p > <b>By :</b> {data.author}</p>
          <p>{ts.toDateString()}</p>
        </div>
        <img  src={imageUrl} />
        <div className='content'>
        {/* in case the data is fetched from proxy api source object has { id , name}  */}
        <p > <b>Source :</b> {data.source?.name ?? data.source }</p>   
          <p>{data.description }</p>
          <p> <a href={data.url} target='blank'>Read More</a> </p> {/*  link to the original article webpage*/}
        </div>
    </div>
  )
}

export default Article