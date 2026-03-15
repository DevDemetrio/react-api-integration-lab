import { useQuery } from "@tanstack/react-query";
import { useObject } from "../../../hook/useObject";

export function useListObject(){
    const {getAll} = useObject();

    const {data: objectList} = useQuery({
        queryKey: ["objectList"],
        queryFn:getAll,
        staleTime: Infinity,
    })


    return{
        objectList
    }
}


