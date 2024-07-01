import React from "react";

function Services(){
    return(
        <>
          <section className="service" id="service">
        <div className="max-width">
            <h1 className="serv-heading title">Services</h1>
            <div className="serv-content">
                  <div className="card">
                    <div className="box">
                        <i className="fa-solid fa-paintbrush"></i>
                        <div className="serv-titles">Web design</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi aperiam non ullam dicta aut!</p>
                    </div>
                 </div>
           
                <div className="card">
                    <div className="box">
                        <i className="fa-solid fa-chart-line"></i>
                        <div className="serv-titles">Digital marketer</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi aperiam non ullam dicta aut!</p>
                    </div>
                 </div>
                 <div className="card">
                    <div className="box">
                        <i className="fa-solid fa-code"></i>
                        <div className="serv-titles">Web Developer</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi aperiam non ullam dicta aut!</p>
                    </div>
                 </div>
              </div>
            </div>
    </section>
        </>
    )
}

export default Services ;