import Card from './Card';

const Events = () => {
    return ( 
        <section id="events">
            <p id="covid">Due to COVID-19 and the temporary closing of FREINS, our nightly entertainment is currently on pause. Stay tuned for updates on our reopening date and new events, coming soon!</p>
            <article id="event-cards">
                <Card />
                <Card />
                <Card />
            </article>
            <button>ALLE EVENTS ANZEIGEN</button>
        </section>
     );
}
 
export default Events;