import {Outlet} from "react-router-dom";
import {Header} from "../../components/header";
import {Footer} from "../../components/footer";

export const MainLayout = () => {
    return (
        <div className='grid grid-rows-[80px_1fr_auto] min-h-screen bg-gray-900 text-gray-600'>
            <Header/>
                <main>
                    <Outlet/>
                </main>
            <Footer/>
        </div>
    )
}