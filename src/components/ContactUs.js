const ContactUs = () => {
    return ( 
        <section id="contact-sec">
            <div class="contact-hero">
                <h1>Contact Us</h1>
            </div>
            <div id="contact-us">
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
            <article>
                <form action="">
                <select id="" name="">
                        <option value="kegeln">Kegelbahn mieten</option>
                        <option value="tisch">Tisch reservieren</option>
                        <option value="others">Anderes</option>
                    </select><br/>
                    <input type="text" name="" id="" placeholder="Vorname" /><br/>
                    <input type="text" name="" id="" placeholder="Nachname" /><br/>
                    <input type="tel" name="" id="" placeholder="Telefonnummer" /><br/>
                    <input type="email" name="" id="" placeholder="E-Mail" /><br/>

                    <textarea name="" id="" rows="10" cols="50" placeholder="Tippen Sie hier Ihre Nachricht..."></textarea><br/>
                    <input type="submit"></input>
                </form>
                </article>
            </div>
        </section>
     );
}
 
export default ContactUs;