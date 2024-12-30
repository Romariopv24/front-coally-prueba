import React, { useState } from 'react'

export const TaskManager = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const items = ["All", "Completed", "Pending"] 

  return (
    <div className="flex flex-col gap-5 w-80"> 
      <header className="flex  h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4 mt-[5rem] ">
          <h1 className='text-2xl font-semibold text-gray-800'>
            Building Your Application
          </h1>
        </div>
      </header>
      <div className="flex flex-row gap-5 mt-4 px-4 justify-center md:justify-start">
        {items.map((item, index) => (
          <button
            key={index}
            className={`text-left p-2 text-xl ${selectedItem === index ? 'underline underline-offset-8' : ''}`}
            onClick={() => setSelectedItem(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}
