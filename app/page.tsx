import PatientForm from "@/components/Forms/PatientForm";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex h-screen max-h-screen" >

       {/* TODO OTP  Verification | Passkey Model */}

       <section className=" remove-scrollbar container my-auto">
        <div className="sub-container  max-w-[496px] " >
        <div className="w-40 h-20 flex">
          <Image 
           src="/assets/icons/Logo.svg"
           height={1000}
           width={1000}
           quality={1000}
           alt="patient"
           className="mb-12 h-10 w-fit rounded-r-3xl "
           />
          <h3 className=" w-24 h-7 flex  items-baseline  text-lg mx-3 mt-2 font-sans font-black " >Chikitsalaya</h3>
          </div>
          <PatientForm />   
           <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 Chikitsalaya
            </p>
            <Link href="/?admin=true" className="text-green-500">      
            Admin
            </Link>

           </div>
        </div>

       </section>
        
      <Image
       src="/assets/images/onboarding-img.png"
       height={1000}
       width={1000}
       alt="patient"
       className="side-img max-w-[50%] object-cover"
      />
    </div>
   
  );
}
