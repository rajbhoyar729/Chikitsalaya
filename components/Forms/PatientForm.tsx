"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form, 
} from "@/components/ui/form"
import CustomeFormFeild from "../ui/CustomeFormFeild"

export enum FormFieldType{
  INPUT = 'input',
  TEXTAREA ='textarea',
  PHONE_INPUT ='phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON ='skeleton'
}
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})



const PatientForm = () => {
 
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
       
        console.log(values)
      }
 return(
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1 ">
        <section>
          <h1 className="header">
            Hi there 👋  </h1>
            <p className=" text-dark-700 ">Schedule Your first appointment. </p>
        </section>

         <CustomeFormFeild
         feildType = {FormFieldType.INPUT}
         control = {form.control}
         name = "name"
         label=" Full name"
         placeholder="John Doe"
         iconSrc ="/Assets/icons/user.svg"
         iconAlt="user"
         />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
   
 )

}

export default PatientForm