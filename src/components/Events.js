import Card from './Card';
import { Link} from "react-router-dom";

const Events = () => {
    return ( 
        <section id="events">
            <h3>Events</h3>
            <div className="line"></div>
            <p id="covid">Aufgrund von Corona können aktuell leider keine unserer Events stattfinden. Wir hoffen, dass wir diese bald nachholen können! </p>
            <article id="event-cards">
            <Card 
                eventName="Kegelabend"
                eventDate="23.01.2021"
                eventTime="Ab 13 Uhr"
                eventDescription="Kegelparty für Groß und Klein!"
                img="../assets/img/kegeln.jpg"
                />
                <Card 
                eventName="Schnitzeltag"
                eventDate="26.01.2021"
                eventTime="20 bis 23 Uhr"
                eventDescription="Schnitzel mit Pommes zum halben Preis"
                img="../assets/img/schnitzeltag.jpg"/>
                <Card 
                eventName="Jazzabend"
                eventDate="JEDEN SAMSTAG IM FEBRUAR"
                eventTime="20:30 bis 0:00 Uhr"
                eventDescription="Jährliche Jazzparty"
                img="../assets/img/jazz.jpg"/>
                
            </article>
            <Link to="/events">Alle Events anzeigen</Link>
        </section>
     );
}
 
export default Events;