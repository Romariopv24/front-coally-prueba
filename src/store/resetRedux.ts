
import { createAction, Middleware } from "@reduxjs/toolkit"

export const resetState = createAction("resetState")

const resetMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  if (resetState.match(action)) {
    storeAPI.dispatch({ type: "RESET" })
  }
  return next(action)
}

export default resetMiddleware
