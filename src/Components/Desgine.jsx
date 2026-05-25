import imag from "../assets/img1.jpg"

export const Desgine = () => {
    let image = "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fHw%3D"
    let internal = {
        head: {
            color: "red",
            backgroundColor: "blue",
            padding: "15px"

        }
    }
    return (
        <>
            <center>
                <h1>Multimedia and Styling</h1>
                {/* <img src="https://cdn.dribbble.com/userupload/10619260/file/original-589221ed5e33f86e8ace22e9e4ed863b.jpg?resize=752x&vertical=center" alt="" height={280}/>
            <img src={image} alt="" height={280}/>
            <img src={imag} alt="" height={280}/>
            <img src="./img2.jpg    " alt="" height={280} /> */}
            </center>
            <center>
                <h2 style={{ color: "blue", backgroundColor: "yellow", padding: "15px" }}>Inline Css</h2>
                <h2 style={internal.head}>Internal Css</h2>
                <h2 className="heading">External Css</h2>
            </center>
            <center>
                <div className="card" style={{width: "18rem"}}>
                    <img src="./img2.jpg" className="card-img-top" alt="..." height={200}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </center>
        </>
    )
}