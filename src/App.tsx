import { Route, Routes } from "react-router"
import { Login } from "./views/Auth/Login"
import { rootRouters } from "./app/core/rootRouter"
import { Register } from "./views/Auth/Register"
import { RootState } from "./store/store"
import { useAppSelector } from "./app/hooks/reduxHooks"
import { Dashboard } from "./views/dashboard/Dashboard"
import { getInLS } from "./app/utils/local-storage-manager"

function App() {
  const token = getInLS("token")

  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path={rootRouters.home.register} element={<Register />} />
      {
        token.length > 0 && <Route path={rootRouters.dashboard.index} element={<Dashboard />} />
      }
    </Routes>
  )
}

export default App
