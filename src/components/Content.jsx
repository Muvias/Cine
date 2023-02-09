import axios from "axios";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useState } from "react";
import { useQuery } from "react-query";

import { Carousel } from 'react-responsive-carousel';
import { ContentHeader } from "./ContentHeader";

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

    async function getMoviesData() {
        return await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=9cd72d857790f9c47bf6782f62d8a48e&language=pt-BR&page=1")
            .then(res => res.data.results)
    }

    const { data, isLoading } = useQuery("dataMovies", () => getMoviesData())

    return (
        <div className="max-w-4xl mx-auto mt-16">
            <ContentHeader />

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

            <section className="mt-6">
                {isLoading ? <h1>Carregando...</h1> : (
                    <div>
                        <h1 className="text-center mb-12 text-3xl font-extrabold">EM CARTAZ</h1>
                        <Carousel infiniteLoop={true} emulateTouch={true} showStatus={false} autoPlay={true} interval={8000}>
                            {data.map(movie => (
                                <div
                                    key={movie.id}
                                    className="flex mb-10 mx-7 gap-4 cursor-pointer"
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                        alt={`Poster do filme ${movie.title}`}
                                        className="max-w-xs"
                                    />

                                    <div className="w-full flex justify-center">
                                        <h1 className="text-2xl font-bold">
                                            {movie.title}
                                        </h1>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                )}
            </section>

        </div>
    )
}