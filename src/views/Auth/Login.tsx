import { rootRouters } from '@/app/core/rootRouter'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Label } from '@radix-ui/react-label'
import React, { useState } from 'react'
import { Link } from 'react-router'

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  return (
    <div className={cn("flex flex-col gap-6 h-screen w-screen justify-center items-center")}>
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center my-5">Ingresa</CardTitle>
        <CardDescription>
        Ingresa tu correo electrónico y contraseña para acceder a tu cuenta.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Correo</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
               
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
           
          </div>
          <div className="mt-4 text-center text-sm">
           No tienes una cuenta?{" "}
            <Link to={rootRouters.home.register} className="underline underline-offset-4">
              Registrate
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
  )
}
