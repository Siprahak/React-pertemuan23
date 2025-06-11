import Footer from "../../components/shared/footer"
import Header from "../../components/shared/header"

function Contact() {
    return (
        <>
        <div className="container"> 
            <Header/>

            {/*Main*/}
            <div className="text-secondary px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold text-black mb-4">Contact Us</h1>
                    <div className="col-lg-9 mx-auto">
                        <p className="fs-5 mb-4">Thank you for your interest in Team NovaTech. We welcome opportunities for collaboration, partnerships, and professional engagement related to our online bookstore platform. Our team brings together expertise in software engineering, data analytics, and user experience design to create innovative and scalable digital solutions. For business inquiries, proposals, or partnership opportunities, please reach out to us via the contact form or email provided. We look forward to connecting with you.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Email</button>
                            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Linkedin</button> 
                            <button type="button" className="btn btn-outline-info btn-lg px-4 fw-bold">Phone</button> 
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>


            </div>
        </>
    )
}

export default Contact