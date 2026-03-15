

import { useListObject } from "./useListObject"



export function ListObject (){
    const {objectList} = useListObject()

    return(
   <>
    {
       <ul>
       {objectList?.map((item) => (
         <li key={item.id}>{item.name}</li>
       ))}
     </ul>
    }
   
   </>
    )
}