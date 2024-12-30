import { axiosGet, createHeaders } from '@/api/Api.config'
import { getInLS } from '@/app/utils/local-storage-manager'
import axios, { AxiosRequestConfig } from 'axios'
import React, { useEffect, useState } from 'react'

export const TasksinDashboard = () => {
    const [dataTask, setDataTask] = useState([])

    const tokenId = getInLS("token")

    const headers: AxiosRequestConfig = createHeaders('application/json', tokenId)

    const fetchData = async() => {
            try {
                const res = await axios("tasks", headers)
                console.log(res)
            } catch (error) {
                console.log(error)
            }
    }

    useEffect(() => {
        fetchData()
    })

  return (
    <div className="flex items-center gap-2 px-4 mt-[5rem] ">TasksinDashboard</div>
  )
}
