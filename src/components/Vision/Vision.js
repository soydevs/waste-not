import React from 'react'


import './Vision.css'

function Vision() {
    return (
    <>
        <div className="vision" id="vision">
            <div className="vision__wave">
                <h1>Our Vision</h1>
                </div>
            <div className="vision__container">
                
                <div>
                    <h3>Discover</h3>
                    <p>changemakers and get inspired by their powerful intervention models</p>
                </div>
                <div>
                    <h3>Discover</h3>
                    <p>changemakers and get inspired by their powerful intervention models</p>
                </div>
                <div>
                    <h3>Discover</h3>
                    <p>changemakers and get inspired by their powerful intervention models</p>
                </div>
                <div>
                    <h3>Discover</h3>
                    <p>changemakers and get inspired by their powerful intervention models</p>
                </div>
            </div>
        </div>
        <div id="contribute">
            <h1>CONTRIBUTE</h1>
            <section className="contribute__cards">
            <div className="card">
                    <div className="cover"></div>
                    <p>Do cillum cillum veniam consectetur. Mollit et adipisicing nulla aute occaecat do. Sed ut perspiciatis unde omnis iste natus error sit voluptatm, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <button>Dispose Waste</button>
                </div>
                <div className="card">
                    <div className="cover"></div>
                    <p>Do cillum cillum veniam consectetur. Mollit et adipisicing nulla aute occaecat do. Sed ut perspiciatis unde omnis iste natus error sit voluptatm, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <button>Dispose Waste</button>
                </div>
            </section>
        </div>
        <div id="impacts">
            <h1>IMPACTS</h1>
            <main>
                {
                    [1,2,3,4,5,6].map((el, i) => {
                        return (
                            <section className="row">
                                <div className="cover_img"></div>
                                <p>Do cillum cillum veniam consectetur. Mollit et adipisicing nulla aute occaecat do. Sed ut perspiciatis unde omnis iste natus error sit voluptatm, totam. Commodo culpa veniam occaecat occaecat magna et officia ea incididunt laborum nostrud eu consequat aliqua. In sunt anim occaecat amet in exercitation id tempor est consectetur amet. Tempor velit elit ut adipisicing elit velit. Ea mollit magna magna incididunt eiusmod.</p>
                            </section>
                        )
                    })
                }
            </main>
        </div>
    </>
    )
}

export default Vision
