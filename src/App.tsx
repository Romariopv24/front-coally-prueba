import { Route, Routes } from "react-router"
import { rootRouters } from "./app/core/rootRouter"

function App() {

  return (
    <Routes>
      <Route path={rootRouters.home.login}  element />
    </Routes>
  )
}

export default App
