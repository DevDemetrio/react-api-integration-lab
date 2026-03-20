
import {z} from "zod"


const ObjectDatas = z.object({
    year: z.string().optional(), // 👈 vem da API como string
    price: z.string().optional(),
    cpuModel: z.string().optional(),
    hardDiskSize: z.string().optional()
  }).nullable();

export const ObjectResponseShema = z.object({
id: z.string(),
name: z.string(),
data: ObjectDatas
})


export const ObjectResponseListShema = z.array(ObjectResponseShema)
export type ObjectResponseList = z.output<typeof ObjectResponseListShema>
 
export type ObjectById = z.output<typeof ObjectResponseShema>

