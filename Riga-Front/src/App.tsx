import { Routes, Route, BrowserRouter } from "react-router"
import { AppLayout } from "@/components/common"
import { Home } from "@/pages/Home"
import { SignIn } from "@/pages/sign-in"
import { SignUp } from "@/pages/sign-up"
import { Resources } from "@/pages/resources"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/resources" element={<Resources />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
