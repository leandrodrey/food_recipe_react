import {Outlet} from "react-router-dom";

const MainLayout = () => {

    return (
        <>
            <main className="text-sm flex min-h-screen flex-col items-center p-4">
                <div className="w-1/3">
                    <Outlet/>
                </div>
            </main>
        </>
    )

}

export default MainLayout
