
import { z} from "zod"


const ObjectDatas = z.object({
    year: z.number().optional(),
    price: z.number().optional(),
    cpuModel: z.string().optional(),
    hardDiskSize: z.string().optional()
}).nullable();


export const ObjectPayloadShema = z.object({
    name: z.string(),
    data: ObjectDatas
})

export type ObjectPayloadType = z.output<typeof ObjectPayloadShema>



