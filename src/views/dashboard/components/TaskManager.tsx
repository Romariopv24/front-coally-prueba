import React, { useState } from 'react'
import { TasksinDashboard } from './TasksinDashboard'

export const TaskManager = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const items = ["Todas", "Completadas", "Pendientes"] 

  return (
    <div className="flex flex-col gap-5 w-full"> 
      <header className="flex  h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4 mt-[5rem] ">
          <h1 className='text-4xl font-semibold text-gray-800'>
           Tareas de Coally
          </h1>
        </div>
      </header>
      <div className="flex flex-row gap-5 mt-10 px-4 justify-center md:justify-start md:mt-[3rem]">
        {items.map((item, index) => (
          <button
            key={index}
            className={`text-left p-2 text-[14px] ${selectedItem === index ? 'underline underline-offset-8' : ''} md:text-lg sm:text-base`}
            onClick={() => setSelectedItem(index)}
          >
            {item}
          </button>
        ))}
      
        <button className="bg-[#DCFCF1] p-2 rounded md:text-lg sm:text-base">
          Agregar Tarea
        </button>
      </div>
        
        <TasksinDashboard />

    </div>
  )
}
