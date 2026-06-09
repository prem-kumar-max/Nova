import { useEffect, useState } from "react"

export const ProductList = () => {
    let [products,setProducts]=useState([])
    
    useEffect(()=>{
        async function apiData() {
            let a=fetch("https://dummyjson.com/products")
            let b= await a;
            let {products}=await b.json()
            console.log(products)
            setProducts(products)
        }
        apiData()
    },[])
    return (
        <>
        <center><h1 className="mb-3 mt-3">Products Data</h1></center>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            {
                products.map((item)=>(
                    <div style={{width:"250px",border:"2px solid",borderRadius:"10px",padding:"8px",margin:"20px",textAlign:"center"}}>
                          <img src={item.thumbnail} alt="" height={150}/>
                          <h1>{item.title}</h1>
                          <p>{item.description}</p>
                          <mark>{item.price}</mark>
                    </div>
                ))
            }
        </div>
        </>
    )
}