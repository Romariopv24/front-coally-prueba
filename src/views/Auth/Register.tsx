/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosPost } from '@/api/Api.config'
import { rootRouters } from '@/app/core/rootRouter'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Label } from '@radix-ui/react-label'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'



export const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()


  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await axiosPost("register", registerData)
      console.log(res)
      if(res.status === 200){
        toast.success("Registro exitoso")
        navigate(rootRouters.home.login)
      }
    } catch (error: any) {
      console.log(error.response.data.errors)
      error.response.data.errors.map((err: string) => toast.error(err))
    }

  }


  return (
<div className={cn("flex flex-col gap-6 h-screen w-screen justify-center items-center")}>
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center my-5">Registro</CardTitle>
        <CardDescription>
        Crea una cuenta para acceder a todas las funcionalidades de nuestra plataforma.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
          <div className="grid gap-2">
              <Label htmlFor="email">User Name</Label>
              <Input
                id="username"
                type="text"
                placeholder="Coally Test"
                onChange={(e) => setRegisterData({...registerData, username: e.target.value})}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Correo</Label>
              <Input
                id="email"
                type="email"
                placeholder="coally@coally.com"
                onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ?  eyeSlash : eye }
                </button>
              </div>
              <Input id="password" type={showPassword ? "text" : "password"}
              onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ?  eyeSlash : eye }
                </button>
              </div>
              <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} 
              onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
              />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
           
          </div>
          <div className="mt-4 text-center text-sm">
            Ya tienes una cuenta?{" "}
            <Link to={rootRouters.home.login} className="underline underline-offset-4">
              Ingresa
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
  )
}


const eyeSlash =  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>

const eye = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>