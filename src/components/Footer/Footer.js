import './Footer.css';
export default function Footer() {
    return (<>
    <div className="footer" id="contact">
        <div className="footer__row">
            <h1>WASTE NOT</h1>
            <ul>
                <li>fb</li>
                <li>tw</li>
                <li>G+</li>
            </ul>
        </div>
        <section className="footer__row">
            <div>
                <div className="footer__details">
                    <h3>Services</h3>
                    <h5>Our Story</h5>
                    <h5>Benefits</h5>
                    <h5>Team</h5>
                    <h5>Careers</h5>
                </div>
            </div>
            <div>
                <div className="footer__details">
                    <h3>Services</h3>
                    <h5>Our Story</h5>
                    <h5>Benefits</h5>
                    <h5>Team</h5>
                    <h5>Careers</h5>
                </div>
            </div>
            <div>
                <div className="footer__details">
                    <h3>Services</h3>
                    <h5>Our Story</h5>
                    <h5>Benefits</h5>
                    <h5>Team</h5>
                    <h5>Careers</h5>
                </div>
            </div>
            <div>
                <div className="footer__details footer__subscribe">
                    <h4>SUBSCRIBE NOW</h4>
                    <input placeholder="email@xyz.com" type="email" name="email"></input>
                    <button>SEND</button>
                </div>
            </div>
        </section>
        <div className="footer__copyright"><span>@</span>2021 wasteNot</div>
    </div>
    </>)
}