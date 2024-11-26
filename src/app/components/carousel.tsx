'use client'


import { useState } from "react";

export function Carousel(props:any) {
    const cards = [
        { id: 1, title: "AMZN",name: "AMAZON",  image: '../images/amazon.ico' },
        { id: 2, title: "GOOGL", name: "GOOGLE", image: '../images/google.ico' },
        { id: 3, title: "META",name:"META", image: '../images/meta.ico' },
        { id: 4, title: "MFST",name: "MICROSOFT", image: '../images/microsoft.ico' },
        { id: 5, title: "NOVN.SW",name: "NOVARTIS", image: '../images/novartis.ico' },
        { id: 6, title: "PEP",name: "PEPSI", image: '../images/pepsi.ico' },
        { id: 7, title: "V", name: "VISA",image: '../images/visa.ico' },
        { id: 8, title: "WTM",name: "WALMART", image: '../images/walmart.ico' },

    ];
    const {selectedCard, onSelectedCard}: {selectedCard: any, onSelectedCard:Function} = props;
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

                    {cards.map((card) => (
                        <div key={card.id} className="w-1/4 flex-shrink-0 p-4 
                        ">
                            <div className={`card w-full shadow-lg rounded bg-[rgb(243,246,249)] border-solid border-2  cursor-pointer ${
                                selectedCard?.id === card.id ?  " bg-[#dcebfa]  w-ful" : ""
                              }`} onClick={()=> onSelectedCard(card) }>
                                <div className="card-body flex flex-row items-center p-4">
                                    <img src={card.image} className="w-16 h-16 ml-4"></img>

                                    <div className="flex flex-row ">
                                        <h2 className="card-title ">{card.title}</h2>
                                        <h3 className="text-lg text-red-600 pl-9"> - 1.18%</h3>
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














