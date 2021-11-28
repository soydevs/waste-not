import React from 'react'
import './Contribute.css'

import contrib1 from '../../assets/svg/contrib1.svg'
import contrib2 from '../../assets/svg/contrib2.svg'

function Vision() {
    return (
    <>
        <div id="contribute">
            <h1>CONTRIBUTE</h1>
            <section className="contribute__cards">
                <div className="card">
                    <div className="cover">
                        <img src={contrib1} alt="" />
                    </div>
                    <p>Waste disposal is one of the prime issues faced by India. Those realising the same and disposing waste are not getting recognized. Hence we felt the need to do something for such volunteers. In a state like Kerala, it is commonly seen in the news about how wastes are getting piled up in places like Brahmapuram and how fires over there takes days to be put out.</p>
                    {/* <button>Dispose Waste</button> */}
                </div>
                <div className="card">
                    <div className="cover">
                        <img src={contrib2} alt="" />
                    </div>
                    <p>We believe that our idea could be used to connect the segregated wastes from common households to the recycling factories while creating value for the delivery personnel and local aakri people and hence is a sustainable way to reduce and slowly eliminate the waste accumulation problem of our state</p>
                    {/* <button>Dispose Waste</button> */}
                </div>
            </section>
        </div>
    </>
    )
}

export default Vision
