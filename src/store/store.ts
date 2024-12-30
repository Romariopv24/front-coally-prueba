/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import resetMiddleware from "./resetRedux"
import { authReducer } from "./slice/auth.slice"

const appReducer = combineReducers<Record<string, any>>({
    auth: authReducer,
})

const rootReducer = (state: any, action: any) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }
  return appReducer(state, action)
}


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(resetMiddleware),
  })

  export type AppDispatch = typeof store.dispatch
  export type RootState = ReturnType<typeof store.getState>