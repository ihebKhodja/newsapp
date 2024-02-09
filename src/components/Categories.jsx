
import { useNavigate } from "react-router-dom"
import { categories } from "../constants"
import { useArticles } from '../hooks/useArticles'
import '../styles/_Categories.scss'

const Categories = () => {
  const { getArticlesByFilter}=useArticles()
  const navigate= useNavigate()
  const handleCategorie= async(categorie)=>{
        await getArticlesByFilter('category', categorie)
        navigate('/')
    }
  
  return (
    <div className="categories-container">
      <ul>
        {Array.isArray(categories)  ? categories.map((categorie, index)=>{
          return  <li onClick={()=>handleCategorie(categorie)} key={index}>{categorie}</li>
        })
          : null
        }
      </ul>
    </div>
  )
}

export default Categories