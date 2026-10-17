import React from 'react';
import { Link } from 'react-router-dom';


export default function NotFound() {
  return (
    //  <div className="container p-5 mb-5">
    //   <div className="row text-center">
    //     <h1 className="mt-5">404 Not Found</h1>
    //     <p>Sorry, the page you are looking for does not exist.</p>
    //   </div>
    // </div>

  <div className="container">
      <div
        className="row justify-content-center align-items-center text-center"
        style={{ minHeight: "70vh" }} >
        <div className="col-md-8 col-lg-6">

          <h1 className="display-1 fw-bold text-danger">
            404
          </h1>

          <h2 className="fw-semibold mb-3">
            Page Not Found
          </h2>

          <p className="text-secondary mb-4">
            Sorry, the page you're looking for doesn't exist or
            may have been moved.
          </p>

          <Link to="/" className="btn btn-dark px-4 py-2">
            <i className="bi bi-house-door me-2"></i>
            Back to Home
          </Link>

        </div>
      </div>
    </div>

  );
}
