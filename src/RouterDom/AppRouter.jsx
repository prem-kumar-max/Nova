import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { About } from "../Pages/About"
// import { Products } from "../Pages/Products"
import { Cart } from "../Pages/Cart"
import { Contact } from "../Pages/Contact"
import { ProductList } from "../Features/ProductsList/ProductsList"

export const AppRouter=()=>{
    return(
        <>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/" element={<Contact/>}/>
            
        </Routes>
        </>
    )

}