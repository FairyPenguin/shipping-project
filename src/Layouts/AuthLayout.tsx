import { Outlet } from "react-router-dom"
import MainLayout from "../components/UiComponents/MainLayout/MainLayout"

function AuthLayout() {

    return (
        <>
            {/* any component like navbar or footer */}
            <MainLayout>
                <Outlet />
            </MainLayout>

        </>
    )
}

export default AuthLayout