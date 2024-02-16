import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return( 
  <>
    <h2 className="w-auto px-6 text-center">
    For a demo please use:
    <br/>
    <br/>
     Email: demodemo12357@gmail.com
     <br/>
     Password: demo12357
    </h2>
  <SignIn />
  
 
  </>
  )
}