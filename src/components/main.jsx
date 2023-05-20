import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">TESJi Shop. Moda y mas.</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Este es un sitio web orientado a Ecommerce, los productos que 
                se ofertan aqui provienen de un reositiorio fictiocio y la 
                finalidad de este proyecto es educativa con una lisencia opensource.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
