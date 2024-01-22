import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import{signIn} from "next-auth/react"

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
      <Card className='w-[400px] h-[450px]'>
        <CardHeader>
          <CardTitle>
            login
            <CardDescription>
              Preencha seus dados .
            </CardDescription>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-1">
            <Label>
              EMAIL 

            </Label>
            <Input type={"email"} placeholder='seuemail@gmail.com'/>
            <Input type={"password"} placeholder='**************'/>
          </div>

          <Button className='w-full'>
            Entrar
          </Button>
          <Button onClick={() => signIn ('google', {
            callbackUrl:"/home"
          })} className=' mt-2 w-full' variant={"outline"}><FcGoogle fontSize={20}/>
            Entrar com o google
          </Button>
        
        </CardContent>
      </Card>
   
    
      </div>
  )
}
