import React from "react";


function Review() {
    return(
        <>
          <section className="reviews" id="reviews">
        <div className="max-width">
            <h1 className="reviews-head title">My Reviews</h1>

            <button id="left"><i className="fa-solid fa-backward"></i></button>
            <div className="image-list">
                <div className="re-box">
                    <div className="re-img">
                        <img src="src/components/Assets/profile-1.jpeg" alt=""/>
                    </div>
                    <div className="text">Someone name</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ipsum.</p>
                </div>
                <div className="re-box">
                    <div className="re-img">
                        <img src="src/components/Assets/profile-2.jpeg" alt=""/>
                    </div>
                    <div className="text">Someone name</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ipsum.</p>
                </div>
                <div className="re-box">
                    <div className="re-img">
                        <img src="src/components/Assets/profile-3.jpeg" alt=""/>
                    </div>
                    <div className="text">Someone name</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ipsum.</p>
                </div>
                <div className="re-box">
                    <div className="re-img">
                        <img src="src/components/Assets/profile-4.jpeg" alt=""/>
                    </div>
                    <div className="text">Someone name</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ipsum.</p>
                </div>
                <div className="re-box">
                    <div className="re-img">
                        <img src="src/components/Assets/profile-5.jpeg" alt=""/>
                    </div>
                    <div className="text">Someone name</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ipsum.</p>
                </div>
                <div className="re-box">
                    <div className="re-img">
                        <img src="src/components/Assets/profile-4.jpeg" alt=""/>
                    </div>
                    <div className="text">Someone name</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ipsum.</p>
                </div>
                <div className="re-box">
                    <div className="re-img">
                        <img src="src/components/Assets/profile-2.jpeg" alt=""/>
                    </div>
                    <div className="text">Someone name</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ipsum.</p>
                </div>
                <div className="re-box">
                    <div className="re-img">
                        <img src="src/components/Assets/profile-3.jpeg" alt=""/>
                    </div>
                    <div className="text">Someone name</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ipsum.</p>
                </div>
            </div>
            <button id="right"><i className="fa-solid fa-forward"></i></button>
        </div>
        <div className="scroll-container">
            <div className="scroll-path">
                <div className="scroll-thumb"></div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Review ;