import Card from './Card'

const Section2 = () => {
    const francis ="Dies ist eine H1"
    return ( 
        <section id="second">
            <h1>{francis}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fugiat, magni inventore earum maxime quaerat nesciunt aliquam culpa consequatur dolor!</p>
            <div className="flex">
            <Card 
                nameKey="Finn"
                alterKey="22"
                img="https://picsum.photos/id/237/200/300"
                 />
            <Card 
                nameKey="Aos"
                alterKey="22"
                img="https://picsum.photos/id/234/200/300"

                />
            <Card 
                nameKey="Francis"
                alterKey="22"
                img="https://picsum.photos/id/235/200/300"
                />
            </div>
           
        </section>
     );
}
 
export default Section2;