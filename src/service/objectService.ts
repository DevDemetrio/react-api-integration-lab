
import ApiClient from "../api/apiClient";
import { ObjectPayloadShema, type ObjectPayloadType } from "../type/object.payload.schema";
import { ObjectResponseListShema, ObjectResponseShema} from "../type/object.response.shema";


export class PostService extends ApiClient {
    async getAll(){
        const res = await this.api.get("/objects");
        return ObjectResponseListShema.parse(res.data)
    }

    async postObject(payload: ObjectPayloadType){
        const res = await this.api.post("/objects", payload);
        return ObjectPayloadShema.parse(res.data)
    }

    async objectByid(id: string){
        const res = await this.api.get(`/objects/${id}`)
        return ObjectResponseShema.parse(res.data)
    }
}


