import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { About } from "../Pages/About"
import { Products } from "../Pages/Products"
import { Cart } from "../Pages/Cart"
import { Contact } from "../Pages/Contact"

export const AppRouter=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/contact" element={<Contact/>}/>
            
        </Routes>
        </>
    )

}