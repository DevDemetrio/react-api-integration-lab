import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller } from "react-hook-form";
import  { ObjectFormShema, type ObjectFormShemaType } from "../../../type/object.form.schema";
import { useObject } from "../../../hook/useObject";
import { ObjectPayloadShema } from "../../../type/object.payload.schema";



export function useObjectForm(){

    const {postObject} = useObject()
    const {
        control,
        handleSubmit,
        register,
        formState:{errors}
       } = useForm<ObjectFormShemaType>({
        resolver: zodResolver(ObjectFormShema),
        defaultValues:{
            name: "",
            data: {
                year:"",
                price: "",
                cpuModel: "",
                hardDiskSize: ""
            }
        }
    })
    
    function handleSubmitForm(data: ObjectFormShemaType){
        //console.log(data)
        const payload = ObjectPayloadShema.parse({
            name: data.name,
            data: {
                year: Number(data.data.year),
                price: Number(data.data.price),
                cpuModel: data.data.cpuModel,
                hardDiskSize: data.data.hardDiskSize
            }
        })
        console.log(payload)
        postObject(payload)
    }


    return{
        Controller,
        control,
        handleSubmit,
        register,
        errors,
        handleSubmitForm

    }
}

// {
//     "name": "Apple MacBook Pro 16",
//     "data": {
//       "year": 2019,
//       "price": 1849.99,
//       "CPU model": "Intel Core i9",
//       "Hard disk size": "1 TB"
//     }
//   }