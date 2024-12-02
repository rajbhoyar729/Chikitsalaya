import React from 'react'
import 
{FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import{Control} from "react-hook-form"
import { Input } from "@/components/ui/input"
import { FormFieldType } from '../Forms/PatientForm'
import { Label } from '@radix-ui/react-label'

interface CustomProps{
    control: Control<any>,
    feildType: FormFieldType,
    name : string,
    label? : string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?:string,
    disable?:boolean,
    dateFormat?: string,
    showTimeSelect?:boolean,
    children?:React.ReactNode,
    renderSkeleton?: (feild:any) => React.ReactNode,

}

const CustomeFormFeild = ( {control , feildType, name, label}: CustomProps) =>{
  return (
<FormField
    control={control}
    name={name}
    render={({ field }) => (
    <FormItem className="flex-1">
        {feildType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
        )
        
        }

    </FormItem>
    )}
  />
  )
}

export default CustomeFormFeild