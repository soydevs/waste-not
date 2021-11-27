import './Impact.css';
import img from '../../assets/images/SG_1.png';

export default function Impact() {
    return (
        <>
        <div id="impacts">
            <h1>IMPACTS</h1>
            <main>
                {
                    [1,2,3,4,5,6].map((el, i) => {
                        return (
                            <section className="row">
                                <div className="cover_img">
                                    <img src={img} alt="sg1"></img>
                                </div>
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