const Card = () => {
    return ( 
        <section id="entertainment">
            <div className="image" style={{backgroundImage:`url(../assets/img/kegeln.jpg)`}}>
                <h3>Kegelabend</h3>
            </div>
            <div>
                <h4 className="date">13.01.2021</h4>
                <p className="time">Ab 13 Uhr</p>
                <p className="description">Erlebe Spaß und esse Schnitzel</p>
            </div>
        </section>
     );
}
 
export default Card;