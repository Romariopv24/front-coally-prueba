/* eslint-disable @typescript-eslint/no-explicit-any */
import { envInfo } from "@/app/utils/env.keywords";
import { getValidationError, getValidationErrors } from "@/app/utils/get-validation-errors";
import { getInLS } from "@/app/utils/local-storage-manager";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from "axios";
import { toast } from "react-toastify";

const { BASE_URL } = envInfo 

const axiosConfig: CreateAxiosDefaults = {
    baseURL: BASE_URL,
    responseType: 'json',
    // timeout: 10000,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Origin': true,
      Pragma: 'no-cache',
      Accept: 'application/json',
    },
  }
  
  const fetcher: AxiosInstance = axios.create(axiosConfig)

  fetcher.interceptors.response.use(
    (response: AxiosResponse) => {
      return response
    },
    (error: AxiosError) => {
      const endpoint: string = error.config?.url ?? ''
      const errorStatus: number = error.response?.status ?? 0
      const errorData: { [key: string]: any } = error.response?.data ?? {}
  
      const errorMessage: string =
        getValidationErrors(endpoint, errorStatus, errorData) ?? getValidationError(error.code)
      toast.error(errorMessage)
  
      return Promise.reject(error)
    }
  )

  export const axiosGet = async (url: string, headers?: any) => {
    const response = await fetcher.get(url, headers)
    return response
  }
  
  export const axiosPost = async (url: string, data: any, headers?: any) => {
    const response = await fetcher.post(url, data, headers)
    return response
  }
  
  export const axiosPut = async (url: string, data: any, headers?: any) => {
    const response = await fetcher.put(url, data, headers)
    return response
  }

    export const axiosDelete = async (url: string, headers?: any) => {
        const response = await fetcher.delete(url, headers)
        return response
    }

  export interface ReqHeaders {
    headers: {
      Authorization: string
      'Content-Type'?: 'application/json' | 'multipart/form-data'
    }
  }

  export function createHeaders(
    contentType?: 'application/json' | 'multipart/form-data',
    tokenId?: string
  ): AxiosRequestConfig {
    const sessionToken: string = getInLS('sessionToken') ?? tokenId
  
    const headers: ReqHeaders = {
      headers: { Authorization: `Bearer ${sessionToken}` },
    }
  
    if (contentType) {
      headers.headers['Content-Type'] = contentType
    } else {
      headers.headers['Content-Type'] = 'application/json'
    }
  
    return headers
  }
  