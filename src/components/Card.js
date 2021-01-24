const Card = (props) => {
    return ( 
        <section id="entertainment">
            <div className="image" style={{backgroundImage:`url(${props.img})`}}>
                <h3>{props.eventName}</h3>
            </div>
            <div>
                <h4 className="date">{props.eventDate}</h4>
                <p className="time">{props.eventTime}</p>
                <p className="description">{props.eventDescription}</p>
            </div>
        </section>
     );
}
 
export default Card;