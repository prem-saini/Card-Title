import React from "react"


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="https://jobs.ineuron.ai/images/ineuron-logo.png" alt="" width="100%" height="24" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Search Job</a>
                            </li>


                            <form >
                                <h5 className="po">Are you a recruiter?</h5>

                                <button type="button" className="bt btn-primary">Login</button>



                            </form>


                        </ul>


                    </div>
                </div>
            </nav>





        </>

    )
}
export default Navbar