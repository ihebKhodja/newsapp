import { createContext, useReducer } from "react"

export const ArticlesContext = createContext('')

const articlesReducer=(state, action)=>{
    switch(action.type){
        case 'get_all':
            return {
                    ...state, // Spread the current state to maintain other state properties
                    articlesList: action.payload.articlesList, // affecting the retrieved articlesList 
                    category: action.payload.category // affecting the retrieved category
                };
    
        default:
            return {state}
    }
}
// eslint-disable-next-line react/prop-types
export const ArticlesContextProvider = ({children})=>{
    const [state, dispatch] =useReducer(articlesReducer,
       { articlesList:[], category:''}
        )
        return (                                        
            <ArticlesContext.Provider value={{...state, dispatch}}>
                {children}
            </ArticlesContext.Provider>
        );  
}