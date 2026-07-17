import axios from "axios"
import { use, useEffect, useState } from "react"

export const ProductList = () => {
    let [products, setProducts] = useState([])
    let [categoryList, setCategoryList] = useState([])
    let [category, setCategory] = useState("")
    let [search, setSearch] = useState("")
    let [page,setPage]= useState(1)
    let [btns,setBtns]= useState(0)
    const perPage=10

    useEffect(() => {
        async function categoryData() {
            let { data } = await axios.get("https://dummyjson.com/products/category-List")
            setCategoryList(data)
            console.log(data)

        }
        categoryData()
    }, [])

    // useEffect(() => {
    //     async function apiData() {
    //         let a = fetch("https://dummyjson.com/products")
    //         let b = await a;
    //         let { products } = await b.json()
    //         console.log(products)
    //         setProducts(products)
    //     }
    //     apiData()
    // }, [])
    //     let [products,setProducts]=useState
    // useEffect(()=>{
    //     async function apiData(){
    //         let a=fetch("https://dummyjson.com/products")
    //         let b= await a
    //         let {products}=await b.json()
    //         console.log(products)
    //         setProducts(products)
    //     }
    //     apiData()
    // },[])
    useEffect(() => {
        async function threeApi() {
            let api;
            if (category) {
                api = `https://dummyjson.com/products/category/${category}`
            }
            else if (search) {
                api = `https://dummyjson.com/products/search?q=${search}`
            }
            else {
                api = `https://dummyjson.com/products`
            }
            let { data } = await axios.get(api)

            let allProducts= data.products || []
            setBtns(allProducts.length)

            let pagination = allProducts.slice((page-1)*perPage,page*perPage)
            setProducts(pagination)
        }
        threeApi()

    }, [category, search,page])

let  viewButtons=Math.ceil(btns/perPage)

    return (
        <>
            <center><h1 className="mb-3 mt-3">Products Data</h1></center>
            <div className="container mt-3">
                <div className="row justify-content-between">
                    <div className="col-5">
                        <input type="text" className="form-control" placeholder="Search product.."
                            onChange={
                                (e) => {
                                    setSearch(e.target.value)
                                    setCategory("")
                                    setPage(1)
                                }
                            }
                        />
                    </div>
                    <div className="col-5">
                        <select name="" id="" className="form-control"
                            onChange={
                                (e) => {
                                    setCategory(e.target.value)
                                    setSearch("")
                                    setPage(1)
                                }
                            }
                        >
                            <option value="ALL CATEGORIES">ALL CATEGORIES</option>
                            {
                                categoryList.map((item, i) => (
                                    <option key={i} value={item}>{item}</option>
                                ))
                            }</select>

                    </div>

                </div>

            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {
                    products.map((item) => (
                        <div className="product-card" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} height={150} />
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <mark>{item.price}</mark>
                        </div>
                    ))
                }
            </div>
            <div className="text-center">
                {
                    viewButtons>0 && Array.from({length:viewButtons},(_,i)=>i+1).map((btn)=>(
                        <button className="btn btn-primary m-2" onClick={()=>setPage(btn)}>{btn}</button>
                    ))
                }

            </div>
        </>
    )
}