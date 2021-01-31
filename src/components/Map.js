const Map = () => {
    return ( 
        <section id="map-sec">
            <div class="map-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.3955861914474!2d7.230024816144251!3d51.48760777963199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8e02490f42279%3A0xa8a3813de3a9380f!2sfrein%E2%80%99s%20Event%20Location%20-%20Moritz%20Fiege%20%26%20Astra%20Bier%20Location%20(SKY%20TV%2C%20Biergarten%20%26%20Cocktails)!5e0!3m2!1sde!2sde!4v1611591907553!5m2!1sde!2sde"></iframe>
            </div>
            <article id="touchContact">
                <div>
                    <h2>Addresse</h2>
                    <div className="line"></div>
                    <div id="address">
                        <p>Castroper Straße 1234</p>
                        <p>44869 Bochum</p>
                        <p>02156 481669</p>
                        <p>info@hausfrein.de</p>
                    </div>
                </div>
                <div id="operation">
                    <h2>Öffnungszeiten</h2>
                    <div className="line"></div>
                    <div className="operationHours">
                        <p>Monday</p>
                        <p>8AM - 4PM</p>
                        <p>Tuesday - Friday</p>
                        <p>8AM - 10PM</p>
                        <p>Saturday</p>
                        <p>9AM - 10PM</p>
                        <p>Sunday</p>
                        <p>9AM - 4PM</p>
                    </div>
                </div>
            </article>
        </section>


     );
}
 
export default Map;