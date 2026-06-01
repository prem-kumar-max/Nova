import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { AppRouter } from "../RouterDom/AppRouter"
export const MainLayout=()=>{
    return(
        <>
        <Header/>
        <AppRouter/>
        <Footer/>
        </>
    )
}