import React from 'react'
import { SidebarDashboard } from './components/SidebarDashboard'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { SidebarContentDash } from './components/SidebarContentDash'
import { TaskManager } from './components/TaskManager'

export const Dashboard = () => {
    
  return (
    <SidebarProvider>
    <SidebarTrigger />
    <SidebarContentDash />
    <TaskManager />
    </SidebarProvider>
  )
}
