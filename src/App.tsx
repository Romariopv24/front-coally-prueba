import { Route, Routes } from "react-router"
import { Login } from "./views/Auth/Login"
import { rootRouters } from "./app/core/rootRouter"
import { Register } from "./views/Auth/Register"

function App() {

  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path={rootRouters.home.register} element={<Register />} />

    </Routes>
  )
}

export default App
