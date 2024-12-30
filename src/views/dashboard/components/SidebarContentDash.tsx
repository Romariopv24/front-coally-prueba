import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton , Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar'
import coallyImage from '@/assets/coally.jpg'
import { axiosPost } from '@/api/Api.config'
import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '@/app/hooks/reduxHooks'
import { authActions } from '@/store/slice/auth.slice'
import { toast } from 'react-toastify'
import { clearLS } from '@/app/utils/local-storage-manager'
import { RootState } from '@/store/store'

export const SidebarContentDash = () => {
    const { username } = useAppSelector((state: RootState) => state.auth)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const items = [
        {
          title: "Home",
          url: "#",
          icon: Home,
        },
        {
          title: "Inbox",
          url: "#",
          icon: Inbox,
        },
        {
          title: "Calendar",
          url: "#",
          icon: Calendar,
        },
      ]

     const logOut = async () => {
      try {
        const res = await axiosPost('logout', {})
        if(res.status === 200) {
          navigate('/')
          dispatch(authActions.clearAuthData())
          toast.success("Sesión cerrada")
          clearLS()
        }
      } catch (error) {
        console.log(error)
        toast.error("Error al cerrar sesión")
      }
     }


  return (
    <Sidebar>
 <SidebarHeader>
        <div className="flex flex-col items-center">
          <Avatar className="w-24 h-24">
            <AvatarImage src={coallyImage} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="mt-2 text-lg font-semibold">Bienvenido {username}!</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="flex flex-col text-center flex-1">
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2 text-lg">
                      <span className="h-6 w-6">{item.icon}</span>
                      <span className="text-[15px]">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          </div>
        </SidebarGroup>
          <div className="mt-auto mb-10">
              <SidebarMenuButton asChild onClick={logOut}>
                <a href="#" className="flex items-center gap-2 text-lg">
                  <span className="h-6 w-6">{SignOut}</span>
                  <span className="text-[15px]">Salir</span>
                </a>
              </SidebarMenuButton>
          </div>
      </SidebarContent>
    </Sidebar>
  )
}


const Home = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

const Inbox = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
</svg>


const Calendar = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>


const SignOut = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
</svg>
