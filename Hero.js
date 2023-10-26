import logo from '../logo.svg'

function Hero() {
    return(
        <>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={logo} alt="" className="img-fluid " />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center ">
                    <h1>Ritik</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;