import { createContext, useContext, type ReactNode } from "react";
import { PostService } from "../service/objectService";
import type { ObjectResponseList } from "../type/object.response.shema";
import type { ObjectPayloadType } from "../type/object.payload.schema";
//simport { getAlertTitleUtilityClass } from "@mui/material";



interface ProvideProps {
    children: ReactNode;
}

const service = new PostService()

export interface PostContextData {
    getAll:() =>Promise<ObjectResponseList>
    postObject:(payload: ObjectPayloadType)=> Promise<ObjectPayloadType>
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

      const postObject = async (payload: ObjectPayloadType) => {

        try{
          const res = await service.postObject(payload);
          return res
        }catch(err){
          console.log(err)
          throw err;
        }
      }

      return (
        <PostContext.Provider value={{ getAll, postObject }}>
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