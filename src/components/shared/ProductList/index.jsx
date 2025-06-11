import React from 'react';
import booksData from '../../Utils/booksData';

export default function ProductList() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Discover the most popular books readers can’t put down...
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">Views</a>
              <a href="#" className="btn btn-secondary my-2">Other Books</a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {booksData.map((book) => (
              <div className="col" key={book.id}>
                <div className="card h-100 d-flex flex-column shadow-sm">
                  <img src={book.gambar} alt={book.nama} className="card-img-top" height="350" />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1">
                      <strong>{book.nama}</strong> by {book.penulis} — {book.deskripsi}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Add To Wishlist</button>
                      </div>
                      <small className="text-body-secondary">20 Reviews</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
