import { useQuery } from "@tanstack/react-query";
import { useObject } from "../../../hook/useObject";
import type { ObjectResponseList } from "../../../type/object.response.shema";
import { useNavigate } from "react-router-dom";

export function useListObject(){
    const navigate =  useNavigate()
    const {getAll, objectByid} = useObject();

    function hanedleEdit(id: string){
        navigate(`/objects/${id}`)
        console.log(objectByid(id))
    }

    const {data: objectList} = useQuery<ObjectResponseList>({
        queryKey: ["objectList"],
        queryFn:getAll,
        staleTime: Infinity,
    })

    return{
        objectList,
        hanedleEdit
    }
}


