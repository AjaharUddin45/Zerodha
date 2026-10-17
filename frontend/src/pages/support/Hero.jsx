import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="supportHero">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center" id="supportWrapper">
          <h4 className="m-0">Support Portal</h4>
          <a href="#">Track Tickets</a>
        </div>

        <div className="row" id="supportBody">
          <div className="col-12 col-md-7">
            <h1 className="fs-3 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              type="text"
              className="support-search"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
            />
            <div className="quick-links">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>

          <div className="col-12 col-md-5">
            <h1 className="fs-3 mb-3">Featured</h1>
            <ol className="featured-list">
              <li>
                <a href="#">Current Takeovers and Delisting - January 2024</a>
              </li>
              <li>
                <a href="#">Latest Intraday leverages - MIS &amp; CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}