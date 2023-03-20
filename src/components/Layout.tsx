import { Outlet } from "react-router-dom"
import NavBarComponent from "./NavBarComponent";

const Layout = () => {
    return (
        <main className="App">
            <NavBarComponent />
            <Outlet />
        </main>
    )
}

export default Layout;