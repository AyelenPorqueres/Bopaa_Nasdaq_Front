'use client'

          
import { useState } from "react";

export  function Carousel() {
    const cards = [
        { id: 1, title: "AMZN", description: "Rendimiento",image:  '../images/amazon.ico' },
        { id: 2, title: "META", description: "Rendimiento",image: '../images/meta.ico'},
        { id: 3, title: "MFST", description: "Rendimiento",image: '../images/microsoft.ico' },
        { id: 4, title: "NOVN.SW", description: "Rendimiento",image: '../images/novartis.ico' },
        { id: 5, title: "PEP", description: "Rendimiento",image: '../images/pepsi.ico' },
        { id: 6, title: "V", description: "Rendimiento",image: '../images/visa.ico' },
        { id: 7, title: "WTM", description: "Rendimiento",image:  '../images/walmart.ico' },
    ];

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
        <div className="w-full p-3 h-full">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {cards.map((card) => (
                        <div key={card.id} className="w-1/4 flex-shrink-0 p-4  ">
                            <div className="card w-full shadow-xl bg-[#F3F6F9] border-solid border-2 border[#F3F6F9] rounded-none">
                                <div className="card-body">
                                    <img src={card.image} className="w-16 h-16"></img>
                                    <h2 className="card-title ml-24 mt-[-60px]">{card.title}</h2>
                                    <p className="mt-10">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Arrows */}
            <div className="flex justify-center mt-4">
                <button
                    className=" btn-outline mr-2"
                    onClick={prevSlide}
                >
                    ❮
                </button>
                <button
                    className=" btn-outline ml-2"
                    onClick={nextSlide}
                >
                    ❯
                </button>
            </div>
        </div>
    );
}


{/* 
            <div className="carousel rounded-box mt-20 space-x-5">
                <div className="carousel-item">
                    <div className="card w-96 shadow-xl bg-[#F3F6F9] border-solid border-2 border[#F3F6F9] rounded-none">
                        <div className="card-body ">
                            <img src="../imagenes/amazon.ico" alt="" className="w-[80px] h-[55px]" />
                            <h3 className="card-title ml-20 mt-[-50px]">AMZN</h3>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="card w-96 shadow-xl bg-[#F3F6F9] border-solid border-2 border[#F3F6F9] rounded-none">
                        <div className="card-body ">
                            <img src="../imagenes/meta.ico" alt="" className="w-[65px] h-[55px]" />
                            <h3 className="card-title ml-20 mt-[-50px]">META</h3>
                        </div>
                    </div>

                </div>

                <div className="carousel-item">
                    <div className="card w-96 shadow-xl bg-[#F3F6F9] border-solid border-2 border[#F3F6F9] rounded-none">
                        <div className="card-body ">
                            <img src="../imagenes/microsoft.ico" alt="" className="w-[65px] h-[55px]" />
                            <h3 className="card-title ml-20 mt-[-50px]">MSFT</h3>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="card w-96 shadow-xl bg-[#F3F6F9] border-solid border-2 border[#F3F6F9] rounded-none">
                        <div className="card-body ">
                            <img src="../imagenes/novartis.ico" alt="" className="w-[75px] h-[55px]" />
                            <h3 className="card-title ml-20 mt-[-50px]">NOVN.SW</h3>
                        </div>
                    </div>

                </div>

                <div className="carousel-item">
                    <div className="card w-96 shadow-xl bg-[#F3F6F9] border-solid border-2 border[#F3F6F9] rounded-none">
                        <div className="card-body ">
                            <img src="../imagenes/pepsi.ico" alt="" className="w-[65px] h-[55px]" />
                            <h3 className="card-title ml-20 mt-[-50px]">PEP</h3>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="card w-96 shadow-xl bg-[#F3F6F9] border-solid border-2 border[#F3F6F9] rounded-none">
                        <div className="card-body ">
                            <img src="../imagenes/visa.ico" alt="" className="w-[65px] h-[55px]" />
                            <h3 className="card-title ml-20 mt-[-50px]">V</h3>
                        </div>
                    </div>

                </div>

                <div className="carousel-item">
                    <div className="card w-96 shadow-xl bg-[#F3F6F9] border-solid border-2 border[#F3F6F9] rounded-none">
                        <div className="card-body ">
                            <img src="../imagenes/walmart.ico" alt="" className="w-[65px] h-[55px]" />
                            <h3 className="card-title ml-20 mt-[-50px]">WTM</h3>
                        </div>
                    </div>
                </div>

            </div> */}













