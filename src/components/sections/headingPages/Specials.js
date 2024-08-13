import Carousel from './SpecialsCarousel';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
            <SpecialCard image={Bruschetta}name="Bruschetta" price="$20.99" description="Grilled bread, garnished with tomatoes, coriander and cheese. Seasoned with
                 salt and olive oil."/>
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$18.99" description="Delicious salad, seasoned with tomato, lettuce, mozarella cheese, and olives.
                 Dressed with rock salt, black pepper, and olive oil."/>
             
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$10.99" description="Baked bread coated in pink salt and sugar. Powdered in citrus
                 and lemon to add a tangy flavor."/>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}