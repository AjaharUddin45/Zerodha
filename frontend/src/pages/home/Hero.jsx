import React from 'react'

export default function Hero() {
  return (
    <div className='container mb-5'>
      <div className="row text-center" >
          <img src="/images/homeHero.png" alt="hero Image" className='mb-5'/>
          <h1 className='mt-3'>Invest in everything</h1>
          <p className='mb-3'>
            Online platform to invest in stocks, derivatives, mutual funds, and
          more
          </p>
          <button className="btn btn-outline-primary p-3 fs-5 " style={{ width: "20%", margin: "0 auto" }}>Signup now</button>
        </div>     
    </div>
  );
}
