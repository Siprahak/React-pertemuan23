export default function Hero() {
    return(
        <>
        <div className="container my-5">
         <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
               <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Atomic Habits: Tiny Changes, Remarkable Results</h1>
               <p className="lead">Easiest proven way to form good habits and remove bad habits</p>
               <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Add To Wishlist</button> 
               </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg"> <img className="rounded-lg-3" src="https://wafuu.com/cdn/shop/products/atomic-habits-the-life-changing-million-copy-276923.jpg?v=1706142826" alt="" width="720" height="600"/> </div>
         </div>
        </div>
        </>
    )
}