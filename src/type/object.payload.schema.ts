
import {z} from "zod"


const ObjectDatas = z.object({
    year: z.number(),
    price: z.number(),
    cpuModel: z.string(),
    hardDiskSize: z.string()
})




export const ObjectPayloadShema = z.object({
    name: z.string(),
    data: ObjectDatas
})

export type ObjectPayloadType = z.output<typeof ObjectPayloadShema>



