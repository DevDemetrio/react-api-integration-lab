import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller } from "react-hook-form";
import  { type ObjectFormShemaType, ObjectFormShema } from "../../../type/object.form.schema";

export function useObjectForm(){
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
                year:undefined,
                price: undefined,
                cpuModel: "",
                hardDiskSize: ""
            }
        }
    })
    
    function handleSubmitForm(data: ObjectFormShemaType){
        console.log(data)
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