import React from "react";

function Skill(){
    return(
        <>
             <section className="skill" id="skill">
        <div className="max-width">
            <h1 className="skills-head title">My skills</h1>
            <div className="skill-content">
                <div className="left column">
                    <div className="text">
                        My creative skills & experience.
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, impedit laborum tempore exercitationem minus, tenetur deserunt quis saepe, rem iure eius itaque consequatur facilis? Cum, voluptatum! Dignissimos fugit voluptatibus quibusdam impedit iure quam animi similique magnam earum explicabo! Optio reiciendis porro cupiditate hic repellat ducimus deleniti possimus minima modi accusamus. Neque quia eum architecto magnam! Quod praesentium nihil placeat repudiandae nam eos inventore corrupti perspiciatis unde, esse, debitis exercitationem nobis?</p>
                   <div className="skill-btn">
                        <a href="#">Read More</a>
                   </div>
                </div>
                <div className="right column">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>80%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>70%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>60%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>PHP</span>
                            <span>70%</span>
                        </div>
                        <div className="line php"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MySQL</span>
                            <span>90%</span>
                        </div>
                        <div className="line sql"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Skill;