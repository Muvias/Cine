import { useState } from "react";
import Slider from "react-slick";
import { HeaderContent } from "./HeaderContent";

const weekDays = [
    "DOM",
    "SEG",
    "TER",
    "QUA",
    "QUI",
    "SEX",
    "SAB"
];

export function Content() {
    const [active, setActive] = useState("DOM");

    const settings = {
        // dots: true,
        // autoplay: true,
        // fade: true,
        // infinite: true,
        // speed: 500,
        // autoplaySpeed: 5000,
        // slidesToShow: 3,
        // slidesToScroll: 1
    };

    return (
        <div className="max-w-4xl mx-auto mt-16">
            <HeaderContent />

            <div className="flex justify-center mt-16 pb-12 border-b-2 gap-8 text-4xl font-black">
                {weekDays.map(day => (
                    <h1
                        key={day}
                        className={`cursor-pointer  ${active === day ? "text-blue-900" : "text-gray-400"}`}
                        onClick={() => setActive(day)}
                    >
                        {day}
                    </h1>
                ))}
            </div>

            <div  className="text-white text-center">
                <h2 className="text-black text-3xl font-bold my-16">Filmes</h2>
                <Slider {...settings} className="h-[50vh]">
                    <div className="bg-black max-w-2xl h-[50vh]">
                        <h3>1</h3>
                    </div>
                    <div className="bg-black max-w-2xl h-[50vh]">
                        <h3>2</h3>
                    </div>
                    <div className="bg-black max-w-2xl h-[50vh]">
                        <h3>3</h3>
                    </div>
                    <div className="bg-black max-w-2xl h-[50vh]">
                        <h3>4</h3>
                    </div>
                    <div className="bg-black max-w-2xl h-[50vh]">
                        <h3>5</h3>
                    </div>
                    <div className="bg-black max-w-2xl h-[50vh]">
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        </div>
    )
}