import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
            <TestimonialCard name="John Chug" description="Lipsmacking Mediterranean food that I've ever had!"/>
            <TestimonialCard name="Alana Kelly" description="My daughter really loved the cozy vibes and 
                delicious food here."/>
            <TestimonialCard name="Kelly Ren" description="Fantastic! Loved the vibe and the food!"/>
            <TestimonialCard name="Jim Smith" description="Great food, welcoming staff, cozy atmosphere!"/>
            <TestimonialCard name="Alice Lu" description="Amazing vibes! Amazing Food!"/>
            <TestimonialCard name="Tim Lock" description="Came to Little Lemon after a 2 hour flight from the North Coast.
                 The food here is soo good!"/>
            <TestimonialCard name="Ihab Goth" description="The food here was amazing! Totally worth a visit"/>
            <TestimonialCard name="Jack Ma" description="This restaurant served as a perfect lunch for me after a 
                long semester. I would definitely recommend!"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}