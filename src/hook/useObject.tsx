import { createContext, useContext, type ReactNode } from "react";
import { PostService } from "../service/objectService";
import type { ObjectResponseList } from "../type/object.response.shema";
//simport { getAlertTitleUtilityClass } from "@mui/material";



interface ProvideProps {
    children: ReactNode;
}

const service = new PostService()

export interface PostContextData {
    getAll:() =>Promise<ObjectResponseList>
}

const PostContext = createContext<PostContextData>(
    {} as PostContextData
)


export const PostProvider = ({children}: ProvideProps) =>{

    const getAll = async () => {
      try{
        const res = await service.getAll();
        return res
      }catch(err){
        console.log(err)
        throw err;
      }
      }

      return (
        <PostContext.Provider value={{ getAll }}>
          {children}
        </PostContext.Provider>
      );   
}


export const useObject = () => {
    const context = useContext(PostContext);
  
    if (!context) {
      throw new Error("usePost deve ser usado dentro do PostProvider");
    }
  
    return context;
  };