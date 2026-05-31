import { Subchild } from "./Subchild"

export const Child=({title,description,price})=>{
    return(
        <>
        <div style={{ height: "200px",
            width: "300px",
            border: "solid black",
            padding: "10px",
            margin: "10px",
            justifyContent: "center",
            textAlign: "center",
            borderRadius:"10px" }}>
                <h1>{title}</h1>
                <p>{description}</p>
                <span>{price}</span>
            </div>
        </>
    )
}