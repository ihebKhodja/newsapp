import { ArticlesContext } from "../contexts/ArticlesContext";
import { useContext } from "react";

export const useArticles =()=>{
    const context = useContext(ArticlesContext)
    if(!context){ // checking the component is inside the provider
        throw Error('useArticles must be inside ArticlesContextProvider')
    }else{

        
        const {dispatch}=useContext(ArticlesContext)
        
        const getArticles=async()=>{ // fetching all articles 
          try {
                const response = await fetch(import.meta.env.VITE_API_URL);
                const data = await response.json()
                    dispatch({type:'get_all', payload:{articlesList:data, 
                    'category':'Top headlines' // add this value for category to display in main page
                }})           
             } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        const getArticlesByFilter =async(type, filter)=>{ // fetching data by filter category or query search
          try {
                const url=`${import.meta.env.VITE_API_URL}filter/?${type}=${filter}`

                const response = await fetch(url);
                let data = await response.json();

                if(type==='q'){    // in case of query search 
                    data = Array.isArray(data.articles) ? data.articles : [] // readibilty of data 
                    filter=`Results for ${filter}`
                }
                dispatch({type:'get_all', payload:{articlesList:data, 
                    'category':filter
                }})
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
       

        return {getArticles, getArticlesByFilter }
    }
}