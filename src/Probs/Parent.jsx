import { products } from "../Utilities/Data"
import { Child } from "./Child"

export const Parent =()=>{
        return(
        <>
        <center>
            <h1>Products</h1>
        </center>
        <div className="m-4" style={{display:"flex",flexWrap:'wrap',justifyContent:'center'}}>
            {
                products.map((item)=>(
                    <Child title={item.title} description={item.description} price={item.price}/>
                ))
            }

        </div>
        </>
    )
}