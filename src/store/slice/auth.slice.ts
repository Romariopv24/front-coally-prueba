import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
    id: string
    username: string
    email: string
    createdAt: string
    updatedAt: string
    token: string
  }

const initialState: AuthState = {
   id: "",
   username: "",
   email: "",
   createdAt: "",
   updatedAt: "",
   token: "",
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setAuthData: (state, action: PayloadAction<AuthState>) => {
        state.id = action.payload.id
        state.username = action.payload.username
        state.email = action.payload.email
        state.createdAt = action.payload.createdAt
        state.updatedAt = action.payload.updatedAt
        state.token = action.payload.token
      },
      clearAuthData: (state) => {
        state.id = ""
        state.username = ""
        state.email = ""
        state.createdAt = ""
        state.updatedAt = ""
        state.token = ""
      },
    },
  })
  
  export const authActions = authSlice.actions
  export const authReducer = authSlice.reducer