'use client'
import { useState } from "react";

export function Carousel(props: any) {
    const { selectedCard, onSelectedCard, empresas }: { selectedCard: any, onSelectedCard: Function, empresas: any } = props;
    const cards = empresas;


    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerSlide = 4;
    const totalSlides = Math.ceil(cards.length / cardsPerSlide);

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="w-full flex p-3 h-full justify-center items-center">
            <button
                className=" btn-outline mr-2 "
                onClick={prevSlide}
            >
                ❮
            </button>
            {/* Carousel Container */}
            <div className="relative overflow-hidden mr-4">

                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >

                    {cards.map((card: any, id: number) => (
                        <div key={id} className="w-1/4 flex-shrink-0 p-4 
                        ">
                            <div className={`card w-full shadow-lg rounded bg-[rgb(243,246,249)] border-solid border-2  cursor-pointer ${selectedCard?.codEmpresa === card.codEmpresa ? " bg-[#b5cfe8]  w-ful" : ""
                                }`} onClick={() => onSelectedCard(card)}>
                                <div className="card-body flex flex-row items-center p-4">
                                    <img src={`../images/${card.codEmpresa}.ico`} className="w-16 h-16 ml-4"></img>

                                    <div className="flex flex-row ">
                                        <h2 className="card-title ">{card.codEmpresa}</h2>
                                        <h3 className={`text-lg ${Number(card.variacion) < 0 ? "text-red-600": "text-green-600"} pl-9`}> {card.variacion}% </h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>

            <button
                className=" btn-outline"
                onClick={nextSlide}
            >
                ❯
            </button>
        </div>
    );
}














