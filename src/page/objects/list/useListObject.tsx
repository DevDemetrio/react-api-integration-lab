import { useQuery } from "@tanstack/react-query";
import { useObject } from "../../../hook/useObject";
import type { ObjectResponseList } from "../../../type/object.response.shema";

export function useListObject(){
    const {getAll} = useObject();

    const {data: objectList} = useQuery<ObjectResponseList>({
        queryKey: ["objectList"],
        queryFn:getAll,
        staleTime: Infinity,
    })

    return{
        objectList
    }
}


