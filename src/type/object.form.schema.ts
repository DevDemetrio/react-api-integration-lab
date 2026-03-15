
import {z} from "zod"


const ObjectDatas = z.object({
    year: z.coerce.number(),
    price: z.coerce.number(),
    cpuModel: z.string(),
    hardDiskSize: z.string()
})




export const ObjectFormShema = z.object({
    name: z.string(),
    data: ObjectDatas
})


export type ObjectFormShemaType = z.input <typeof ObjectFormShema>


