import './DisposeForm.css';

export default function DisposeForm() {
    return(<>
    <div className="dispose__container">
    <svg viewBox="0 0 585 526" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_606_39)">
        <path d="M578.618 48.7477C440.523 132.547 450.414 304.669 353.659 382.337C280.839 440.792 178.093 411.187 118.683 386.041C118.683 386.041 78.4213 438.596 49.5406 508.658C39.8714 532.165 -2.57774 506.264 4.87227 486.364C99.2813 234.41 420.487 108.712 420.487 108.712C420.487 108.712 193.849 98.7779 42.3759 303.455C38.318 256.704 31.5972 130.219 148.895 52.6492C307.913 -52.6239 610.859 29.2078 578.618 48.7477Z" fill="#22DB8A" fill-opacity="0.42" shape-rendering="crispEdges"/>
        <path d="M420.487 108.712C420.509 108.212 420.508 108.212 420.506 108.212L420.498 108.212L420.466 108.21L420.341 108.206C420.23 108.202 420.065 108.196 419.847 108.19C419.411 108.177 418.763 108.162 417.912 108.15C416.21 108.127 413.696 108.121 410.443 108.185C403.939 108.313 394.481 108.725 382.661 109.86C359.02 112.129 325.922 117.289 288.088 128.851C212.678 151.896 118.442 200.377 42.7611 302.097C38.7042 254.346 33.2097 129.752 149.171 53.0662L149.171 53.0661C228.531 0.528565 343.874 -5.34717 435.426 4.39075C481.19 9.25841 520.968 18.0232 547.279 26.7843C560.446 31.1684 570.197 35.538 575.643 39.3954C578.384 41.3372 579.937 43.0829 580.373 44.5566C580.583 45.2688 580.532 45.9139 580.227 46.5148C579.916 47.1289 579.317 47.7391 578.359 48.3201L578.618 48.7477L578.358 48.3203C509.166 90.3076 477.065 154.42 450.176 217.646C447.019 225.068 443.935 232.477 440.872 239.837C430.881 263.836 421.11 287.307 409.765 309C394.945 337.335 377.461 362.589 353.346 381.947C317.067 411.07 273.317 418.273 231.181 415.041C189.041 411.809 148.558 398.144 118.878 385.581L118.521 385.43L118.286 385.737L118.683 386.041C118.286 385.737 118.286 385.737 118.286 385.738L118.284 385.74L118.278 385.747L118.256 385.776L118.168 385.892C118.091 385.994 117.975 386.147 117.824 386.348C117.521 386.752 117.073 387.352 116.494 388.14C115.334 389.717 113.647 392.046 111.532 395.06C107.301 401.088 101.361 409.855 94.518 420.811C80.8326 442.724 63.5323 473.403 49.0783 508.467L49.0782 508.467C46.7355 514.163 42.4344 516.844 37.3804 517.393C32.2922 517.945 26.4168 516.332 21.0288 513.351C15.645 510.373 10.8024 506.058 7.7712 501.281C4.73944 496.502 3.55137 491.319 5.34048 486.539C52.4921 360.704 156.297 266.363 248.365 203.468C294.393 172.024 337.474 148.45 369.047 132.736C384.833 124.88 397.741 118.989 406.702 115.063C411.182 113.1 414.676 111.628 417.048 110.647C418.234 110.157 419.141 109.789 419.75 109.544C420.054 109.421 420.285 109.33 420.439 109.269L420.612 109.2L420.656 109.183L420.666 109.179C420.669 109.178 420.67 109.177 420.487 108.712ZM420.487 108.712L420.509 108.212L420.67 109.177L420.487 108.712Z" stroke="#00EA6C" shape-rendering="crispEdges"/>
        </g>
        <defs>
        <filter id="filter0_d_606_39" x="0" y="0" width="585" height="526" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_606_39"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_606_39" result="shape"/>
        </filter>
        </defs>
    </svg>

        <h2>New Dispose Request</h2>
        <section className="dispose__form">
            <div>
                <label>Item Type</label>
                <input name="type" placeholder="Steel"></input>
            </div>
            <div>
                <label>Quantity</label>
                <input className="qty" name="qty" placeholder="40"></input><span>kg</span>
            </div>
            <div>
                <label>Time Slot</label>
                <select>
                    <option>Morning (9 AM to 12 AM)</option>
                </select>
            </div>
            <div>
                <label>Description</label>
                <textarea rows="5">Id id culpa elit ex id ullamco deserunt consequat officia ipsum aliqua ea. Cillum officia adipisicing adipisicing laboris aute pariatur occaecat. Consequat consectetur qui elit labore nisi eiusmod.</textarea>
            </div>
            <div className="dispose__form__controls">
                <button className="dispose__control__add">Add</button>
                <button className="dispose__control__cancel">Cancel</button>
            </div>
        </section>
    </div>
    </>)
}