interface envKeywords {
    [key: string]: string
}

export const envInfo: envKeywords = {
    BASE_URL: import.meta.env.VITE_BASE_URL,
}