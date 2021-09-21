import React from 'react';
import Hero from "../../components/Hero/Hero";
import CardList from "../../components/CardList/CardList";
import ProductModal from "../../components/UI/Modals/ProductModal";


const Main = () => {
    return (
        <div>
            <Hero/>
            <CardList/>
            <CardList type='snacks' title='Закуски'/>
            <CardList type='deserts' title='Десерты'/>
            <CardList type='beverages' title='Напитки'/>
            <CardList type='others' title='Другие товары'/>
            <ProductModal/>
        </div>
    );
};

export default Main;
