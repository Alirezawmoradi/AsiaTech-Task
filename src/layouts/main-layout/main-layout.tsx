import {Outlet} from "react-router-dom";
import {Header} from "../../components/header/header.tsx";
import {Footer} from "../../components/footer/footer.tsx";

export const MainLayout = () => {
    return (
        <div className='grid grid-rows-[80px_1fr_auto] min-h-screen bg-gray-200 text-gray-600'>
            <Header/>
                <main>
                    <Outlet/>
                </main>
            <Footer/>
        </div>
    )
}