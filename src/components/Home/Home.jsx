import React from "react";
import { Link, NavLink } from "react-router-dom";

function Home() {
    return(
        <>
         <section className="hero" id="hero">
            <div className="max-width">
                <div className="content-hero">
                    <div className="text-1">Hello, my name is</div>
                    <div className="text-2">Awais Ali</div>
                    <div className="text-3">And I'm a <span>Developer</span></div>
                     <div className="hire">
                        <Link to="#">Hire me</Link>
                     </div>
                </div>
                <div className="hero-img">
                    <img src="src/components/Assets/bg.png"  />
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;