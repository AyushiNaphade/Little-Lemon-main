import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import SpecialCard from './CardInfo/SpecialCard';

export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
                        <SpecialCard image={Bruschetta}name="Bruschetta" price="$18.99" description="Bread, mango, green onions"/>
                        
            <SpecialCard image={GreekSalad} name="Greek Salad" price="$20.99" description="Feta Cheese, tomato, lettuce"/>

            <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$10.99" description="Lemon bread, vanilla Icing"/>
        </Carousel>
    )
}