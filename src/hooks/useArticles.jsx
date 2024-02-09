import { ArticlesContext } from "../contexts/ArticlesContext";
import { useContext, useState } from "react";

export const useArticles =()=>{
    const context = useContext(ArticlesContext)
    if(!context){
        throw Error('useArticles must be inside ArticlesContextProvider')
    }else{
        const [error, setError]=useState()
        const {dispatch}=useContext(ArticlesContext)

        const getArticles=async()=>{
          try {
                const response = await fetch('http://127.0.0.1:8000/api/');
                const data = await response.json()
                    dispatch({type:'get_all', payload:{articlesList:data, 
                    'category':'Top headlines'
                }})           
             } catch (error) {
                setError(error)
                // Handle any errors, such as by logging or displaying a message
                console.error('Error fetching data:', error);
            }
        }
        const getArticlesByFilter =async(type, filter)=>{
          try {
                const url=`http://127.0.0.1:8000/api/filter/?${type}=${filter}`
                const response = await fetch(url);
                let data = await response.json();
                
                if(type==='q'){    
                    data = Array.isArray(data.articles) ? data.articles : []
                    filter=`Results for ${filter}`
                }
                dispatch({type:'get_all', payload:{articlesList:data, 
                    'category':filter
                }})
            } catch (error) {
                setError(error)
                // Handle any errors, such as by logging or displaying a message
                console.error('Error fetching data:', error);
            }
        }
       

        return {getArticles, getArticlesByFilter , error}
    }
}