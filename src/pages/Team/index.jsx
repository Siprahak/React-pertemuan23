import Footer from "../../components/shared/footer"
import Header from "../../components/shared/header"

function Team(){
    return(
        <>
            <div className="container"> 
            <Header/>

            {/*Main*/}
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
               <h1 className="display-4 fw-normal text-body-emphasis">Team NovaTech</h1>
               <p className="fs-5 text-body-secondary">Team NovaTech is a dynamic group of interdisciplinary professionals passionate about building innovative digital solutions that solve real-world problems. With expertise ranging from software engineering to user experience design and data science, NovaTech focuses on creating scalable, user-friendly products that combine cutting-edge technology with elegant design. The team thrives on collaboration, continuous learning, and a drive to push the boundaries of what's possible in tech.</p>
            </div>
         <main>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
               <div className="col">
                  <div className="card mb-4 rounded-3 shadow-sm border-primary">
                     <div className="card-header py-3 text-bg-primary border-primary">
                        <h4 className="my-0 fw-normal">UI/UX Designer</h4>
                     </div>
                     <div className="card-body">
                        <img src="https://media.istockphoto.com/id/1212006375/photo/confident-asian-businesswoman-in-office.jpg?s=612x612&w=0&k=20&c=SEgvQZiWHK1uqefySpyFTJ8oMHpdnWyjkoZymrFUpHA=" alt="Dr. Lillian Cheng" className="card-img-top" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                        <h2 className="card-title pricing-card-title">Dr. Lillian Cheng</h2>
                        <ul className="list-unstyled mt-3 mb-4">
                           <li>Ph.D. in Human-Computer Interaction</li>
                           <li>University of Edinburgh, United Kingdom</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col">
                  <div className="card mb-4 rounded-3 shadow-sm border-primary">
                     <div className="card-header py-3 text-bg-primary border-primary">
                        <h4 className="my-0 fw-normal">Data Analyst</h4>
                     </div>
                     <div className="card-body">
                        <img src="https://media.istockphoto.com/id/1300437846/photo/young-latin-businessman-working-at-his-desk-at-office-in-mexico-city.jpg?s=612x612&w=0&k=20&c=ZFk5RPXcSqBdzyb0SsshZyeb4c53awkh5bCfQzwl_4c=" alt="Marcus Valdez" className="card-img-top" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                        <h2 className="card-title pricing-card-title">Marcus Valdez</h2>
                        <ul className="list-unstyled mt-3 mb-4">
                           <li>M.Sc. in Data Science</li>
                           <li>National University of Singapore</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col">
                  <div className="card mb-4 rounded-3 shadow-sm border-primary">
                     <div className="card-header py-3 text-bg-primary border-primary">
                        <h4 className="my-0 fw-normal">Backend Developer</h4>
                     </div>
                     <div className="card-body">
                        <img src="https://thumbs.dreamstime.com/b/young-male-office-worker-sitting-office-smiling-22049588.jpg" alt="Aiden Brooks" className="card-img-top" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                        <h2 className="card-title pricing-card-title">Aiden Brooks</h2>
                        <ul className="list-unstyled mt-3 mb-4">
                           <li>B.Eng. in Software Engineering</li>
                           <li>University of Toronto, Canada</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </main>

           <Footer/>


            </div>
        </>
    )
}
export default Team