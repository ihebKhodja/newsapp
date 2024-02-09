import { useNavigate } from 'react-router-dom'
import '../styles/_Navbar.scss'
import { useArticles } from '../hooks/useArticles'

const Navbar = () => {
    const {getArticles}=useArticles()
    const navigate= useNavigate()
  const handleHome= async()=>{
        navigate('/')
        await getArticles(); 
    }
  return (
    <nav>
      <a onClick={handleHome}>
        Today&apos;s News
      </a>
    </nav>
  )
}

export default Navbar