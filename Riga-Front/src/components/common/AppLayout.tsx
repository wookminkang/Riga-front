import { AppHeader } from "./AppHeader"
import { AppFooter } from "./AppFooter"
import { Outlet } from "react-router"

function AppLayout() {
  return (
    <div>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  )
}

export { AppLayout }
