
import {z} from "zod"


const ObjectDatas = z.record(z.string(), z.unknown()).nullable();

export const ObjectResponseShema = z.object({
id: z.string(),
name: z.string(),
data: ObjectDatas
})


export const ObjectResponseListShema = z.array(ObjectResponseShema)

export type ObjectResponseList = z.output<typeof ObjectResponseListShema>




