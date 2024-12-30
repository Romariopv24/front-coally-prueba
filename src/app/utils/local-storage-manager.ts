
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveInLS = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
  }
  
  export const getInLS = (key: string) => {
    const result = localStorage.getItem(key)
    return !!result && JSON.parse(result)
  }
  
  export const removeInLS = (key: string) => localStorage.removeItem(key)
  
  export const clearLS = () => localStorage.clear()
  